  const getId = () => (100000 * Math.random()).toFixed(0);
  
  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  };
  
const initialState = { anecdotes: [] };

  const anecdoteReducer = (state = initialState, action) => {

    switch (action.type) {
      case 'VOTE_ANECDOTE':
        return{...state, anecdotes: state.anecdotes.map((anecdote) => anecdote.id === action.data.id ? {...anecdote, votes: anecdote.votes +1 } : anecdote)};
      case 'ADD_ANECDOTE':
        return {
          ...state,
          anecdotes: [...state.anecdotes, asObject(action.data.content)]
        };
        case 'INIT_ANECDOTES':
        return {
          ...state,
          anecdotes: action.anecdotes
        }
      default:
        return state;
    };
  };
  
  export const voteAnecdoteAction = (anecdoteId) => {
      return {
        type: 'VOTE_ANECDOTE',
        payload: 'vote an anecdote once',
        data: {
            id: anecdoteId
        }
      }
  }

  export const addAnecdoteAction = (content) => {
    return {
      type: 'ADD_ANECDOTE',
      payload: 'add new anecdote',
      data: {
          content: content
      }
    }
  }

  export const initAnecdotesAction = (anecdotes) => {
    return {
      type: 'INIT_ANECDOTES',
      payload: 'init anecdotes from the server',
      anecdotes: anecdotes
    }
  }

  
export default anecdoteReducer;