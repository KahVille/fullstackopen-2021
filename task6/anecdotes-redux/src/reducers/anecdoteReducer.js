import anecdoteApi from "../api/anecdoteApi";
import anecdoteReducerActions from "./anecdoteReducerActions";

  const initialState = { anecdotes: [] };

  const anecdoteReducer = (state = initialState, action) => {

    switch (action.type) {
      case 'VOTE_ANECDOTE':
        return{...state, anecdotes: state.anecdotes.map((anecdote) => anecdote.id === action.data.id ? {...anecdote, votes: anecdote.votes +1 } : anecdote)};
      case 'ADD_ANECDOTE':
        return {
          ...state,
          anecdotes: [...state.anecdotes, action.anecdote]
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
  
  export const voteAnecdote = (anecdoteId) => {
    return anecdoteReducerActions.voteAnecdoteAction(anecdoteId);
  }

  export const addAnecdote = (anecdoteData) => {
    return async dispatch => {
      const anecdote = await anecdoteApi.createNew(anecdoteData);
      return dispatch(anecdoteReducerActions.addAnecdoteAction(anecdote));
    }
  };

  export const initAnecdotes = () => {
    return async dispatch => {
      const anecdotes = await anecdoteApi.getAll();
      return dispatch(anecdoteReducerActions.initAnecdotesAction(anecdotes));
    }
  };

  
export default anecdoteReducer;