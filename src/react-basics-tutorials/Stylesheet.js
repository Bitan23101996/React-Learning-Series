import React from 'react'
import './style.css'

const headerText = {
    color: 'grey',
    fontSize: '3rem',
    fontFamily: 'Arial'
}
function Stylesheet(props) {
    const themeName = props.primaryTheme ? 'primary' : 'secondary'
    return (
        <div>
            {/* Class Name approach */}
            <h1 className="heading">Style using class</h1>

            {/* Inline Style Approach */}
            <h1 style={headerText}>Inline Style</h1>

            {/* Conditional Style Approach */}
            <h1 className={`${themeName} font-xl`}>Conditional Style</h1>
        </div>
    )
}

export default Stylesheet
