import React, { useEffect, useRef } from 'react'

function UseRefHookInputFocusExample() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
        return () => {
            //cleanup
        }
    }, [])
    return (
        <div>
            Focus On Input(When Page Load):
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default UseRefHookInputFocusExample
