import React from 'react'

function FragmentInReactTableColumn() {
    const tbody = [{
        id: 1,
        name: 'Bitan Das',
        email: 'bitan@gmail.com',
        age: 24
    },
    {
        id: 2,
        name: 'Tapas Das',
        email: 'tapas@gmail.com',
        age: 34
    },
    {
        id: 3,
        name: 'Kruul Das',
        email: 'kruu@gmail.com',
        age: 54
    }]
    return (
        <React.Fragment>
            {
                tbody.map((body) => {
                    return (
                        <tr key={body.id}>
                            <td>{body.name}</td>
                            <td>{body.email}</td>
                            <td>{body.age}</td>
                        </tr>
                    )
                })
            }

        </React.Fragment>
    )
}

export default FragmentInReactTableColumn
