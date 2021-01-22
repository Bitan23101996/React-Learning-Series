import React from 'react'
import Person from './Person'
function ListRendering() {
    const persons = [
        {
            id: 1,
            name: 'Bitan Das',
            skill: 'React',
            age: 24
        },
        {
            id: 2,
            name: 'Tapas Das',
            skill: 'Angular',
            age: 25
        },
        {
            id: 3,
            name: 'Kumar',
            skill: 'Vue',
            age: 29
        }
    ]

    const person = persons.map((personObj) => (<Person key={personObj.id} person={personObj} />))
    return (
        <div>
            {person}
        </div>
    )
}

export default ListRendering
