import deepFreeze from 'deep-lock';
import anecdoteReducer, { addAnecdoteAction, voteAnecdoteAction, initAnecdotesAction } from './anecdoteReducer';

describe('anecdote reducer', () => {

    test('anecdote voted success', () => {
        const initialState = {anecdotes: [{
            id: 0,
            content: 'test anecdote',
            votes: 0
        }]}
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
        const initialState = {anecdotes: [{
            id: 0,
            content: 'test anecdote',
            votes: 0
        }]};
        const action = {
            type: 'ADD_ANECDOTE',
            payload: 'add new anecdote',
            data: {
                content: 'test new anecdote'
            }
        };

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

    test('init anecdotes test', () => {
        const initialState = [];
        
        const action = {
            type: 'INIT_ANECDOTES',
            paylod: 'init anecdotes from the server',
            anecdotes: []
        }

        const state = initialState;
        deepFreeze(state);
        const newState = anecdoteReducer(state,action);

        expect(newState).toEqual({anecdotes:[]});

    });

    test('init anecdotes action object test', () => {

        const initialState = [];

        const action = initAnecdotesAction(initialState);
        
        expect(action).toEqual({
            type: 'INIT_ANECDOTES',
            payload: 'init anecdotes from the server',
            anecdotes: expect.any(Array)
        });
    });
});