import React, { useState, useEffect } from "react";


export default function UsePage(){
    const [query, setQuery] = useState("")

    useEffect(() => {
        console.log(" Query sekarang", query)
    }, [query])

    return (
        <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ketik sesuatu"
        />
    )
}