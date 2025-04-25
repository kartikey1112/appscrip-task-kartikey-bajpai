'use client'
import { useState } from 'react';
import { login } from '../services/auth';

export default function Login({ onClose, onSuccess }) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials.username, credentials.password);
            onSuccess?.();
            window.location.reload();
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <button 
                        onClick={onClose} 
                        className="close-button"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            value={credentials.username}
                            onChange={(e) => setCredentials({
                                ...credentials,
                                username: e.target.value
                            })}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({
                                ...credentials,
                                password: e.target.value
                            })}
                            className="form-input"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Login
                    </button>
                </form>

                <div className="demo-credentials">
                    <p>Demo credentials:</p>
                    <p>Username: johnd</p>
                    <p>Password: m38rmF$</p>
                </div>
            </div>
        </div>
    );
}