import React, { Component } from 'react'
import countHOC from './countHOC'

class CounterClickBtn extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button type="button" onClick={incrementCount}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default countHOC(CounterClickBtn,2) 
