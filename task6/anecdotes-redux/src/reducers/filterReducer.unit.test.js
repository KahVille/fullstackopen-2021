import deepFreeze from 'deep-lock';
import filterReducer, { setFilterValueAction } from './filterReducer';

describe('notification reducer', () => {

    const initialState = { filter: '' };

    test('set filter success', () => {
        const action = {
            type: 'SET_FILTER',
            payload: 'set filter value',
            filter: 'test message'
        }
        
        const state = initialState;
        deepFreeze(state);
        const newState = filterReducer(state,action);
        expect(newState).toEqual({filter: 'test message'});
    });

    test('setFilterValue object success', () => {
        const action = setFilterValueAction('Test message');

        expect(action).toEqual({
            type: 'SET_FILTER',
            payload: 'set filter value',
            filter: expect.any(String)
        });
    });

});