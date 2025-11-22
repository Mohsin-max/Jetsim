import React, { useState } from 'react';
import { Globe, CheckCircle, Headphones, MapPin, QrCode, Wifi, Menu, X, Twitter, Linkedin, Mail } from 'lucide-react';
import Hero from './Hero';
import Destinations from './Destinations';
import HowItWorks from './HowItWorks';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom'
'use client';


const Landing = () => {

    const [email, setEmail] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (

        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <div className="flex items-center justify-between w-full lg:w-auto">
                        <h1 className="text-2xl font-bold text-green-600">JETSIM</h1>

                        {/* Hamburger Button - Mobile Only */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-gray-700"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10 text-gray-700 text-sm font-medium">
                        <a href="#" className="hover:text-green-600 transition">Destinations</a>
                        <a href="#" className="hover:text-green-600 transition">How It Works</a>
                        <a href="#" className="hover:text-green-600 transition">Why Choose Us</a>
                        <a href="#" className="hover:text-green-600 transition">Support</a>
                    </div>

                    <Link to={"/signup"}
                        className="hidden lg:block bg-[#00d18b] text-white px-7 py-3 rounded-xl text-sm font-semibold transition shadow-md cursor-pointer hover:scale-102"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <div className="px-6 py-4 space-y-4 text-center">
                            <a href="#" className="block text-gray-700 hover:text-green-600 text-lg">Destinations</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 text-lg">How It Works</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 text-lg">Why Choose Us</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 text-lg">Support</a>
                            <Link to={"/signup"} className="w-full block text-center mt-4 bg-[#00d18b] text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section - Fully Responsive + Fixed Gradient */}
            <Hero />

            {/* Popular Destinations - Responsive Grid */}
            <Destinations />

            {/* How It Works */}
            <HowItWorks />

            {/* Why Choose Us */}
            <WhyUs />

            {/* Testimonials */}
            <Testimonials />

            {/* Footer - Fully Responsive */}
            <footer className="bg-[#f6f7f8] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Left Section - Description */}
                        <div className="space-y-6">
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                                Your passport to seamless global connectivity. Get affordable, instant data in over 190 countries and travel without limits.
                            </p>

                            {/* Social Icons */}
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5 text-gray-700" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="Website"
                                >
                                    <Globe className="w-5 h-5 text-gray-700" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5 text-gray-700" />
                                </a>
                            </div>
                        </div>

                        {/* Center Section - Quick Links */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                        Destinations
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Right Section - Newsletter */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Get travel tips and exclusive offers.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 text-sm placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 sm:w-auto w-full"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Go</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                            © 2024 JetSim. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Landing