import React, { useState } from "react";


export default function MiniQuest(){
    
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


    const TaskEdit = (id, task) =>{

        setEditId(id);
        setEditInput(task)
    }


    const handleEditChange = (e) =>{
        setEditInput(e.target.value)
    }

    const handleSave = (editId) =>{

        const save = todos.map((item) => item.id === editId ?  {...item, task : editInput} :  item)
        setTodos(save)

    }





    const DeleteTask = (taskId) =>{
        
        const updateTodos = todos.filter((item) => item.id !== taskId)
        setTodos(updateTodos)
        
    }








    return(
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleUsers} placeholder="Masukkan Task"/>

                <ul>
                    {todos.map((item) => (
                    <div key={item.id}>
                        <li>{item.task}</li>
                        <button onClick={()=> DeleteTask(item.id)}>Hapus</button>
                        <button onClick={() => TaskEdit(item.id, item.task)}>Edit</button>
                        <div>
                        {item.id === editId ? <div>
                            <input type="text" value={editInput} onChange={handleEditChange}/>
                            <button onClick={() => handleSave(item.id, item.task)}>Selesai</button>
                        </div> : null}
                        
                        </div>
                        
                    </div>
                    ))}
                </ul>
            </form>
        </div>
    )

}