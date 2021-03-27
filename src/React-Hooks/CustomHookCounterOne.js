import React from 'react'
import useCounter from './Custom-Hooks/useCounter'

//Assign 2 const for initial & change value
const initialCount = 0;
const changeCount = 1;

function CustomHookCounterOne() {
    //Array de-structuring
    const [count, increment, decrement, reset] = useCounter(initialCount,changeCount)
    return (
        <div>
            Count = {count}
            <div>
                <button type="button" onClick={increment}>Increment by {changeCount}</button>
                <button type="button" onClick={decrement}>Decrement by {changeCount}</button>
                <button type="button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CustomHookCounterOne
