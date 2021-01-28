import React, { useState, useEffect } from 'react'

function CounterUsingUseEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("Use Effect- Updating the component")
        document.title = `You Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>Click {count} times</button>
        </div>
    )
}

export default CounterUsingUseEffect
