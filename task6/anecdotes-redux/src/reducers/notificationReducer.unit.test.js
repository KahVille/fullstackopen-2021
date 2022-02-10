import deepFreeze from 'deep-lock';
import notificationReducer, { addNotificationAction, clearNotificationAction } from './notificationReducer';

describe('notification reducer', () => {

    const initialState = { notification: '' };

    test('add notification success', () => {
        const action = {
            type: 'ADD_NOTIFICATION',
            payload: 'add new notification',
            message: 'Test message'
        }

        const state = initialState;
        deepFreeze(state);
        const newState = notificationReducer(state,action);
        expect(newState).toEqual({notification: 'Test message'});
    });

    test('clear notification success', () => {
        const action = {
            type: 'CLEAR_NOTIFICATION',
            payload: 'clear notification',
            message: ''
        }

        const state = initialState;
        deepFreeze(state);
        const newState = notificationReducer(state,action);
        expect(newState).toEqual({notification: ''});
    });

    test('addNotification object success', () => {
        const action = addNotificationAction('Test message');

        expect(action).toEqual({
            type: 'ADD_NOTIFICATION',
            payload: 'add new notification',
            message: expect.any(String)
        });
    });

    test('clear notification action object success', () => {
        const action = clearNotificationAction();

        expect(action).toEqual({
            type: 'CLEAR_NOTIFICATION',
            payload: 'clear notification',
            message: ''
        });
    });

});