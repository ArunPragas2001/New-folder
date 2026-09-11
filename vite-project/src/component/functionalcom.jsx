import { useState } from 'react'
export default function greeting(props){
    const [count,setCount]=useState(0);
    return (
    <>
    <h1 className='bg'>Hello { props.name}! this is functional component</h1>
    <button onClick={()=>setCount(count+1)}>{count}</button>
    
    </>);
}