import {put, takeEvery} from "redux-saga/effects";
import {delay} from "redux-saga";
import {TODO_ADD_WITH_NOTIFICATION} from "./actions";
import {doAddTodo} from "./actionCreators";
import {doHideNotification} from "../notification/actionCreators";

export function* watchAddTodoWithNotification() {
    yield takeEvery(TODO_ADD_WITH_NOTIFICATION, handleAddTodoWithNotification);
}

function* handleAddTodoWithNotification(action) {
    const { todo } = action;
    const { id, name } = todo;
    yield put(doAddTodo(id, name));
    yield delay(5000);
    yield put(doHideNotification(id));
}