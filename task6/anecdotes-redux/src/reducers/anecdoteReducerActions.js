// Anecdote reducer actions
const initAnecdotesAction = (anecdotes) => {
    return {
        type: 'INIT_ANECDOTES',
        payload: 'init anecdotes from the server',
        anecdotes: anecdotes
    }
}

const addAnecdoteAction = (anecdote) => {
    return {
      type: 'ADD_ANECDOTE',
      payload: 'add new anecdote',
      anecdote: anecdote
    }
}

const voteAnecdoteAction = (anecdoteId) => {
    return {
      type: 'VOTE_ANECDOTE',
      payload: 'vote an anecdote once',
      data: {
          id: anecdoteId
      }
    }
}

const anecdoteReducerActions = {
    initAnecdotesAction,
    addAnecdoteAction,
    voteAnecdoteAction
};

export default anecdoteReducerActions;
