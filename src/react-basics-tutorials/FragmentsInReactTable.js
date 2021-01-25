import React from 'react'
import FragmentInReactTableColumn from './FragmentInReactTableColumn'

function FragmentsInReactTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <FragmentInReactTableColumn />
            </tbody>
        </table>
    )
}

export default FragmentsInReactTable
