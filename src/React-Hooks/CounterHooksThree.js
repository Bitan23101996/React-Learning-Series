import React, { useState } from 'react'

function CounterHooksThree() {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })
    return (
        <form>
            <input type="text" value={name.firstName} onChange={(event) => setName({ ...name, firstName: event.target.value })} />
            <input type="text" value={name.lastName} onChange={(event) => setName({ ...name, lastName: event.target.value })} />
            <h3>First Name:{name.firstName}</h3>
            <h3>Last Name: {name.lastName}</h3>
            <h2>Name: {JSON.stringify(name)}</h2>
        </form>
    )
}

export default CounterHooksThree
