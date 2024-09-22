import React from 'react';
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div id="home-div" className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row">
                <div className="col-md-6">
                    <div className="featured-img">
                        <img src="GrantTracker.png" className="img-fluid" alt="logo of hands holding heart with dollar sign"/>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    )
}

export default HomePage;