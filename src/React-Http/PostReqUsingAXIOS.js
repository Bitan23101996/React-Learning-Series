import React, { Component } from 'react'
import axios from 'axios'
class PostReqUsingAXIOS extends Component {
    baseUrl = "http://jsonplaceholder.typicode.com/posts";
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    //when input changes
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //when submit the form
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Value:", this.state)

        axios.post(`${this.baseUrl}`, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(`${error}`)
            })

    }
    render() {
        const { userId, title, body } = this.state
        return (
            <form onSubmit={this.onHandleSubmit}>
                <div>
                    <label>User Id: </label>
                    <input type="text" name="userId" value={userId} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Body: </label>
                    <input type="text" name="body" value={body} onChange={this.handleInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostReqUsingAXIOS
