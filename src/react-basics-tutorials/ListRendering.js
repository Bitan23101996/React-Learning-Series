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

            
            {/* This is perfectly fine as this class will applied both parent and child */}
            <h5 className="error-color">CSS Style Normal Way</h5>

            {/* This will give error as this class is only applied particular folder not it's child component */}
            {/* <h5 className={Styles.success}>CSS Style Module Approach Way</h5> */}
            
        </div>
    )
}

export default ListRendering
