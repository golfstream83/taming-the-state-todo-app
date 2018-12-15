import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {todoReducer} from "../todo/reducer";
import {filterReducer} from "../filter/reducer";
import {notificationReducer} from "../notification/reducer";
import {watchAddTodoWithNotification} from "../todo/sagas";

const logger = createLogger();
const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer,
    notificationState: notificationReducer,
});

export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger, saga)
);

saga.run(watchAddTodoWithNotification);