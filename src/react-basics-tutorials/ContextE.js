import React, { Component } from 'react'
import ContextF from './ContextF'
import UserContext from './userContext'

class ContextE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E Context: {this.context}
                <ContextF />
            </div>
        )
    }
}

// ContextE.contextType = UserContext
export default ContextE
