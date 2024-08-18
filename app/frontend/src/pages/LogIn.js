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
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <label>Email:</label>
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
            />

            <button disabled={isLoading}>Login</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Login