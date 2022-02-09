import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => {
  return (
    <div>
      <h2>Anecdotes App</h2>

      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
};

export default App;
