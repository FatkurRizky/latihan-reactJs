import React, { useRef, useState } from "react";

export default function AsyncPage() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [post, setPost] = useState(null);
    const [id, setId] = useState("");
    const abortRef = useRef(null);

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
        if (abortRef.current) {
            abortRef.current.abort()
        }

        abortRef.current = new AbortController()
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal: abortRef.current.signal });
            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }
            const result = await response.json();
            setPost(result);
        } catch (err) {
            if (err.name === "AbortError") return
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };


    const handleDelete =  (id) => {
        const targetProducts = Products.find(p => p.id === id)
        const name = targetProducts ? targetProducts.name : 'barang ini'

        showAlert(
            'Hapus Barang?',
            `Apakah Anda yakin ingin menghapus "${name}"`,
            'confirm',
            async () => {
                try{
                    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
                    fetchProducts();
                    showAlert('Barang dihapus', `"${name}" berhasil dihapus`)
                } catch{
                    showAlert('Gagal Hapus', 'Terjadi kesalahan', 'error')
                }
            },

            'Ya Hapus Barang'
        )


    }
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
