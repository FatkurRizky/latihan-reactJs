import React, {useState} from "react";

export default function SyaratKetentuan(){
    const [isSetuju, setIsSetuju] = useState(false)
    const [errorSetuju, setErrorSetuju] = useState("")


    const Checkbox = (e) => {
        const pilihan = e.target.checked;

        setIsSetuju(pilihan);

        if(pilihan === false){
            setErrorSetuju("Saya setuju dengan syarat dan ketentuan")
        }  else{
            setErrorSetuju("")
        }
    }


    return(
        <div>
            <input type="checkbox" onChange={Checkbox}/>
            <p className="text-red-700">{errorSetuju}</p>
        </div>
    )
}