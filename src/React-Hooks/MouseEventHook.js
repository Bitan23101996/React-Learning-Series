import React, { useState, useEffect } from 'react'

function MouseEventHook() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseMove = (e) => {
        console.log("logMouseMove called")
        setX(e.clientX)
        setY(e.clientY)
    }

    //Here [] array is given - as useEffect will run  only 1st time(It does not depend on any state & prop change)
    //Mimic of componentDidMount()
    useEffect(() => {
        console.log("Use Effect called")
        window.addEventListener("mousemove", logMouseMove)

        // Here return means - component clean up code
        //Cancel subscribtion, removing event handler, reset counter etc.
        //Mimic of componentWillUnmount
        return () => {
            console.log("Component unmounting code")
            window.removeEventListener("mousemove", logMouseMove)
        }
    }, [])

    return (
        <div>
            Hooks: X-- {x} Y--{y}
        </div>
    )
}

export default MouseEventHook
