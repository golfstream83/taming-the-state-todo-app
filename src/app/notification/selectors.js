export const getNotifications = (state) => getArrayOfObject(state.notificationState);

const getArrayOfObject = (object) => Object.keys(object).map(key => object[key]);