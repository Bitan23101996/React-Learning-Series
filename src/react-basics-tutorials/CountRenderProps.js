import React, { Component } from 'react'

class CountRenderProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                {/* Type 1: Use of render Props */}
                {/* {this.props.render(count, this.incrementCount)} */}

                {/* Type 2: Use of render Props */}
                {this.props.children(count, this.incrementCount)}
            </div>
        )
    }
}

export default CountRenderProps
