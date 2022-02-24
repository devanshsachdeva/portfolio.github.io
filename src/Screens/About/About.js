import React from 'react';
import './About.css';
import GithubCal from '../../Components/GithubCal/GithubCal';
import HeaderScreen from '../../Components/HeaderScreen/HeaderScreen'
import GitHubCalendar from 'react-github-calendar';

export default function About() {
    return (
        <div className='abt-container'>
            <HeaderScreen title='About Me' />

            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='profile-details-name'>
                            <span className='priamry-text'>
                                {" "}
                                Hello, I'm <span className='highlighted-text'> Devansh Sachdeva </span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='priamry-text'>
                                {" "}
                                <h6>
                                    Exploring and Learning, from Backend to Frontend !<br />
                                    Working in the day, following passion at night❤️<br />
                                </h6>
                                <span className='profile-role-tagline'>
                                    I've been close to a computer since an early age, and been passionate about it ever since.
                                    I really liked to build stuff using no-code tools
                                    back in 2013, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a B2B Company
                                    and a Reputed MNC - Infosys for various Big Clients and Banks based in US, namely Morgan Stanley, The Capital Group  and So on.
                                    I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,
                                    Open Source
                                    and Competitive Programming.<br />
                                    <br />
                                    When I'm not coding I induldge myself in gaming, both outdoors and indoors, or maybe watch some shows on Netflix, or if the weather's good, go for a walk or drive either..
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>
                        </div>
                    </div>
                </div>
            </div>

            <div className='style'>
                Skills
                <GitHubCalendar username='devanshsachdeva' />
            </div>

            <div className='aboutmyskills'>
                <div className='aboutmyskills-container'>

                </div>
                <div className='aboutmyskills-container'>

                </div>

            </div>

        </div>
    );
}
