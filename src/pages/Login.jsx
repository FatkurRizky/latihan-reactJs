import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {

            const response = await axios.post('http://localhost:8000/api/login', { email, password })
            const result = await response

            localStorage.setItem('admin_token', response.data.token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
            navigate('/admin')
        } catch (err) {
            setError(err.message)
        } finally {

            setIsLoading(false);
        }

    };

}