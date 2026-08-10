import React, {useState} from "react";


export default function Register(){
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
    const [errorKonfirmasiPassword, setErrorKonfirmasiPassword] = useState("");


    const handlePassword = (e) =>{
        const input = e.target.value;
        setPassword(input)

    }

    const handleKonfirmasi = (e) =>{
        const input = e.target.value;
        setKonfirmasiPassword(input);

        if(input !== password){
            setErrorKonfirmasiPassword("Password tidak sama bang!")
        } else{
            setErrorKonfirmasiPassword("")
        }
    }

    return(
        <div>
            <input type="password" onChange={handlePassword}/>

            <input type="password" onChange={handleKonfirmasi}/>
            <div className="text-red-500">{errorKonfirmasiPassword}</div>
        </div>
    )
}