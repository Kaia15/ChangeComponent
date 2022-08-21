import React, { useContext, useState, useEffect, createContext } from "react"

const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [isLoggingIn, setIsLoggingIn]  = useState(false)
    const [isLoggedOut, setIsLoggedOut] = useState(null)
    return (
    <AuthContext.Provider value = {{isLoggingIn, setIsLoggingIn}}>
        {children}
    </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }