import {useState} from 'react'

function useCounter(initialCount = 0,value) {
    const [count, setCount] = useState(initialCount,value)
    const increment = () => {
        setCount(count + value)
    }
    const decrement = () => {
        setCount(count - value)
    }
    const reset = () => {
        setCount(initialCount)
    }
    //This method returns an array with 4 elements
    //Import this method, then destructuring array to use further
    return [count, increment, decrement, reset]
}

export default useCounter
