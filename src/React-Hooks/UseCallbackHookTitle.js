import React from 'react'

function UseCallbackHookTitle() {
    console.log("Title")
    return (
        <div>
            <h2>Use of useCallbackHook</h2>
        </div>
    )
}

export default React.memo(UseCallbackHookTitle)
