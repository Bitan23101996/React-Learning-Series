import React, { Component } from 'react'
import Child from "./Child";
export class Parent extends Component {

    childClick = (child) => {
        alert(`Parent component but child value:${child}`)
    }
    render() {
        return (
            <div>
                <Child childClickHandle={this.childClick} />
            </div>
        )
    }
}

export default Parent
