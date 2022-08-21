import React, {useContext} from 'react'
import { AuthContext } from '../../BE/context/UserContext'

const Dashboard = () => {
    const {isLoggingIn, setLoggingIn } = useContext(AuthContext)
    console.log(isLoggingIn)
    return (
    <div>
        <p> Dashboard </p>
    </div>)
}

export default Dashboard