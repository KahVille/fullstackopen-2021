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