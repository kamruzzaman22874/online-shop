import { useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../../public/loginPages.png"
import { useState } from 'react';
const LoginPage = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        })
            .then(res => {
                console.log(res)
                if (res.ok) {
                    return res.json();
                } else {
                    setError('Failed to login');
                }
            })
            .then(data => {
                console.log(data)
                if (data?.token) {
                    console.log(data.token);
                    localStorage.setItem("token", data.token);
                    navigate(from, { replace: true });
                } else {
                    setError('Login failed: Invalid User');
                }
            })
            .catch(error => {
                console.error('Login error:', error);
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 ">
                    <img className="bg-none" src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 shadow-lg md:w-1/2">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Usser Name</span>
                            </label>
                            <input name="username" placeholder="username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <p className='text-red-700 text-lg'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn uppercase">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;