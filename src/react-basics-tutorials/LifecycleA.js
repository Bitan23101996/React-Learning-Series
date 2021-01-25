import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
        console.log("LifecycleA Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }
    handleChange = () => {
        this.setState({
            name: 'Bitan'
        })
    }
    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>LifecycleA render</div>
                <button type="button" onClick={this.handleChange}>Click</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
