import React, {useState} from "react";

export default function Try(){
    const [isTerlihat, setTerlihat] = useState(false);

    const handleMetal = () =>{
        setTerlihat(!isTerlihat);
    }

    return(
        <div className="p-10">

            <input type={isTerlihat === true ? "text" : "password"}  placeholder="Rahasia Negara" className="border-2 p-2"/>


            <button onClick={handleMetal} className="bg-gray-200 p-2 ml-2">
                {isTerlihat === true ? "sembunyikan" : "Tampilkan"}
            </button>
        </div>
    )
}