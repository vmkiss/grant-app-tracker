import { useState } from 'react';
import { useLogIn } from '../hooks/useLogIn';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogIn();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form id="form-div" className="border py-3 px-5" onSubmit={handleSubmit}>
            <div className="mb-3 row px-5">
                <label>Email:</label>
                <input
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3 row px-5">
            <label>Password:</label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
            />
            </div>

            <div className="d-flex justify-content-center">
            <button className="btn btn-success btn-lg" disabled={isLoading}>Login</button>
            {error && <div>{error}</div>}
            </div>
        </form>
    )
}

export default Login