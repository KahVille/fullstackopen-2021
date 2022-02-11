import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote, initAnecdotes } from '../reducers/anecdoteReducer';
import { addNotificationAction, clearNotificationAction } from '../reducers/notificationReducer';
import Filter from './Filter';

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes.anecdotes);
    const filter = useSelector(state => state.filter.filter);

    const dispatch = useDispatch();
  
    //Init anecdotes from the server
    useEffect(()=> {
        const getAllAnecdotes = async () => {
          try {
            return dispatch(initAnecdotes());
          } catch (error) {
            return dispatch(addNotificationAction(error.message));
          }
        }
        getAllAnecdotes();
    }, [dispatch])

    const vote = (anecdote) => {
      dispatch(voteAnecdote(anecdote.id));
      dispatch(addNotificationAction(`Anecdote ${anecdote.content} voted`));
      setTimeout(() => {
        dispatch(clearNotificationAction())
      }, 5000);
    };
  
    const orderByDescendingVotes = (anecdotes) => anecdotes.sort((firstItem, secondItem) => firstItem.votes - secondItem.votes).reverse();
    const filterAnecdotes = (anecdotes) => {

      if(!anecdotes || anecdotes.length < 1)
        return [];

      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter));
    }  

    return (
        <div>
        <h2>Anecdotes</h2>

        <Filter />

        {orderByDescendingVotes(filterAnecdotes(anecdotes)).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )}
        </div>
    )
}

export default AnecdoteList;
