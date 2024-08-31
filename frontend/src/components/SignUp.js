import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configuration'

const Signup = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
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
                // ..
            })
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
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="you@grinnell.edu"
                                    pattern="^[a-zA-Z0-9._%+-]+@grinnell\.edu$"
                                    title="Please enter a valid @grinnell.edu email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button type="submit">Sign up</button>
                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login">Sign in</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup
