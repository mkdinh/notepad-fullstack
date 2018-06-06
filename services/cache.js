const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");
const keys = require("../keys");

const client = redis.createClient(keys.REDIS_URI);

client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}) {
  // only allow query with this function invoked to save to caching server
  this._cache = true;
  this._hashKey = JSON.stringify(options.key || "");
  // make function chainable
  return this;
};

mongoose.Query.prototype.exec = async function() {
  // return normal exec if caching is not applied
  // console.log(this._cache);
  if (!this._cache) return exec.apply(this, arguments);

  // create redis key
  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  });

  // stringify key
  const keyStr = JSON.stringify(key);

  try {
    const cacheValue = await client.hget(this._hashKey, keyStr);
    // if value exists then return cached data
    if (cacheValue) {
      let doc = JSON.parse(cacheValue);
      // if data is an array, return new model of each element
      return Array.isArray(doc) ? doc.map(el => new this.model(el)) : doc;
    }
  } catch (err) {
    if (err) throw err;
    return exec.apply(this, arguments);
  }
  console.log("CACHING DATA");
  // if no caching value, then save data to cache
  const result = await exec.apply(this, arguments);
  const resultJSON = JSON.stringify(result);
  client.hset(this._hashKey, keyStr, resultJSON);

  return result;
};

module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
};
