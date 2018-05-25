const Mockgoose = require("mockgoose").Mockgoose;
const keys = require("../../keys");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const mockgoose = new Mockgoose(mongoose);
mockgoose.helper.setDbVersion("3.2.1");

const mockgoose_helper = {
  connect: async () => {
    try {
      mongoose.models = {};
      mongoose.modelSchemas = {};
      await mockgoose.prepareStorage();
      await mongoose.connect(keys.MONGODB_URI);
    } catch (err) {
      console.log(err);
    }
  },

  clean: async () => {
    return mockgoose.helper.reset();
  },

  disconnect: async () => {
    mongoose.models = {};
    mongoose.modelSchemas = {};
    await mockgoose.helper.reset();
    await mongoose.disconnect();
  }
};

module.exports = mockgoose_helper;
