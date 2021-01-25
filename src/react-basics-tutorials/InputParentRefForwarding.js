import React, { Component } from 'react'
import InputChildRefForwarding from './InputChildRefForwarding';

class InputParentRefForwarding extends Component {
    constructor(props) {
        super(props)
        this.parentInputRef = React.createRef();
    }

    clickHandle = () => {
        this.parentInputRef.current.focus()
    }

    render() {
        return (
            <div>
                <InputChildRefForwarding ref={this.parentInputRef} />
                <button type="text" onClick={this.clickHandle}>Click to Focus</button>
            </div>
        )
    }
}

export default InputParentRefForwarding
