import React from 'react'

class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello visitor!!!'
        }
    }

    changeMessage() {
        this.setState({
            msg: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button className="btn btn-error" type="button" onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;