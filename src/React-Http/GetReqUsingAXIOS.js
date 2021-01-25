import React, { Component } from 'react'
import axios from 'axios'
class GetReqUsingAXIOS extends Component {

    baseUrl = "http://jsonplaceholder.typicode.com/posts";
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }

    componentDidMount() {

        //HTTP Get Request
        axios.get(`${this.baseUrl}`)
            .then((response) => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    error: "Failed to fetch the data"
                })
            })
    }

    render() {
        const { posts, error } = this.state
        return (
            <div>
                <h5>List of Posts</h5>
                <div>
                    {
                        posts.length ?
                            posts.map((post) => {
                                return (
                                    <React.Fragment key={post.id}>
                                        <b>Title:</b>
                                        <span>{post.title}</span>
                                        <br />
                                    </React.Fragment>
                                )
                            })
                            : null
                    }
                </div>
                <div> {error ? error : null}</div>
            </div>
        )
    }
}

export default GetReqUsingAXIOS
