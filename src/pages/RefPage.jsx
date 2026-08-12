import React,{useRef, useState} from "react";

export default function RefPage(){
    const [input, setInput] = useState("");
    const [tinggi, setTinggi] = useState(null)
    const inputRef = useRef(null);
    const ukuran = useRef(null)




    const handleFocus = () =>{
        inputRef.current.focus()
    }




    const handleReset = ()=>{
        setInput("");
        handleFocus()

        
    }

    const handleUkur = () =>{
        setTinggi(ukuran.current.offsetHeight)

    }



    return(
        <div>
        <input ref={inputRef}  value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleReset}>Reset</button>
        <div ref={ukuran}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, exercitationem veniam eligendi libero blanditiis ipsum sunt eveniet nihil maxime minima non modi nobis odit perferendis sequi. Quae maiores enim vitae.</p>

            <button onClick={handleUkur}>ukur</button>
            <p>{tinggi}</p>

        </div>
        </div>
    )
}