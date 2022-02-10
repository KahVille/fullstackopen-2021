import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdoteAction } from '../reducers/anecdoteReducer';
import { addNotificationAction, clearNotificationAction } from '../reducers/notificationReducer';

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes.anecdotes);
    const dispatch = useDispatch();
  
    const vote = (anecdote) => {
      dispatch(voteAnecdoteAction(anecdote.id));
      dispatch(addNotificationAction(`Anecdote ${anecdote.content} voted`));
      setTimeout(() => {
        dispatch(clearNotificationAction())
      }, 5000);
    };
  
    const orderByDescendingVotes = (anecdotes) => { return anecdotes.sort((firstItem, secondItem) => firstItem.votes - secondItem.votes).reverse();
    };

    return (
        <div>
        <h2>Anecdotes</h2>
        {orderByDescendingVotes(anecdotes).map(anecdote =>
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
