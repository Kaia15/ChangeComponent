import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../BE/context/UserContext'
import { loginWithEmail, loginWithGoogle } from '../../../BE/firebase/login'
import { GoogleAuthProvider } from 'firebase/auth'
import RenderLogin from './render'
import Dashboard from '../../pages/dashboard'

/*const handleLoginEmail = async(email,password) => {
    try {
        const res = await loginWithEmail(email,password)
        // if (res) setIsLoggingIn(true)
        
    } catch(error) {
        console.log(error)
    }
}
const handleLoginWithApp = async(app) => {
    switch(app) {
        case "Google":
            try {
                const res = await loginWithGoogle()
                const cred = await GoogleAuthProvider.credentialFromResult(res);
                // if (cred) setIsLoggingIn(true)
            } catch(error) {
                console.log(error)
            }
    }
}*/

const Login = () => {
    const { isLoggingIn, setIsLoggingIn } = useContext(AuthContext)
    /*let email = "chris_h1@denison.edu"
    let password = "Bt197515"
    if (handleLoginEmail(email,password)) setIsLoggingIn(true)
    */
    /*const handleLoginEmail = async(email,password) => {
        try {
            const res = await loginWithEmail(email,password)
            if (res) setIsLoggingIn(true)
            
        } catch(error) {
            console.log(error)
        }
    }
    const handleLoginWithApp = async(app) => {
        switch(app) {
            case "Google":
                try {
                    const res = await loginWithGoogle()
                    const cred = await GoogleAuthProvider.credentialFromResult(res);
                    if (cred) setIsLoggingIn(true)
                } catch(error) {
                    console.log(error)
                }
        }
    }*/
    const handleLoginEmail = async(email,password) => {
        try {
            const res = await loginWithEmail(email,password)
            // if (res) setIsLoggingIn(true)
            
        } catch(error) {
            console.log(error)
        }
    }
    const handleLoginWithApp = async(app) => {
        switch(app) {
            case "Google":
                try {
                    const res = await loginWithGoogle()
                    const cred = await GoogleAuthProvider.credentialFromResult(res);
                    // if (cred) setIsLoggingIn(true)
                } catch(error) {
                    console.log(error)
                }
        }
    }
    const onSubmit = async (values, actions) => {
        await handleLoginEmail(values.email, values.password)
        await setIsLoggingIn(true)
        // alert("Login successfully!")
        await actions.resetForm()
    }

    console.log(isLoggingIn)

    return (
    <div>
        {isLoggingIn ? < Dashboard/> : 
        <RenderLogin 
        handleLoginEmail={handleLoginEmail}
        handleLoginWithApp={handleLoginWithApp}
        onSubmit = {onSubmit}
        isLoggingIn = {isLoggingIn}
        setIsLoggingIn = {setIsLoggingIn}
        />
        }
    </div>
    )
}

export default Login