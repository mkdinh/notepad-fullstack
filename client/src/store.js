import { createStore } from "redux";
import rootReducers from "./utils/reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger as logger } from "redux-logger";
// apply middlewares redux
const middlewares = applyMiddleware(thunk, logger());

const storeWithMiddlewares = createStore(rootReducers, middlewares);

export default storeWithMiddlewares;
