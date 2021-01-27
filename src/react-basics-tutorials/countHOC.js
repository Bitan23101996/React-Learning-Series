import React, { Component } from 'react'

const countHOC = (WrappedComponent,incrementNumber) => {
    class CountHoc extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }
        render() {
            console.log(this.props.name)
            const { count } = this.state
            return <WrappedComponent count={count} incrementCount={this.incrementCount} {...this.props} />
        }
    }
    return CountHoc
}


export default countHOC
