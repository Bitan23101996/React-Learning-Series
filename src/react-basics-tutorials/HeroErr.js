import React from 'react'

function HeroErr({ heroName }) {
    if (heroName === 'Joker') {
        throw Error("Not a Hero!")
    }
    return (
        <React.Fragment>
            {heroName}
        </React.Fragment>
    )
}

export default HeroErr
