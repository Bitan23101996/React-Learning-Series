import React, { Component } from 'react'
import countHOC from './countHOC'

class CounterHoverText extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
            </div>
        )
    }
}

export default countHOC(CounterHoverText,5) 
