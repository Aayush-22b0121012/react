import React from 'react'
export default function content() {
    const handleChangeName =()=>{
        const names=['bob' , 'kevin' ,'world']
        const int = Math.floor(Math.random() *3)
        return names[int];
    }
    const handleClick =() =>{
        console.log('you clicked it')
    }
    const handleClick2 =(names)=>{
        
        console.log(`${names} was clicked it`);
    }
    const handleClick3 =(e)=>{
        
        console.log(e.target.innerText);
    }
  return (
    <div><p>Hello {handleChangeName()}</p>
    <button onClick={handleClick}>click it</button>
    <button onClick={()=>handleClick2('manu')}>click it</button>
    <button onClick={(e)=>handleClick3(e)}>click it</button>
    </div>
    
  )
}
