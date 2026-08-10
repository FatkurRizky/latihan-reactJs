import React, {useState} from "react";

export default function Latihan(){

    const [password, setPassword] = useState("")
    const [error, setErrorPassword] = useState("");

    const handleCahangePassword = (e) => {
        const ketikan = e.target.value;
        setPassword(ketikan)

        if (ketikan.length < 8){
            setErrorPassword("Password terlalu pendek")
        } else{
            setErrorPassword("")
        }
    }


    return(
        <div>
            <input type="password" placeholder="password" onChange={handleCahangePassword}/>
            <p className="text-red-500">{error}</p>
        </div>
    )

}