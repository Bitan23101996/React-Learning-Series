import React, { useContext } from 'react'
import { CountContext } from '../App'
function ReducerA() {
    const count = useContext(CountContext)
    return (
        <div>
            Component A - Count Value: {count.countValue}
            <button type="button" onClick={() => count.dispatchMethod('increment')}>Increment</button>
            <button type="button" onClick={() => count.dispatchMethod('decrement')}>Decrement</button>
            <button type="button" onClick={() => count.dispatchMethod('reset')}>Reset</button>
            <br/>
        </div>
    )
}

export default ReducerA
