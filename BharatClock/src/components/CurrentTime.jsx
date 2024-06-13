import { useEffect, useState } from "react"

const CurrentTime = () => {

const [time,setTime]=useState(new Date());

useEffect(()=>{
  
   const interval= setInterval(()=>{
        setTime(new Date());
    },1000)

    return ()=>{
        clearInterval(interval);
        
    }
},[])
  return (
    <div>
        <p>This is the current time: {time.toLocaleString()}</p>
    </div>
  )
}

export default CurrentTime
