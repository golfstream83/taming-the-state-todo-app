import React from "react";
import connect from "react-redux/es/connect/connect";
import {ConnectedTodoItem} from "./TodoItem";
import {getTodosAsIds} from "./selectors";

const TodoList = ({ todosAsIds }) => (
    <div>
        {todosAsIds.map(todoId =>
            <ConnectedTodoItem
                key={todoId}
                todoId={todoId}
            />
        )}
    </div>
);

const mapStateToPropsList = (state) => ({todosAsIds: getTodosAsIds(state)});

export const ConnectedTodoList = connect(mapStateToPropsList)(TodoList);