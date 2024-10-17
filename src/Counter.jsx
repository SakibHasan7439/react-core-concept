import { useState } from "react"


export default function Counter(){
    const newInclude = 4000;
    const withDraw = 1000;
    
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count +newInclude);
    }

    const handleReduce = () =>{
        setCount(count - withDraw);
    }

     return (
        <div style={{border:"2px solid blue", borderRadius: "5px"}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}