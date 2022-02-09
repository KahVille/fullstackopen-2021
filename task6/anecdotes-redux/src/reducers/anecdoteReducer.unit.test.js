import deepFreeze from 'deep-lock';
import anecdoteReducer, { voteAnecdoteAction } from './anecdoteReducer';

describe('anecdote reducer', () => {

    const initialState = {anecdotes: [{
        id: 0,
        content: 'test anecdote',
        votes: 0
    }]}

    test('anecdote voted success', () => {
        const action = {
            type: 'VOTE_ANECDOTE',
            payload: 'vote an anecdote once',
            data: {
                id: 0
            }
        }

        const state = initialState;
        deepFreeze(state);
        const newState = anecdoteReducer(state,action);
        expect(newState).toEqual({anecdotes:[
            {
                id:0,
                content: 'test anecdote',
                votes: 1
            }
        ]});

    });

    test('voteAction object success', () => {
        const action = voteAnecdoteAction(0);

        expect(action).toEqual({
                type: 'VOTE_ANECDOTE',
                payload: 'vote an anecdote once',
                data: {
                    id: expect.any(Number)
                }
            });
    });


});