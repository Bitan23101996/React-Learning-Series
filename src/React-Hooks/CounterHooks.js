import React, { useState } from 'react'

function CounterHooks() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button type="button" onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default CounterHooks
