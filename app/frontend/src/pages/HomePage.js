import React from 'react';
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div id="home-div" className="border border-3">
            <img src="GrantTracker.png" />
            <div className="btn-group-vertical" role="group">
                <Link to="/login">
                    <button className="btn btn-success btn-lg mx-5 mt-2 mb-5">Log in</button>
                </Link>
                <Link to="/signup">
                    <button className="btn btn-success btn-lg mx-5 mt-2">Sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;