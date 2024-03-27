import './Welcome.css'
import {useState} from 'react';

function Welcome(){

    const [subButton, setsubButton] = useState(true)

    const toggleMode = () => {
        setsubButton(!subButton);
    }; 
    return(
        <div className='bgcontainer'>
            <div>
            <h1>Welcome</h1>
            <h3>Thank you! Happy Learning</h3>
            <button onClick={toggleMode}>
                {subButton ? 'Subscribe' : 'Subscribed'}</button>
            </div>
        </div>
    )
}

export default Welcome