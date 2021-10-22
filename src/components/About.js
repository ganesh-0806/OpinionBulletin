import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About= () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>This page contains the information about who have developed the website and administration of company.</p>
        </div>
    )
}

export default Rainbow(About);