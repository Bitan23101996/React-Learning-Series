import React, { Component } from 'react'

class CounterClickBtnTwo extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    Clicked {count} times
                </button>
            </div>
        )
    }
}

export default CounterClickBtnTwo
