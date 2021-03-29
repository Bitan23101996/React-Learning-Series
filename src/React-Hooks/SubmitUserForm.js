import React from 'react'
import useInput from './Custom-Hooks/useInput'

function SubmitUserForm() {

    //useInput custom hook call
    const [firstName, firstNameBind, resetFirstName] = useInput('')
    const [lastName, lastNameBind, resetLastName] = useInput('')

    //submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hi, ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><label>First Name:</label><input type="text" {...firstNameBind} /></div>
                <div><label>Last Name:</label><input type="text"{...lastNameBind} /></div>
                <div><button type="submit">Submit</button></div>
            </form>

        </div>
    )
}

export default SubmitUserForm
