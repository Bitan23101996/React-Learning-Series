import React, { useState } from 'react'

function CounterHooksTwo() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)
    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((previousStateVal) => previousStateVal + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button type="button" onClick={() => setCount(initialValue)}>Reset</button>
            <button type="button" onClick={() => setCount((preStateValue) => preStateValue + 1)}>Increment by 1</button>
            <button type="button" onClick={() => setCount((preStateValue) => preStateValue - 1)}>Decrement by 1</button>
            <button type="button" onClick={incrementByFive}>Increment by 5</button>
        </div>
    )
}

export default CounterHooksTwo
