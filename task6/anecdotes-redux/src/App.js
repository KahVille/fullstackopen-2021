import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { voteAnecdoteAction, addAnecdoteAction } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes);
  const dispatch = useDispatch();

  const vote = (id) => dispatch(voteAnecdoteAction(id));

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(addAnecdoteAction(content));
  };

  const orderByDescendingVotes = (anecdotes) => {
    return anecdotes.sort((firstItem, secondItem) => firstItem.votes - secondItem.votes).reverse();
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={(event) => addAnecdote(event)}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
};

export default App;
