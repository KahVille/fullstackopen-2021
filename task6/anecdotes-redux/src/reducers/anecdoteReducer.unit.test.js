import deepFreeze from 'deep-lock';
import anecdoteReducer from './anecdoteReducer';

describe('anecdote reducer', () => {

    const initialState = [{
        id: 0,
        content: 'test anecdote',
        votes: 0
    }]

    test('anecdote voted success', () => {
        const action = {
            type: 'VOTE_ANECDOTE'
        }

        const state = initialState;

        deepFreeze(state);

        const newState = anecdoteReducer(state,action);

        expect(newState).toEqual([
            {
                id:0,
                content: 'test anecdote',
                votes: 1
            }
        ]);

    });

});