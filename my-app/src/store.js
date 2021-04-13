import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { books } from "./Reducers/reducers";

const loggerMiddleware = createLogger();

export const store = createStore(
    books,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);
