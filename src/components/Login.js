import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // Here, implement your authentication logic or API call
        console.log("Login Attempt with:", username, password);
        // On successful login
        navigate('/');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;
