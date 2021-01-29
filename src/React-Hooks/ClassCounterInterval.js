import React, { Component } from 'react'

export class ClassCounterInterval extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countDown = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount() {
        this.interval = setInterval(this.countDown, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { count } = this.state
        return (
            <div>
                Class Component Counter: {count}
            </div>
        )
    }
}

export default ClassCounterInterval
