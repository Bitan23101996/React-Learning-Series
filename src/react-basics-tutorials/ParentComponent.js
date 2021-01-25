import React, { Component } from 'react'
import MemoComp from './MemoComp'
import ReactPureComp from './ReactPureComp'
import ReactRegularComp from './ReactRegularComp'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Bitan'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Bitan'
            })
        }, 2000)

    }


    render() {
        console.log("********Parent Component Render**********")
        return (
            <div>
                Parent Component
                {/* Example of Pure Component */}
                {/* <ReactRegularComp name={this.state.name} />
                <ReactPureComp name={this.state.name}/> */}

                {/* Example of Memo Component */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
