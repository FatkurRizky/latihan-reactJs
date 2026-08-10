import React, {useState, useEffect} from "react";


export default function CounterPage(){
    const [count, setCount] = useState(0);
    useEffect(() =>{
        console.log("Counter sekarang", count)
    }, [count])

    return(
        <div>
            <button onChange={() => setCount(count -1)} disabled={count === 0}>-</button>
            {count === 10 && <p>Sudah maksimal!</p>}
            <button on onChange={() => setCount(count + 1)} disabled={count === 10}>+</button>
        </div>
    )
}