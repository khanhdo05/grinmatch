import React, { useContext, useState } from 'react'
import {
    sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../configuration'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const SignIn = () => {
    const navigate = useNavigate()
    const { signIn, loading, user } = useContext(AuthContext);
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    // If authentication is still loading, display a loading indicator
    if (loading) {
        return (
            <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
        );
    }

    // If the user is already authenticated, redirect to the profile page
    if (user) {
        navigate("/profile");
    }

    const handleResetPassword = async (e) => {
        try {
            const email = e.target.email.value;
            await sendPasswordResetEmail(auth, email)
            setMessage('Password reset email sent! Check your inbox.')
            setError('')
        } catch (err) {
            setError('Error sending password reset email. Please try again.')
            setMessage('')
        }
    }

    const onSignIn = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                navigate('/profile')
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                setError(errorMessage)
            })
    }

    return (
        <>
            <main>
                <section>
                    <div>
                        <p> Sign In </p>

                        <form onSubmit={onSignIn}>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@grinnell.edu"
                                    pattern="[a-zA-Z0-9._%+-]+@grinnell\.edu"
                                    title="Please enter a valid @grinnell.edu email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center">
                            No account yet?{' '}
                            <NavLink to="/signup">Sign up</NavLink>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-white text-center">
                            Forgot Password?{' '}
                            <button onClick={handleResetPassword}>
                                Forgot Password
                            </button>
                            {message && (
                                <p style={{ color: 'green' }}>{message}</p>
                            )}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignIn
