import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './GithubCal.css'

const GithubCal = () => {
    return (
        <div className='github'>
            <GitHubCalendar username='devanshsachdeva' />
        </div>
    );
}

export default GithubCal;
