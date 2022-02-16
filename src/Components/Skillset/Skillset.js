import React from 'react'
import './Skillset.css'

const Skillset = (props) => {
    return (
        <div className='item'>
            <img src={props.source} alt={props.Name} />
            <span>
                {props.Name}
            </span>
        </div>
    )
}

export default Skillset;