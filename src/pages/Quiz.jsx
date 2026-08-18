import { useRef, useState, useEffect } from "react";

export default function Quiz() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('');
    const inputRef = useRef(null)

    useEffect(() => {
        console.log('mount!')
    }, [])
    useEffect(() => {
        console.log('count berubah:', count)
    }, [count])
    useEffect(() => {
        console.log('render')
    })

    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)


    }

    const handleBenar = () => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleFocus = () => {
        inputRef.current.focus()
        
    } 





    return (
        <div>
            <button onClick={handleClick}> + 3 Click</button>
            <button onClick={handleBenar}>3 benar</button>
            <p>{count}</p>

            <input type="text" value={input} ref={inputRef} onChange={handleInputChange}/>
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}