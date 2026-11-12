import { createContext, useContext,useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[isLoggedIn,setisLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value = {{isLoggedIn,setisLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=>useContext(AuthContext)
export {useAuth,AuthProvider}