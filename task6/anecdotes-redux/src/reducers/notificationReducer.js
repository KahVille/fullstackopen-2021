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

export const addNotificationAction = (message) => {
    return {
        type: 'ADD_NOTIFICATION',
        payload: 'add new notification',
        message: message
    }
}

export const clearNotificationAction = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        payload: 'clear notification',
        message: ''
    }
}

export default notificationReducer;
