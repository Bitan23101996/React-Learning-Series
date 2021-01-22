import React from 'react'

function Child(props) {
    return (
        <div>
            <button type="button" onClick={() => props.childClickHandle('child')}>Generate Parent</button>
        </div>
    )
}

export default Child
