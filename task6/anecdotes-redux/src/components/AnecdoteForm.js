import { useDispatch } from 'react-redux';
import { addAnecdoteAction } from '../reducers/anecdoteReducer';
import { addNotificationAction, clearNotificationAction } from '../reducers/notificationReducer';

const AnecdoteForm = () => {

    const dispatch = useDispatch();

    const addAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        dispatch(addAnecdoteAction(content));
        dispatch(addNotificationAction(`Anecdote ${content} added`));
        setTimeout(() => {
          dispatch(clearNotificationAction())
        }, 5000);
      };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={(event) => addAnecdote(event)}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm;
