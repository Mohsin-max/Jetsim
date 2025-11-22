import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <>
            <Navbar />
            {/* Main Section */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-6">


                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
                        <p className="text-gray-600 text-lg">
                            We're here to help. Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="e.g., john.doe@email.com"
                                            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition appearance-none bg-white cursor-pointer">
                                        <option>Select a subject</option>
                                        <option>General Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Billing Issue</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Write your message here..."
                                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button className="w-full bg-green-600 text-white py-4 rounded-xl cursor-pointer font-semibold hover:bg-green-700 transition shadow-lg text-lg">
                                        Submit Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Side - Support Options */}
                        <div className="space-y-6">
                            {/* Live Chat */}
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
                                        <p className="text-sm text-gray-600">Coming Soon! Instant help is on its way.</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 1.261-2.219 2.228-2.919C11.423 5.381 12.737 5 14 5c1.263 0 2.577.381 3.548 1.081C18.519 6.781 19 7.835 19 9c0 1.165-.481 2.219-1.228 3-.547.58-1.259 1.034-2.228 1.334M8.228 9C7.679 9.581 7 10.635 7 12s.679 2.419 1.228 3c.969.3 1.681.754 2.228 1.334M8.228 9C8.777 8.419 9.489 8 10.228 8c.739 0 1.451.419 2 1.081" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">FAQ</h3>
                                        <p className="text-sm text-gray-600 mb-3">Find quick answers to common questions.</p>
                                        <a href="#" className="text-green-600 font-medium hover:underline flex items-center gap-1">
                                            Visit our Help Center →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                        <a href="mailto:support@jetsim.com" className="text-green-600 font-medium hover:underline">
                                            support@jetsim.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                        <div>
                            <h1 className="text-2xl font-bold text-green-600 mb-2">JETSIM</h1>
                            <p className="text-gray-600">Stay connected, wherever you go.</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">eSIMs</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-green-600 transition">FAQ</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="text-gray-500 text-sm">© 2024 JetSim. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;