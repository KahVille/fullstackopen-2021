import { useState } from "react";

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

        <section className="user-feedback-statistics">
          <h2>Statistics</h2>
          <div className="feedback-statistics">
            <h3>Feedback count</h3>
            <p> Good: {good}</p>
            <p> Neutral: {neutral}</p>
            <p> Bad: {bad}</p>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
