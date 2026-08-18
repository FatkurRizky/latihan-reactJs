import { createContext, useContext, useState } from "react";

const UserContext = createContext()


export default function UserContextProvider({ children }) {
    const [users, setUsers] = useState(null);



    const handleLogin = (namaUsers, roleUsers, addressUsers) => {
        setUsers({name: namaUsers, role:roleUsers, address: addressUsers})
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