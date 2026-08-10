import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    if (username === "fatkur" && password === "123"){
        localStorage.setItem("User_token", "jwt_secret_token_12345")
        navigate("/PPDB")
    } else{
        alert("Username salah cihuy")
    }

    
}