import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            msg: 'Hello'
        }
        // this.clickHandle = this.clickHandle.bind(this)
    }

    /* clickHandle() {
        this.setState({
            msg: 'Good Bye!!!'
        })
    } */
    clickHandle = () => {
        this.setState({
            msg: 'Good Bye!!!'
        })
    }
    render() {

        return (
            <div>
                <h4>{this.state.msg}</h4>
                {/* <button type="button" onClick={this.clickHandle.bind(this)}>Click</button> */}
                {/* <button type="button" onClick={() => this.clickHandle()}>Click</button> */}
                <button type="button" onClick={this.clickHandle}>Click</button>
            </div>
        )
    }
}

export default EventBinding
