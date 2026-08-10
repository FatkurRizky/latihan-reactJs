import React, {useState, useEffect} from "react";

export default function TimePage(){
    const [countDown, setCountDown] = useState(10);
    const [key, setKey] = useState(0);


    useEffect(() => {

        const intervalid = setInterval(() =>{

            setCountDown((prevCount) => {
                if (prevCount <= 0){
                    clearInterval(intervalid)
                    return 0;
                }

                return prevCount - 1
            })
        }, 1000)

        return () => clearInterval(intervalid)
    }, [key])


    return(
        <div>
            <button onClick={() => {setCountDown(10); setKey((k) => k + 1)} }>Reset</button>
            {countDown === 0 && <p>Waktu habis</p>}
            <p>{countDown}</p>
        </div>
    )
}