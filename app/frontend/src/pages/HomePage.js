import React from 'react';
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div id="home-div" className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="featured-img mb-3">
                        <img src="GrantTracker.png" className="img-fluid" alt="logo of hands holding heart with dollar sign"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="row align-items-center">
                        <div class="header-text mb-4">
                            <h2>Welcome to Grant Tracker!</h2>
                            <p>Please login or sign up below.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;