import { useDispatch } from 'react-redux';
import {addAnecdote} from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {

    const dispatch = useDispatch();

    const createAnecdote = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;

        const anecdoteData = {
            content: content,
            votes: 0
        };
        dispatch(addAnecdote(anecdoteData));
        dispatch(setNotification(`Anecdote ${content} added`, 5000));
      };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={(event) => createAnecdote(event)}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm;
