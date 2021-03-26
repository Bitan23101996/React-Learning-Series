import React, { useState, useEffect, useRef } from 'react'

function UseRefHookTimerExample() {
    const [timer, setTimer] = useState(0)
    const intervalTimer = useRef()
    const tick = () => {
        setTimer(preTimer => preTimer + 1)
    }
    useEffect(() => {
        intervalTimer.current = setInterval(tick, 1000);
        return () => {
            clearInterval(intervalTimer.current)
        }
    }, [])
    return (
        <div>
            Count :{timer}
            <button type="button" onClick={() => clearInterval(intervalTimer.current)}>Clear Timer</button>
        </div>
    )
}

export default UseRefHookTimerExample
