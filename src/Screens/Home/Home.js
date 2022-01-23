import React from 'react';
import LeftSide from '../../Components/LeftSide/LeftSide';
import Lotties from '../../Components/Lottie/Lotties';
import Typical from 'react-typical'
import './Home.css'
import NameCard from '../../Components/NameCard/NameCard';

export default function Home() {
    return (
        <div className='position-relative'>
            <LeftSide />
            <section className='section section-lg section-shaped pb-250'>
                <div className="shape shape-style-1 bg-gradient-info">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='py-lg-md d-flex container'>
                    <div className='col px-0'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h1 className='display-3 text-white'> Hey, There !!</h1>
                                <NameCard />
                                <p className='lead text-white'>

                                    Exploring and Learning, from Backend to Frontend !<br />
                                    Working in the day, following passion at night❤️<br />
                                    <br />
                                </p>

                                <div className="btn-wrapper my-4">
                                    <a href="https://cv.hanzla.ga" className="btn-white btn-icon mb-3 mb-sm-0 ml-1 btn btn-default">
                                        <span className="btn-inner--icon mr-1">
                                            <i className="fa fa-file">
                                            </i>
                                        </span>
                                        <span classname="btn-inner--text">
                                            See My Resume
                                        </span>
                                    </a>
                                </div>

                            </div>
                            <Lotties />
                        </div>

                    </div>

                </div>
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="fill-white" points="2560 0 2560 100 0 100">
                        </polygon>
                    </svg>
                </div>
            </section>
        </div>
    );
}
