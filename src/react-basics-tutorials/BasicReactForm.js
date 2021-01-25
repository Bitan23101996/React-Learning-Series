import React, { Component } from 'react'

class BasicReactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'angular'
        }
    }

    //handle usernamechange
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    //handle textarea change
    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    //handle topic select item
    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    //submit  the form
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Username */}
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsername} />
                </div>
                {/* Comments */}
                <div>
                    <label>Comments</label>
                    <textarea type="text" value={comments} onChange={this.handleComments}></textarea>
                </div>
                {/* Topic */}
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopic}>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                        <option value="react">React</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default BasicReactForm
