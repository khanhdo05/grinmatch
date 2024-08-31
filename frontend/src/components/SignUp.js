import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <text>Already have an account?</text>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    )
}

export default SignUp
