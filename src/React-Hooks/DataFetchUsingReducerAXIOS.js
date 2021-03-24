import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const url = "http://jsonplaceholder.typicode.com/posts/1";
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: '',
            }
        case 'FETCH_ERROR':

            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong !!!!',
            }

        default:
            return state
    }
}
function DataFetchUsingReducerAXIOS() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
        return () => {
            //cleanup code here
        }
    }, [])
    return (
        <div>
            {state.loading ? "Loading..." : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchUsingReducerAXIOS
