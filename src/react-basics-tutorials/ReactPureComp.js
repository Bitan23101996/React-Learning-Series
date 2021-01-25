import React, { PureComponent } from 'react'

class ReactPureComp extends PureComponent {
    render() {
        console.log("Pure Component Render")
        return (
            <div>
               Pure Component : {this.props.name}
            </div>
        )
    }
}

export default ReactPureComp
