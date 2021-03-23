import React, { useContext } from 'react'
import {CountContext} from '../App'
function ReducerF() {
    const count = useContext(CountContext)
    return (
        <div>
            Component F - Count Value: {count.countValue}
            <button type="button" onClick={() => count.dispatchMethod('increment')}>Increment</button>
            <button type="button" onClick={() => count.dispatchMethod('decrement')}>Decrement</button>
            <button type="button" onClick={() => count.dispatchMethod('reset')}>Reset</button>
        </div>
    )
}

export default ReducerF
