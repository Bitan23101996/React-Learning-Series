import React,{useState} from 'react'
import useDocTitleChange from './Custom-Hooks/useDocTitleChange'

function ChangeDocumentTitleTwo() {
    const [count, setCount] = useState(0)
    //Custom Hook Method to change document title
    useDocTitleChange(count);
    return (
        <div><br/>
            <button type="button" onClick={()=> setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default ChangeDocumentTitleTwo
