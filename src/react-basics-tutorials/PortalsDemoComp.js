import React from 'react'
import ReactDOM from 'react-dom'

const element = document.getElementById('portals-root')
function PortalsDemoComp() {
    return ReactDOM.createPortal(
        <div>
            <h4>Example Of Portals</h4>
        </div>,
        element
    )
}

export default PortalsDemoComp
