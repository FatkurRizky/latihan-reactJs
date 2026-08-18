import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function LoginSimulation() {
    const [dataWarga, setDataWarga] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputNama, setInputNama] = useState('');
    const [inputRole, setInputRole] = useState('');
    const [error, setError] = useState('');
    const [address, setAddress] = useState('');
    const {users, handleLogin, handleLogout} = useUserContext()


    const handleInputNama = (e) => {
        setInputNama(e.target.value)
    }

    const handleInputRole = (e) =>{
        setInputRole(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const submitLogin = () =>{
        handleLogin(inputNama, inputRole, address)
    }


    const fetchWarga = async () => {
        setIsLoading(true);
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')

            const result = await data.json();
            setDataWarga(result)

        } catch (err){
            setError(`Ada kegagalan dalam mengambil data! ${err.message}`)

        } finally{
            setIsLoading(false)
        }
    }

    if(isLoading)return <p>Loading...</p>
    if(error)return <p>Error</p>


    return(
        <div>
            <button onClick={fetchWarga}>Tarik Data</button>
            {dataWarga.map((users) => (
                <li key={users.id}>{users.name}</li>
            ))}


            <input type="text"  value={inputNama} onChange={(e)=>setInputNama(e.target.value)} placeholder="isi nama"/>

            <input type="text" value={inputRole} onChange={(e) =>setInputRole(e.target.value)} placeholder="warga"/>

            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="alamat"/>

            <button onClick={submitLogin}>Login</button>
            {users === null ? (<p>Silahkan login terlebih dahulu</p>): 
            (<div>
                <p>Halo {users.name}</p>
                <p>{users.role} !(Alamat: {users.address})</p>

                <button onClick={handleLogout}>Logout</button>
            </div>)}
        </div>
    )
}