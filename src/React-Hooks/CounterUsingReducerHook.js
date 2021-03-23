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
function CounterUsingReducerHook() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <div>Count : {count}</div>
            <button type="button" onClick={() => dispatch('increment')}>Increment</button>
            <button type="button" onClick={() => dispatch('decrement')}>Decrement</button>
            <button type="button" onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default CounterUsingReducerHook
