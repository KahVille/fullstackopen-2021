import { useState } from "react";

const FeedbackStatisticLine = ({ text, feedbackValue }) => {
  return (
    <tr><td>{text}</td><td>{feedbackValue}</td></tr>
  );
}

const FeedbackButton = (props) => {
  return (
    <button onClick={props.handleFeedback}>{props.text}</button>
  );

}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <section className="user-feedback-statistics">
      <h2>Statistics</h2>
      <div className="feedback-statistics">
        <table>
          <tbody>
            <FeedbackStatisticLine text="Good" feedbackValue={good} />
            <FeedbackStatisticLine text="Neutral" feedbackValue={neutral} />
            <FeedbackStatisticLine text="Bad" feedbackValue={bad} />
            <FeedbackStatisticLine text="All" feedbackValue={good + neutral + bad} />
            {/* As note! I'm not certain what task instructions mean by this weighted average. Would be needed to be reseacrhed more
          As I intercepted this weighted task was about how to use variables and math operations in jsx files not so much as of the task in hand.
          As such to see the reactivity of the feedback buttons corresponding to the statistics
          But to continue this excercise I left these averages as a placeholder. Would be needed to fix if shipped to production.
      */}
            <FeedbackStatisticLine text="Weighted Average" feedbackValue={((good * 1) + (neutral * 0) + (bad * -1) / (good + neutral + bad))} />
            <FeedbackStatisticLine text=" Positive Average" feedbackValue={(good / (good + neutral + bad) * 100) + ' %'} />
          </tbody>
        </table>
      </div>
    </section>

  );
}

const App = () => {

  //Feedback count
  const [good, setGood] = useState(0);
  const setGoodValue = (newValue) => {
    setGood(newValue)
  }

  const [neutral, setNeutral] = useState(0);
  const setNeutralValue = (newValue) => {
    setNeutral(newValue)
  }

  const [bad, setBad] = useState(0);
  const setBadValue = (newValue) => {
    setBad(newValue)
  }

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
            <FeedbackButton handleFeedback={() => setGoodValue(good + 1)} text="Good" />
            <FeedbackButton handleFeedback={() => setNeutralValue(neutral + 1)} text="Neutral" />
            <FeedbackButton handleFeedback={() => setBadValue(bad + 1)} text="Bad" />
          </div>
        </section>

        {(good > 0 || neutral > 0 || bad > 0) ? <Statistics good={good} neutral={neutral} bad={bad}></Statistics> : 'No user feedback'}

      </main>

    </div>
  );
}

export default App;
