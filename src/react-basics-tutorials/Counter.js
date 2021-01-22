import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        /*  this.setState({
             count: this.state.count + 1
         }, () => {
             console.log("State Updated:", this.state.count)
         })
         console.log(this.state.count) */
        this.setState((preState) => ({
            count: preState.count + 1
        }), () => (console.log("State Update:", this.state.count)))
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h4>Count: {this.state.count}</h4>
                <button type="button" onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
