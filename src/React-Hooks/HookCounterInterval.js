import React, { useState, useEffect } from 'react'

function HookCounterInterval() {

    const [count, setCount] = useState(0)

    const countDown = () => {
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(countDown, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            Hook Component Count:{count}
        </div>
    )
}

export default HookCounterInterval
