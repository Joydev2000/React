import React, { useState } from 'react'
import Newsub from './Newsub'
import Bgchanger from './Bgchanger';


function App() {
 var[a,b] = useState(1);

 const neww = ()=> {
  b(a+1)
  if(a >= 5){
     b(1)
  }
 }
 const nre = () =>{
  b(a-1)
  if(a <= 0){
    b(0)
  }
 }
 
  return (
    <div className='main'>
    <h1 className='mainh'> this is main h1</h1>
    <h1 className='mainh'> {a}</h1>
    <h1 className='mainh'> {a}</h1>
    <h1 className='mainh'> {a}</h1>
    <h1 className='mainh'> {a}</h1>
    <h1 className='mainh'> {a}</h1>
    
    <button onClick={neww} >{a}</button>
    <button onClick={nre}>{a}</button>

   {/* <Newsub age="25" data= {{age:24 , name :"joydev"}} /> */}
   <Bgchanger />
    </div>

  )
}

export default App
