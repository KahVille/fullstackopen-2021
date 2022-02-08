import deepFreeze from 'deep-lock'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    };

    const state = initialState;

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    });
  });

  test('Ok is incremented', () => {
    const action = {
      type: 'OK'
    };

    const state = initialState;

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    });
  });

  test('Bad is incremented', () => {
    const action = {
      type: 'BAD'
    };

    const state = initialState;

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    });
  });

  test('feedback is reset', () => {
    const action = {
      type: 'RESET'
    };

    const resetInitialState = {
        good: 1,
        ok: 1,
        bad: 1
      };

    const state = resetInitialState;

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    });
  });

});