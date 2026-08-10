import React, { useState } from "react";

export default function TodosPage() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handelUser = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: Date.now(), task: input }]);
    };

    const deleteTask = (idTask) => {
        const updateTodos = todos.filter((todo) => todo.id !== idTask);

        setTodos(updateTodos);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handelUser} />
            <button>Submit</button>

            <ul>
                {todos.map((item) => (
                    <div key={item.id}>
                        <li>{item.task}</li>
                        <button onClick={() => deleteTask(item.id)}>Hapus</button>
                    </div>
                ))}

            </ul>
        </form>
    );
}
