import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Grinnell College's Mentorship Matching App</h1>
            <nav>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </nav>
        </div>
    )
}

export default HomePage
