import React, { useReducer } from 'react'

const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialValue
        default:
            return state
    }
}
function CounterUsingMultipleReducerHook() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);
    return (
        <div>
            <div>Counter One: {count}</div>
            <button type="button" onClick={() => dispatch('increment')}>Increment Counter 1</button>
            <button type="button" onClick={() => dispatch('decrement')}>Decrement Counter 1</button>
            <button type="button" onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <div>Counter Two: {countTwo}</div>
                <button type="button" onClick={() => dispatchTwo('increment')}>Increment Counter 2</button>
                <button type="button" onClick={() => dispatchTwo('decrement')}>Decrement Counter 2</button>
                <button type="button" onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>


            
        </div>
    )
}

export default CounterUsingMultipleReducerHook
