import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Signup = () => {
    const navigate = useNavigate()
    const { createUser, user, loading } = useContext(AuthContext)
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [error, setError] = useState('')

    // If authentication is still loading, display a loading indicator
    if (loading) {
        return (
            <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
        )
    }

    // If the user is already authenticated, redirect to the home page
    if (user) {
        navigate('/profile')
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        await createUser(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
                navigate('/signin')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                setError(errorMessage)
                // ..
            })
        e.target.reset()
    }

    return (
        <main>
            <section>
                <div>
                    <div>
                        <h1> Sign Up </h1>
                        <form onSubmit={onSubmit}>
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
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <div>
                                <label htmlFor="retypePassword">
                                    Retype your password
                                </label>
                                <input
                                    id="retype-password"
                                    name="password"
                                    type="password"
                                    value={retypePassword}
                                    onChange={(e) =>
                                        setRetypePassword(e.target.value)
                                    }
                                    required
                                    placeholder="Retype Password"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={password !== retypePassword}
                            >
                                Sign up
                            </button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/signin">Sign in</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup
