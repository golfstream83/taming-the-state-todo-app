import {normalize, schema} from "normalizr";
import {TODO_ADD, TODO_TOGGLE} from "./actionCreators";

const todoSchema = new schema.Entity('todo');

const todos = [
    { id: '1', name: 'Hands On: Redux Standalone with advanced Actions' },
    { id: '2', name: 'Hands On: Redux Standalone with advanced Reducers' },
    { id: '3', name: 'Hands On: Bootstrap App with Redux' },
    { id: '4', name: 'Hands On: Naive Todo with React and Redux' },
    { id: '5', name: 'Hands On: Sophisticated Todo with React and Redux' },
    { id: '6', name: 'Hands On: Connecting State Everywhere' },
    { id: '7', name: 'Hands On: Todo with advanced Redux' },
    { id: '8', name: 'Hands On: Todo but more Features' },
    { id: '9', name: 'Hands On: Todo with Notifications' },
    { id: '10', name: 'Hands On: Hacker News with Redux' },
];

const normalizedTodos = normalize(todos, [todoSchema]);

const initialTodoState = {
    entities: normalizedTodos.entities.todo,
    ids: normalizedTodos.result,
};

export const todoReducer = (state = initialTodoState, action) => {
    switch(action.type) {
        case TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE : {
            return applyToggleTodo(state, action);
        }
        default : return state;
    }
};

const applyAddTodo = (state, action) => {
    const todo = { ...action.todo, completed: false };
    const entities = { ...state.entities, [todo.id]: todo };
    const ids = [ ...state.ids, action.todo.id ];
    return { ...state, entities, ids };
};

const applyToggleTodo = (state, action) => {
    const id = action.todo.id;
    const todo = state.entities[id];
    const toggledTodo = { ...todo, completed: !todo.completed };
    const entities = { ...state.entities, [id]: toggledTodo };
    return { ...state, entities };
};