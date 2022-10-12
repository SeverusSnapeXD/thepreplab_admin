import { useEffect } from "react";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { clearData, getData, StoreData } from "../helper/LocalStorage";

export const UserContext = createContext();

const ContextProvider = ({children}) => {

    const [isLogged , setIsLogged] = useState(false);
    const [admin , setAdmin] = useState(null)
    const [name , setName] = useState('admin');

    const checkLoginState = async () => {
        const admin = await getData('admin');
        if(admin) {
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }
    }

    const login = async () => {
        try {
            console.log('ran here');
            const user = {
                name: 'Admin',
                email: 'admin@gmail.com',
                token: 'a54d6asdasd'
            }
            setIsLogged(true);
            StoreData('admin' ,user);
            console.log('ran here');
        } catch (error) {   
            console.log('Errror login ',error);
        }
    }

    useEffect(()=>{
        checkLoginState();
    },[isLogged])

    const logout = async () => {
        try {
            clearData();
            setIsLogged(false);
        } catch (error) {
            console.log('Logout error ',error);
        }
    }

    return(
        <UserContext.Provider value={{isLogged , setIsLogged , name , setName, login , logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider;