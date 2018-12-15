const VISIBILITY_FILTERS = {
    SHOW_COMPLETED: item => item.completed,
    SHOW_INCOMPLETED: item => !item.completed,
    SHOW_ALL: item => true,
};

export const getTodo = (state, todoId) => state.todoState.entities[todoId];

export const getTodosAsIds = (state) => (
    state.todoState.ids
        .map(id => state.todoState.entities[id])
        .filter(VISIBILITY_FILTERS[state.filterState])
        .map(todo => todo.id)
);