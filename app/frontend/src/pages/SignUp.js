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
        <form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
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

            <button disabled={isLoading}>Sign up</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Signup