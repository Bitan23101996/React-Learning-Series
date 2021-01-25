import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
        this.childInputRef = React.createRef();
    }

    childFocusInput() {
        this.childInputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.childInputRef} />
            </div>
        )
    }
}

export default Input
