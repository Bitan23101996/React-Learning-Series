import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = "http://jsonplaceholder.typicode.com/posts/1";

function DataFetchUsingStateAXIOS() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError('Something went wrong !')
            })
        return () => {
            //Code for clean up
        }
    }, [])
    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchUsingStateAXIOS
