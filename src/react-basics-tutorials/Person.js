import React from 'react'

function Person({ person }) {
    return (
        <div>
            <p>My name is: {person.name}</p>
            <p>I'm {person.age} years old</p>
            <p>I know {person.skill}</p>
            <hr />
        </div>
    )
}

export default Person
