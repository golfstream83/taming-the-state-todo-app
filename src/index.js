import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from "./app/store/store";
import {ConnectedTodoList} from "./app/todo/TodoList";
import {ConnectedFilter} from "./app/filter/Filter";
import {ConnectedNotifications} from "./app/notification/Notifications";
import {ConnectedTodoCreate} from "./app/todo/TodoCreate";

const TodoApp = () => (
    <div>
        <ConnectedFilter />
        <ConnectedTodoCreate />
        <ConnectedTodoList />;
        <ConnectedNotifications />
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
