import React, {useState} from "react";

export default function Tombol(){
    const [isSetuju, setIsSetuju] = useState(false);
    const [errorSetuju, setErrorSetuju] = useState("");
    const [nama, setNama] = useState("");
    const [errorNama, setErrorNama] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
    const [errorKonfirmasiPassword, setErrorKonfirmasiPassword] = useState("");

    const handleNama = (e) => {
        const input = e.target.value;
        setNama(input);

        if (input.length > 20){
            setErrorNama("Nama anda terlalu panjang!")
        } else{
            setErrorNama("");
            
        }
    }

    const handlePassword = (e) =>{
        const input = e.target.value;
        setPassword(input);
    }

    const handleKonfirmasi = (e) => {
        const input = e.target.value;
        setKonfirmasiPassword(input)

        if (input !== password){
            setErrorKonfirmasiPassword("Password anda tidak sama!")
        } else{
            setErrorKonfirmasiPassword("")
        }
    }




    return(
        <div>
            <input type="text" placeholder="nama" onChange={handleNama}/>
            <div>{errorNama}</div>

            <input type="password" placeholder="password" onChange={handlePassword}/>

            <input type="password" placeholder="konfirmasi password" onChange={handleKonfirmasi}/>
            <div>{errorKonfirmasiPassword}</div>
            <button disabled={password !== konfirmasiPassword || nama.length > 20} className="bg-blue-500 disabled:bg-gray-400">Daftar sekarang</button>
        </div>
    )
}