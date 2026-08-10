import React, { useEffect, useState } from "react";

export default function FetchPage(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");



   useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")

                if(!response.ok){
                    throw new Error(`HTTP status ${response.status}`)
                }

                const result = await response.json()
                setData(result)
            }
            catch (err){
                setError(err.message)
            } finally{
                setLoading(false)
            }

        }
        fetchData()

    }, [])

    const filtered = data.filter((user) => user.name.toLowerCase().includes(query.toLocaleLowerCase()));


    if(loading) return <p>loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div>

            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <p>Ditemukan {filtered.length} user</p>

            <ul>
                {filtered.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}