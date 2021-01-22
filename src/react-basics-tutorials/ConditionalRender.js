import React, { Component } from 'react'

export class ConditionalRender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }
    }


    render() {


        /*---------APPROACH 1: if else approach - not recomanded----------*/
        /* if (this.state.isLogin) {
            return (
                <div>Welcome Bitan</div>
            )
        }
        else {
            return (
                <div>Welcome Guest</div>
            )
        } */

        /*---------APPROACH 2: Using Variable approach - not recomanded----------*/

        /* let message;
        if (this.state.isLogin) {
            message = <div>Welcome Bitan</div>
        }
        else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div> */


        /*---------APPROACH 3: Using Ternary Operator approach - recomanded----------*/

        /* return (
            this.state.isLogin ? (<div>Welcome Bitan</div>) : (<div>Welcome Guest</div>)
        ) */

        /*---------APPROACH 4: Using Short Circuit approach - recomanded----------*/

        return (
            this.state.isLogin && (<div>Welcome Bitan</div>)
        )
    }
}

export default ConditionalRender
