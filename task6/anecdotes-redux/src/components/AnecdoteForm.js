import { useDispatch } from 'react-redux';
import { addAnecdoteAction } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {

    const dispatch = useDispatch();

    const addAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        dispatch(addAnecdoteAction(content));
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
