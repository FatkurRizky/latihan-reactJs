import { createContext, useContext, useState } from "react";

const UserContext = createContext()


export default function UserContextProvider({ children }) {
    const [users, setUsers] = useState(null);



    const handleLogin = () => {
        setUsers({ name: 'Faris', role: 'Warga' })
    }

    const handleLogout = () => {
        setUsers(null);
    }


    return (
        <UserContext.Provider value={ {users, setUsers, handleLogin, handleLogout}}>
            {children}
        </UserContext.Provider>
    )

}

export function useUserContext() {
    const context = useContext(UserContext)

    if(!context){
        throw new Error('userContext harus digunakan di dalam userContextProvider')
    }

    return context

}