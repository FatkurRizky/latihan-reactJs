import React, {useState} from "react";

export default function Profesi(){
    const [profesi, setProfesi] = useState("");
    const [error, setError] = useState("");


    const handleProfesi = (e) => {
        const pilih = e.target.value;
        setProfesi(pilih);

        if(pilih === ""){

            setError("Anda wajib memilih profesi");

        } else{
            setError("");
        }
    }

    return(
        <div>
            <select name="" id="" onChange={handleProfesi}>
                <option value=""></option>
                <option value="Assasin">Assasin Elite</option>
                <option value="butler">Butler</option>
            </select>

            <div className="text-red-400">{error}</div>
        </div>
    )
}