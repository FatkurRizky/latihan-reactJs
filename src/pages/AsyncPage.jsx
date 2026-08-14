import React, { useState } from "react";

export default function AsyncPage() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [post, setPost] = useState(null);
    const [id, setId] = useState("");

    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const searchById = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }
            const result = await response.json();
            setPost(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <button onClick={FetchData}>Refresh</button>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={searchById}>Cari</button>
            {post && (
                <div>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
}
