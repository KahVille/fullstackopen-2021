import deepFreeze from 'deep-lock';
import anecdoteReducer from './anecdoteReducer';
import anecdoteReducerActions from './anecdoteReducerActions';

describe('anecdote reducer', () => {

    test('anecdote voted success', () => {
        const initialState = {anecdotes: [{
            id: "0",
            content: 'test anecdote',
            votes: 0
        }]}
        const action = {
            type: 'VOTE_ANECDOTE',
            payload: 'vote an anecdote once',
            anecdote: {
                id: "0",
                content: 'test anecdote',
                votes: 1
            }
        }

        const state = initialState;
        deepFreeze(state);
        const newState = anecdoteReducer(state,action);
        expect(newState).toEqual({anecdotes:[
            {
                id: "0",
                content: 'test anecdote',
                votes: 1
            }
        ]});

    });

    test('voteAction object success', () => {

        const anecdote = {
            id: "0",
            content: 'test updated vote count',
            votes: 0
        }

        const votedAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        const action = anecdoteReducerActions.voteAnecdoteAction(votedAnecdote);

        expect(action).toEqual({
                type: 'VOTE_ANECDOTE',
                payload: 'vote an anecdote once',
                anecdote: {
                    id: expect.any(String),
                    content: expect.any(String),
                    votes: expect.any(Number)
                }
            });
    });

    test('Add new anecdote success', () => {
        const initialState = {anecdotes: [{
            id: "0",
            content: 'test anecdote',
            votes: 0
        }]};
        const action = {
            type: 'ADD_ANECDOTE',
            payload: 'add new anecdote',
            anecdote: {
                id: "1",
                content: 'test new anecdote',
                votes: 0
            }
        };

        const state = initialState;
        deepFreeze(state);
        const newState = anecdoteReducer(state,action);
        expect(newState).toEqual({anecdotes:[
            {
                id: "0",
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
        const anecdote = {
            id: "1",
            content: 'test new anecdote',
            votes: 0
        }
        const action = anecdoteReducerActions.addAnecdoteAction(anecdote);

        expect(action).toEqual({
                type: 'ADD_ANECDOTE',
                payload: 'add new anecdote',
                anecdote: {
                    id: expect.any(String),
                    content: expect.any(String),
                    votes: expect.any(Number)
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

        const action = anecdoteReducerActions.initAnecdotesAction(initialState);
        
        expect(action).toEqual({
            type: 'INIT_ANECDOTES',
            payload: 'init anecdotes from the server',
            anecdotes: expect.any(Array)
        });
    });
});