import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/Footer'
import '../pages/Homepage.css'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <section className="section login-section" id="login">
                <div className="container">
                    <div className="login-container">
                        <div className="login-form-wrapper">
                            <h2 className="section-title">Welcome Back!</h2>
                            <p className="section-subtitle">Login to your account to continue</p>
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-options">
                                    <label className="remember-me">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                    <Link to="/forgot-password" className="forgot-password">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Login
