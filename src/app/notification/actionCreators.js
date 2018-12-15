import {NOTIFICATION_HIDE} from "./actions";

export const doHideNotification = (id) => ({
    type: NOTIFICATION_HIDE,
    id
});