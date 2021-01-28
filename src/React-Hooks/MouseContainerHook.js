import React, { useState, useEffect } from 'react'
import MouseEventHook from './MouseEventHook'

function MouseContainerHook() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button type="button" onClick={() => setDisplay(!display)}>Toogle Display</button>
            {
                display && (<MouseEventHook />)
            }
        </div>
    )
}

export default MouseContainerHook
