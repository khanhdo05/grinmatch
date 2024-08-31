import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../configuration'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate('/')
                console.log('Signed out successfully')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
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
