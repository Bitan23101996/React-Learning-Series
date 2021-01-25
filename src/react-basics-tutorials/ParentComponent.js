import React, { Component } from 'react'
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
                <ReactRegularComp name={this.state.name} />
                <ReactPureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
