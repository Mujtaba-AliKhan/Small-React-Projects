import React, { useState } from 'react';
import './LightDarkMode.css';

function LightDarkMode() {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div className={isLightMode ? 'light-mode' : 'dark-mode'}>
            <h1>Click to Change Mode</h1>
            <button onClick={toggleMode}>
                {isLightMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default LightDarkMode;
