import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLogIn } from '../hooks/useLogIn';

export const HomePage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogIn();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div id="home-div" className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area align-items-center">
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="featured-img mb-3">
                        <img src="GrantTracker.png" className="img-fluid" alt="logo of hands holding heart with dollar sign"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="row justify-content-center">
                        <div class="header-text mb-4">
                            <h2>Welcome to Grant Tracker!</h2>
                            <p className="text-center"> Please login or sign up below.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row px-5">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 row px-5">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                                <button className="btn btn-success btn-lg mb-3" disabled={isLoading}>Login</button>
                                {error && <div>{error}</div>}
                            </div>
                            <div>
                                <p className="text-center">Don't have an account?&nbsp;
                                <Link to="/signup">Sign up.</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;