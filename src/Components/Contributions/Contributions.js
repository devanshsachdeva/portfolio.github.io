import React from 'react';
import './Contributions.css';

const Contributions = (props) => {
    return (
        <div className='contriner'>
            <div className='con-title'>
                {props.title}
            </div>
            <div className='con-desc'>
                {props.desc}
            </div>

        </div>
    );
}

export default Contributions;