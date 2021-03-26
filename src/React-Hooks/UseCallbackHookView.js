import React from 'react'

function UseCallbackHookView({ type, value }) {
    console.log("View Return -",type)
    return (
        <div>
            {type} - {value}
        </div>
    )
}

export default React.memo(UseCallbackHookView)
