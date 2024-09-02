import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
const Profile = () => {
    const navigate = useNavigate()
    const { logOut, loading } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate('/')
                console.log('Signed out successfully')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return loading ? (
        <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    ) : (
        <>
            <nav>
                <p>Profile</p>

                <div>
                    <button onClick={handleSignOut}>Logout</button>
                </div>
            </nav>
        </>
    )
}

export default Profile
