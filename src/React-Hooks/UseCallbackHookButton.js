import React from 'react'

function UseCallbackHookButton({ handleClick, children }) {
    console.log("Button Called - ",children)
    return (
        <div>
            <button type="button" onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(UseCallbackHookButton)
