import React, { useState } from "react";


export default function AsyncPage(){
    const [error, setError] = useState("");
    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);


    const FetchData = async () =>{
        setLoad(true)
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if(!response.ok){
                    throw new Error(`HTTP statsu ${response.status}`)
                }

            const result = await response.json()
                setData(result)
            } catch (err){
                setError(err.message)
            } finally{
                setLoad(false)
            }


        }

    const refersh = async () =>{
        FetchData();

    }

    if(load) return <p>Loading...</p>
    if(error) return <p>Error!</p>

    return (
        <div>
            <ul>
                {data.map((item) =>(
                    <li key={item.id}>{item.title}</li>
                ))}

                <button onClick={refersh}>Refersh</button>
            </ul>
        </div>
    )
}