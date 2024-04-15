import React, { useEffect, useState } from 'react'

function Useefect() {
    const[count, setCount] = useState(0);

    const changer = ()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        document.title =`You clicked ${count} times`;

    },[count])
  return (
    <div className='bg-white' >
        <p >you clicked {count}</p>
        <button onClick={changer}>Click Me</button>
    </div>
  )
}

export default Useefect