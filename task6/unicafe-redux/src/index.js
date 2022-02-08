import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer)

const App = () => {

  const sendFeedBackAction = (actionType, payloadDescription) => {
    const feedbackAction = {
      type: actionType,
      payload: payloadDescription
    };
    store.dispatch(feedbackAction);
  }

  const incrementFeedbackGood = () => sendFeedBackAction('GOOD','Increment good feedback');
  const incrementFeedbackOk = () => sendFeedBackAction('OK','Increment ok feedback');
  const incrementFeedbackBad = () => sendFeedBackAction('BAD','Increment bad feedback');
  const resetFeedback = () => sendFeedBackAction('RESET','Reset feedback');


  return (
    <div>
      <button onClick={() => incrementFeedbackGood()}>good</button> 
      <button onClick={() => incrementFeedbackOk()}>ok</button> 
      <button onClick={() => incrementFeedbackBad()}>bad</button>
      <button onClick={() => resetFeedback()}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp()
store.subscribe(renderApp)