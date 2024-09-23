import { useState } from 'react';
import { useSignup } from '../hooks/useSignUp';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
        setSuccessMsg('Account creation successful!')
    }

    return (
        <div id="home-div" className="container d-flex justify-content-center align-items-center min-vh-100">
            <div id="login-signup-div" className="row border rounded-5 p-3 shadow box-area align-items-center">
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="featured-img mb-3">
                        <img src="GrantTracker.png" className="img-fluid" alt="logo of hands holding heart with dollar sign"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="row justify-content-center">
                        <div class="header-text mb-4">
                            <h2>Sign up for Grant Tracker!</h2>
                            <p className="text-center"> Please enter your desired username and password below.</p>
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
                                <button className="btn btn-success btn-lg mb-3" disabled={isLoading}>Sign up</button>
                                {error && <div>{error}</div>}
                                {!error && (
                                <div>
                                    {successMsg}&nbsp;
                                    <Link to="/">Log in.</Link>
                                </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup