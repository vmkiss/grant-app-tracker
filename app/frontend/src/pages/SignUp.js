import { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={}>
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

            <button>Sign up</button>
        </form>
    )
}