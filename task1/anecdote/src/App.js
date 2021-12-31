import { useState } from 'react'

const App = () => {
  const anecdotes = [
    {
      text: 'If it hurts, do it more often.',
      voteCount: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      voteCount: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      voteCount: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      voteCount: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      voteCount: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      voteCount: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      voteCount: 0
    },   
  ]

  const [appAnecdotes, setappAnecdotes] = useState(anecdotes);
  const [selected, setSelected] = useState(0);

  const showNextAnecdote = () => {
    let nextIndex = selected;

    if(selected < anecdotes.length -1)
    {
      nextIndex = selected + 1;
    }
    else
      nextIndex = 0;
    setSelected(nextIndex);
  }

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  const showRandomAnecdote = () => {
    let maxLength = anecdotes.length -1;
    let randomAnecdoteNumber = getRandomIntInclusive(0, maxLength);
    setSelected(randomAnecdoteNumber);
  }

  const voteAnecdote = () => {
    let copy = [...appAnecdotes]
    copy[selected].voteCount += 1     
    setappAnecdotes(copy);
    mostVotedAnecdote();
  }

  const mostVotedAnecdote = () => {

    let copy = [...appAnecdotes];
    copy.sort((firstItem, secondItem) => firstItem.voteCount - secondItem.voteCount).reverse();
    let mostVotedAnecDote = copy[0];

    return mostVotedAnecDote;
  }



  return (
    <div>
        <div>
          {appAnecdotes[selected].text}
        </div>
        <div>
        {'has ' + appAnecdotes[selected].voteCount + ' votes'}
        </div>
        <div>
          <button onClick={() => showNextAnecdote()}>Show next anecdote</button>
          <button onClick={() => showRandomAnecdote()}>Show random anecdote</button>
          <button onClick={() => voteAnecdote()}>Vote</button>
        </div>

      <div>
        {'Most voted Anecdote'}
      
      <div>
      {mostVotedAnecdote().text}
      </div>
      <div>
      { 'Votes ' +mostVotedAnecdote().voteCount}
      </div>

      </div>

    
    </div>
  )
}

export default App;
