import deepFreeze from 'deep-lock';
import notificationReducer, { addNotification } from './notificationReducer';

describe('notification reducer', () => {

    const initialState = { notification: '' };

    test('add notification success', () => {
        const action = {
            type: 'ADD_NOTIFICATION',
            payload: 'add new notification',
            data: {
                message: 'Test message'
            }
        }

        const state = initialState;
        deepFreeze(state);
        const newState = notificationReducer(state,action);
        expect(newState).toEqual({notification: 'Test message'});
    });

    test('addNotification object success', () => {
        const action = addNotificationAction('Test message');

        expect(action).toEqual({
            type: 'ADD_NOTIFICATION',
            payload: 'add new notification',
            data: {
                message: expect.any(String)
            }
        });
    });
});