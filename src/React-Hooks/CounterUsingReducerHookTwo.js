import React, { useReducer } from 'react'
const initialValue = {
    primaryCounter: 0,
    secondaryCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, primaryCounter: state.primaryCounter + action.value }
        case 'decrement':
            return { ...state, primaryCounter: state.primaryCounter - action.value }
        case 'increment1':
            return { ...state, secondaryCounter: state.secondaryCounter + action.value }
        case 'decrement1':
            return { ...state, secondaryCounter: state.secondaryCounter - action.value }
        case 'reset':
            return initialValue
        default:
            return state
    }
}

function CounterUsingReducerHookTwo() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <p>Counter One: {count.primaryCounter}</p>
            <p>Counter Two: {count.secondaryCounter}</p>
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment Counter 1</button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement Counter 1</button>
            <button type="button" onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button type="button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment Counter 2</button>
                <button type="button" onClick={() => dispatch({ type: 'decrement1', value: 1 })}>Decrement Counter 2</button>
            </div>
            <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterUsingReducerHookTwo
