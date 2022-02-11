import { addNotificationAction, clearNotificationAction } from "./notificationReducerActions";
const initialState = {notification: 'App started'};

const notificationReducer = (state = initialState, action) => { 

    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {
                notification: action.message
            };
        case 'CLEAR_NOTIFICATION':
            return {
                notification: action.message
            }
        default:
            return state;
    }
};

export const setNotification = (message, displayTime) => {
    return async dispatch => {

        const timerPromise = new Promise((resolve, reject) => {
            dispatch(addNotificationAction(message));
            setTimeout(() => {
                resolve()
            }, displayTime);
        });
        
        timerPromise.then(() => dispatch(clearNotificationAction()))
    }
}

export const clearNotification = () => {
    return async dispatch => {
        dispatch(clearNotificationAction());
    }
}

export default notificationReducer;
