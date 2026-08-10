import React, { useState } from "react";


export default function MiniQuest(){


    const students = [
        {id: 1, nilai: 60, nama: "Kris"},
        {id: 2, nilai: 88, nama: "Budi"},
        {id: 3, nilai: 90, nama: "Fatkur"},

    ]

    const lulus = students.filter(({nilai}) => nilai >=75).map(({nilai}) =>{
        return {item: nilai, status: "lulus"}
    })

    const [nama, setNama] = useState("");
    const cek = (e) =>{
        setNama(e.target.value)
    }


    

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null)
    const [editInput, setEditInput] = useState("");

    const handleUsers = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodos([...todos, {id: Date.now(), task : input}])

    }


    const TaskEDit = (id, task) =>{

        setEditId(id);
        setEditInput(task)
    }



    const DeleteTask = (taskId) =>{
        
        const updateTodos = todos.filter((item) => item.id !== taskId)
        setTodos(updateTodos)
        
    }








    return(
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={Update} placeholder="Masukkan Task"/>

                <ul>
                    {todos.map((item) => (
                    <div key={item.id}>
                        <li>{item.task}</li>
                        <button onClick={()=> DeleteTask(item.id)}>Hapus</button>
                        <button onUpdate={() => TaskEdit(item.id)}>Edit</button>

                    </div>
                    ))}
                </ul>
            </form>
        </div>
    )

}