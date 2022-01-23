import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/dvlpng.json'
import '../../Screens/Home/Home.css'

const Lotties = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='col-lg-6'>
            <Lottie
                options={defaultOptions}
            />
        </div>
    );
}

export default Lotties;