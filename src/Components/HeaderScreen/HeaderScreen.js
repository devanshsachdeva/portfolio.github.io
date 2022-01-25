import React from 'react';
import './HeaderScreen.css'

const HeaderScreen = (props) => {
    return (
        <div className='hs-heading'>
            {props.title}
        </div>
    );
}

export default HeaderScreen;
