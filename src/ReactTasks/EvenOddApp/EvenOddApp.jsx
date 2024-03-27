import { useState, useEffect } from 'react'
import './EvenOddApp.css'


function EvenOddApp(){
const [count, setCount] = useState(0)
const [value, setValue] = useState("Odd")

const newCount = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setCount(prevCount => prevCount + randomNumber);
  }

  useEffect(() => {
    if (count % 2 === 0) {
      setValue("Even");
    } else {
      setValue("Odd");
    }
  }, [count]);


    return(
        <div className='bgcontainer'>
            <div className='subcontainer'>
            <h1>Count {count}</h1>
            <h2>Count is {value}</h2>
            <button onClick={newCount}>Increment</button>
            <p>*Increase by Random Number between 1 and 100</p>
            </div>
        </div>
    )
}
export default EvenOddApp