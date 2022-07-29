import { useState, useReducer } from 'react';

function countReduce(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'dicrement':
      return state - action.payload;
    default:
      throw new Error(`unsuported action type ${action.type}`);
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(countReduce, 0);

  return (
    <>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        збільшити
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'dicrement', payload: 1 })}
      >
        зменшити
      </button>
    </>
  );
};

// або початкове значення це об'єкт:

function countReduce(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'dicrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`unsuported action type ${action.type}`);
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(countReduce, {
    count: 0,
  });

  return (
    <>
      <p>{state.count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        збільшити
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'dicrement', payload: 1 })}
      >
        зменшити
      </button>
    </>
  );
};
