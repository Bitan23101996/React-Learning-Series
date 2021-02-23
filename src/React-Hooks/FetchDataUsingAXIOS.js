import axios from 'axios';
import React, { useState, useEffect } from 'react'

function FetchDataUsingAXIOS() {

    const [posts, setPosts] = useState([]) //fetching all posts - array
    const [post, setPost] = useState({}) //fetching one post - object
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)
    const url = "http://jsonplaceholder.typicode.com/posts";

    const fetchDataFromAPI = () => {
        setButtonClick(id)
    }
    useEffect(() => {
        axios.get(`${url}/${buttonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        return () => {
            //clean up code here
        }
    }, [buttonClick])
    return (
        <div>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
            <button type="button" onClick={fetchDataFromAPI}>Fecth Data</button>
            <label>Post Title: {post.title}</label>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default FetchDataUsingAXIOS
