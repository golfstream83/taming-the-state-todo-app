import {TODO_ADD} from "../todo/actionCreators";
import {NOTIFICATION_HIDE} from "./actionCreators";

export const notificationReducer = (state = {}, action) => {
    switch(action.type) {
        case TODO_ADD : {
            return applySetNotifyAboutAddTodo(state, action);
        }
        case NOTIFICATION_HIDE : {
            return applyRemoveNotification(state, action);
        }
        default : return state;
    }
};

const applySetNotifyAboutAddTodo = (state, action) => {
    const { name, id } = action.todo;
    return { ...state, [id]: 'Todo Created: ' + name  };
};

const applyRemoveNotification = (state, action) => {
    const {
        [action.id]: notificationToRemove,
        ...restNotifications
    } = state;
    return restNotifications;
};