import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', formData);
        // API call
    };

    return (

        <>
            {/* Full Screen Centered Card */}
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-8 pt-10 pb-8">
                        {/* Logo & Title */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-green-600 mb-2">JETSIM</h1>
                            {/* <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2> */}
                            <p className="text-gray-600 mt-2">Welcome back! Please enter your details.</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-4 py-4 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                    />
                                    <Mail className="absolute right-4 top-4 text-gray-400" size={20} />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full px-4 py-4 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                    />
                                    <Lock className="absolute right-4 top-4 text-gray-400" size={20} />
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>

                                    <input type="checkbox" id='check' />
                                    <label htmlFor="check">Remember me</label>
                                </div>

                                <a href="" className='text-green-400'>Forgot Password?</a>
                            </div>

                            {/* Submit Button */}
                            <Link
                                to={"/dashboard"}
                                className="w-full block text-center bg-linear-to-r from-green-500 to-green-400 text-white font-bold py-4 rounded-xl transform hover:scale-102 transition duration-200 shadow-lg mt-8 cursor-pointer"
                            >
                                Login
                            </Link>
                            {/* <button
                                type="submit"
                                className="w-full bg-linear-to-r from-green-500 to-green-400 text-white font-bold py-4 rounded-xl transform hover:scale-102 transition duration-200 shadow-lg mt-8 cursor-pointer"
                            >
                                Login
                            </button> */}
                        </form>

                        {/* Login Link */}
                        <div className="text-center mt-8">
                            <p className="text-gray-600">
                                Don't have an account?{' '}

                                <Link to={"/signup"} className="text-green-600 font-semibold hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login