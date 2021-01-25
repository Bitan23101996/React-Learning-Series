import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.parentInputRef = React.createRef()
    }
    parentClickHandle = () => {
        this.parentInputRef.current.childFocusInput();
    }
    render() {
        return (
            <div>
                <Input ref={this.parentInputRef} />
                <button type="button" onClick={this.parentClickHandle}>Click to Focus</button>
            </div>
        )
    }
}

export default FocusInput
