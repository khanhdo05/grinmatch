import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <div>
                <text>Don't have an account yet?</text>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn
