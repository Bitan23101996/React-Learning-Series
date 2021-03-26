import React, { useState, useMemo } from 'react'

function UseMemoHookExample() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    //Increment Counter 1
    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    //Increment Counter 2
    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    //Use of useMemo() Hook - Optimisation
    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <div>
            <button type="button" onClick={incrementCounterOne}>CounterOne - {counterOne}</button>
            {isEven ? 'Even' : 'Odd'}
            <div>
                <button type="button" onClick={incrementCounterTwo}>CounterTwo - {counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoHookExample
