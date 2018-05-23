import { createStore } from "redux";
import rootReducers from "./utils/reducers";
import { applyMiddlewares } from "react-redux";
import thunk from "redux-thunk";
import { createLogger as logger } from "redux-logger";

const middlewares = applyMiddlewares([thunk, logger()]);

const storeWithMiddlewares = createStore(rootReducers, middlewares);

export default storeWithMiddlewares;
