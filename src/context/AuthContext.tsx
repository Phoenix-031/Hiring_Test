import { child } from "firebase/database";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);


export const AuthContextProvider = ({children} : {children : React.ReactNode}) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}