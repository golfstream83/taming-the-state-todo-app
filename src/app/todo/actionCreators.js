export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_ADD_WITH_NOTIFICATION = 'TODO_ADD_WITH_NOTIFICATION';

export const doAddTodo = (id, name) => ({
    type: TODO_ADD,
    todo: { id, name },
});

export const doToggleTodo = (id) => ({
    type: TODO_TOGGLE,
    todo: { id }
});

export const doAddTodoWithNotification = (id, name) => ({
    type: TODO_ADD_WITH_NOTIFICATION,
    todo: {id, name}
});