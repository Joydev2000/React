import React, { useState } from 'react'
import Newsub from './Newsub'
import Bgchanger from './Bgchanger';
import CardDataTrans from './CardDataTrans';
import CardTwo from './CardTwo';
import Crads from './Crads';


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
   {/* <Bgchanger /> */}


   {/* < CardDataTrans img= "https://images.pexels.com/photos/14734162/pexels-photo-14734162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="joydev"  />
   < CardDataTrans gap="mt-12" img="https://images.pexels.com/photos/17070821/pexels-photo-17070821/free-photo-of-pair-of-puffins-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="halder" />   */}
   <Crads />
         
    </div>

  )
}

export default App
