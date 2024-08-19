import { useState } from 'react';
import { useSignup } from '../hooks/useSignUp';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form id="form-div" className="border py-3 px-5" onSubmit={handleSubmit}>
            <div className="mb-3 row">
                <label>Email:</label>
                <input
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3 row">
                <label>Password:</label>
                <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            
            <div className="d-flex justify-content-center">
                <button className="btn btn-success btn-lg" disabled={isLoading}>Sign up</button>
                {error && <div>{error}</div>}
            </div>
        </form>
    )
}

export default Signup