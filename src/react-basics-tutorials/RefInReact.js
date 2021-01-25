import React, { Component } from 'react'

class RefInReact extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef(); //type 1

        //type 2
        this.cbRef = null;
        this.inputCbRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        //Ref usecase in type : 1
        /* this.inputRef.current.focus()
        console.log(this.inputRef) */

        //ref use case in Type: 2
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    render() {
        return (
            <div>
                {/* Type 1 */}
                <input type="text" ref={this.inputRef} />
                {/* Type 2 */}
                <input type="text" ref={this.inputCbRef} />
            </div>
        )
    }
}

export default RefInReact
