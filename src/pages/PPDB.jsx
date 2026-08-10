import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function PPPDB(){
    
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorNama, setErrorNama] = useState("");

    const handleNamaChange = (e) => {
        const ketikan = e.target.value;
        setNama(ketikan)
        
        if (ketikan.length < 3){
         setErrorNama("Nama minimal 3 huruf! dan email harus menggunakan @")
        } else {
            setErrorNama("")
        }

    
    }


    const handleEmailChange = (e) => {
        const ketikan = e.target.value;

        setEmail(ketikan)

        if (!ketikan.includes('@')){
            setErrorEmail("Email harus menggunakan @")
        } else{
            
            setErrorEmail("")
        }
    }
    return(
        <div className="p-8">

            <h2>Pendaftaran Zoldyck Axademy</h2>

            <div>
                <input type="text" placeholder="Nama" onChange={handleNamaChange}/>
                <p>{errorNama}</p>
            </div>

            <div>
                <input type="email" placeholder="Email" onChange={handleEmailChange}/>
                <p className="text-red-500">{errorEmail}</p>
            </div>

            <button type="submit">Daftar sekarang</button>
        </div>
    )
    
}