import React from 'react'
import useCounter from './Custom-Hooks/useCounter'
//Assign 2 const for initial & change value
const initialCount = 10;
const changeCount = 10;

function CustomHookCounterTwo() {
    //Array de-structuring
    const [count, increment, decrement, reset] = useCounter(initialCount, changeCount)
    return (
        <div>
            <br />
            <br />
            Count = {count}
            <div>
                <button type="button" onClick={increment}>Increment by {changeCount}</button>
                <button type="button" onClick={decrement}>Decrement by {changeCount}</button>
                <button type="button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CustomHookCounterTwo
