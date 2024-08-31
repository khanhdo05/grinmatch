import React, { useState } from 'react'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../configuration'
import { NavLink, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            setMessage('Password reset email sent! Check your inbox.')
            setError('')
        } catch (err) {
            setError('Error sending password reset email. Please try again.')
            setMessage('')
        }
    }

    const onSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
