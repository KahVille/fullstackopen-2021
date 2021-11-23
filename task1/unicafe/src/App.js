import { useState } from "react";

const Statistics = ({good, neutral, bad}) => {
  return (
    <section className="user-feedback-statistics">
    <h2>Statistics</h2>
    <div className="feedback-statistics">
      <h3>Feedback count</h3>
      <p> Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad: {bad}</p>
      <p> All: {good + neutral + bad}</p>
      <h3> Feedback average</h3>
      {/* As note! I'm not certain what task instructions mean by this weighted average. Would be needed to be reseacrhed more
          As I intercepted this weighted task was about how to use variables and math operations in jsx files not so much as of the task in hand.
          As such to see the reactivity of the feedback buttons corresponding to the statistics
          But to continue this excercise I left these averages as a placeholder. Would be needed to fix if shipped to production.
      */}
      <p> Weighted Average: {((good * 1) + (neutral * 0) + (bad * -1) / (good + neutral + bad) )}</p>
      <p> Positive Average: {(good / (good + neutral + bad) * 100 )} %</p>
    </div>
  </section>

  );
}

const App = () => {

  //Feedback count
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">

      <header>
        <h1>Unicafe user feedback survey</h1>
      </header>

      <main>
        <section className="user-feedback-input">
          <h2>
            Provide feedback on overall experience
          </h2>
          <div className="feedback-buttons">
            <button onClick= {() => setGood(good+1)}>Good</button>
            <button onClick= {() => setNeutral(neutral+1)}>Neutral</button>
            <button onClick= {() => setBad(bad+1)}>Bad</button>
          </div>
        </section>

        {(good > 0 || neutral > 0 || bad > 0) ? <Statistics good={good} neutral={neutral} bad={bad}></Statistics> : 'No user feedback'}
              
      </main>

    </div>
  );
}

export default App;
