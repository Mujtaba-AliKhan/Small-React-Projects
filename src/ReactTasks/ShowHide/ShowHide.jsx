import React, { useState } from 'react';
import './ShowHide.css';

function ShowHide() {
    const [visibility, setVisibility] = useState({
        firstName: true,
        lastName: true,
    });

    const toggleVisibility = (key) => {
        setVisibility({
            ...visibility,
            [key]: !visibility[key],
        });
    };

    return (
        <div className='bgcontainer'>
            <h1>Show/Hide</h1>
            <div className="nameContainer">
                <div className="fname">
                    <button onClick={() => toggleVisibility('firstName')}>
                        {visibility.firstName ? 'Hide' : 'Show'} First Name
                    </button>
                    {visibility.firstName && (
                        <div className="nameCard">
                            Mujtaba Ali
                        </div>
                    )}
                </div>
                <div className="lname">
                    <button onClick={() => toggleVisibility('lastName')}>
                        {visibility.lastName ? 'Hide' : 'Show'} Last Name
                    </button>
                    {visibility.lastName && (
                        <div className="nameCard">
                            Khan
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShowHide;
