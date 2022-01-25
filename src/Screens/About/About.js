import React from 'react';
import './About.css';
import Contributions from '../../Components/Contributions/Contributions';
import GithubCal from '../../Components/GithubCal/GithubCal';

export default function About() {
    return (
        <div className='abt-container'>
            <div className='title'>
                Github Calendar Heatmap
            </div>
            <br />
            <br />
            <GithubCal />
            <br />
            <br />
            <div className='contributions'>
                <Contributions title="Contributions" desc="31 Contributions in the Last year" />
                <Contributions title="Longest Streak" desc="9 days : April-30'21 to May-09'21" />
                <Contributions title="Title" desc="Description goes here" />
            </div>
            <br />
            <br />

        </div>
    );
}
