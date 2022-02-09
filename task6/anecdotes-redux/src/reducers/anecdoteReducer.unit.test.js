import deepFreeze from 'deep-lock';
import anecdoteReducer, { addAnecdoteAction, voteAnecdoteAction } from './anecdoteReducer';

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

    test('Add new anecdote success', () => {
            const action = {
            type: 'ADD_ANECDOTE',
            payload: 'add new anecdote',
            data: {
                content: 'test new anecdote'
            }
        }

        const state = initialState;
        deepFreeze(state);
        const newState = anecdoteReducer(state,action);
        expect(newState).toEqual({anecdotes:[
            {
                id:0,
                content: 'test anecdote',
                votes: 0
            },
            {
                id: expect.any(String),
                votes:0,
                content: 'test new anecdote'
            }
        ]});

    });

    test('addAction object success', () => {
        const action = addAnecdoteAction('test new anecdote');

        expect(action).toEqual({
                type: 'ADD_ANECDOTE',
                payload: 'add new anecdote',
                data: {
                    content: expect.any(String)
                }
            });
    });


});