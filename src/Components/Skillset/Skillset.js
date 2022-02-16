import React from 'react'
import './Skillset.css'

const Skillset = (props) => {
    return (
        <div className='item'>
            <img src='../../assets/skills/angular.svg' alt='Angular' />
            <span>
                {props.Name}
            </span>
        </div>
    )
}

export default Skillset;