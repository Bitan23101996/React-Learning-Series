import React, { useState, useEffect } from 'react'

function CounterUsingUseEffect() {

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

    return (
        <div>
            <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>Click {count} times</button>
        </div>
    )
}

export default CounterUsingUseEffect
