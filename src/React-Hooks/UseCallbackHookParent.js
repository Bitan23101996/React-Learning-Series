import React, { useState, useCallback } from 'react'
import UseCallbackHookButton from './UseCallbackHookButton'
import UseCallbackHookTitle from './UseCallbackHookTitle'
import UseCallbackHookView from './UseCallbackHookView'

function useCallbackHookParent() {
    const [age, setAge] = useState(24)
    const [salary, setSalary] = useState(17000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <UseCallbackHookTitle />
            <UseCallbackHookView type="Age" value={age} />
            <UseCallbackHookButton handleClick={incrementAge}>Increment Age</UseCallbackHookButton>
            <UseCallbackHookView type="Salary" value={salary} />
            <UseCallbackHookButton handleClick={incrementSalary}>Increment Salary</UseCallbackHookButton>
        </div>
    )
}

export default useCallbackHookParent
