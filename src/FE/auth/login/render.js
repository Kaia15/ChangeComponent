import React, { useContext, useState, useEffect } from 'react'
import { Form, useFormik } from 'formik'
import { AuthContext } from '../../../BE/context/UserContext'
import { loginSchema } from '../../../BE/schemas/schema'


const RenderLogin = ({handleLoginWithApp, onSubmit, isLoggingIn, setIsLoggingIn}) => {
    // const { isLoggingIn, setIsLoggingIn } = useContext(AuthContext)
    const {values, errors, handleBlur, handleSubmit, handleChange, onChange, onBlur, isSubmitting } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit,
    })

    // console.log(values)
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor = "email"> Email </label>
            <br />
            <input
            value = {values.email}
            type = "email"
            id = "email"
            onChange = {handleChange}
            />
            {errors.email && (<p> {errors.email} </p>)}
            <br />
            <label htmlFor = "password"> Password </label>
            <br />
            <input
            value = {values.password}
            type = "password"
            id = "password"
            onChange = {handleChange}
            
            />
            {errors.password && (<p> {errors.password} </p>)}
            <br />
            <button
            type = "submit"
            >
                Login
            </button>
            </form>
            <button
            onClick = {async () => {
                await handleLoginWithApp("Google")
                await setIsLoggingIn(true)
            }}> Login with Gg </button>
        </div>
    )
}

export default RenderLogin