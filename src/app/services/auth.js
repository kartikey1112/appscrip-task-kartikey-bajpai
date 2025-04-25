'use client'

export const login = async (username, password) => {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (!response.ok) throw new Error('Login failed');

        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data.token;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
        return !!localStorage.getItem('token');
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('token');
};