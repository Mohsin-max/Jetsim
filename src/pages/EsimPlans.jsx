import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const EsimPlans = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [usdOpen, setUsdOpen] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);
    const [dataOpen, setDataOpen] = useState(false);
    const [providerOpen, setProviderOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    // Click outside to close all dropdowns
    const menuRef = useRef(null);
    const usdRef = useRef(null);
    const countryRef = useRef(null);
    const dataRef = useRef(null);
    const providerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) setMobileMenuOpen(false);
            if (usdRef.current && !usdRef.current.contains(event.target)) setUsdOpen(false);
            if (countryRef.current && !countryRef.current.contains(event.target)) setCountryOpen(false);
            if (dataRef.current && !dataRef.current.contains(event.target)) setDataOpen(false);
            if (providerRef.current && !providerRef.current.contains(event.target)) setProviderOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const plans = [
        { country: "United States", data: "5GB", validity: "30 Days", price: "$15.99", img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&q=80" },
        { country: "Europe", data: "10GB", validity: "30 Days", price: "$29.99", img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&q=80" },
        { country: "Asia", data: "3GB", validity: "15 Days", price: "$12.50", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
        { country: "Global", data: "20GB", validity: "60 Days", price: "$59.99", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80" },
        { country: "United Kingdom", data: "5GB", validity: "30 Days", price: "$14.99", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80" },
        { country: "Japan", data: "10GB", validity: "30 Days", price: "$25.00", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
    ];

    return (
        <>
            {/* Navbar with Hamburger */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
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
                    <div className="hidden lg:flex items-center font-semibold gap-8 text-gray-700 text-sm">
                        <a href="#" className="hover:text-green-600 transition">Home</a>
                        <a href="#" className="hover:text-green-600 transition">About</a>
                        <a href="#" className="hover:text-green-600 transition">Contact</a>
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        {/* USD Dropdown */}
                        <div ref={usdRef} className="relative">
                            <button
                                onClick={() => setUsdOpen(!usdOpen)}
                                className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-green-600 transition"
                            >
                                {selectedCurrency} <ChevronDown size={16} className={`transition ${usdOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {usdOpen && (
                                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
                                    {['USD', 'EUR', 'GBP', 'JPY'].map(curr => (
                                        <button
                                            key={curr}
                                            onClick={() => { setSelectedCurrency(curr); setUsdOpen(false); }}
                                            className="block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition"
                                        >
                                            {curr}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to={"/payment"} className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700 transition">
                            Buy Now
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div ref={menuRef} className="lg:hidden bg-white border-t border-gray-200">
                        <div className="px-6 py-6 space-y-6">
                            <a href="#" className="block text-lg text-gray-700 hover:text-green-600 transition">Home</a>
                            <a href="#" className="block text-lg text-gray-700 hover:text-green-600 transition">About</a>
                            <a href="#" className="block text-lg text-gray-700 hover:text-green-600 transition">Contact</a>

                            <div className="pt-4 border-t">
                                <Link className="w-full block text-center bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition mb-3">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">eSIM Plans</h2>
                    <p className="text-gray-600 mb-10">Find the perfect plan for your travel needs.</p>

                    {/* Search + Filters */}
                    <div className="flex flex-col md:flex-row gap-3 max-w-7xl mx-auto">
                        <div className="relative flex-1 max-w-lg">
                            <Search className="absolute left-5 top-3.5 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for a country, region, or data plan"
                                className="w-full pl-14 pr-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>

                        <div ref={countryRef} className="relative">
                            <button
                                onClick={() => setCountryOpen(!countryOpen)}
                                className="px-8 py-3.5 bg-white border-2 border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition whitespace-nowrap"
                            >
                                Country <ChevronDown size={18} className={`transition ${countryOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {countryOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border z-50">
                                    {['All Countries', 'Europe', 'Asia', 'USA'].map(item => (
                                        <button key={item} onClick={() => setCountryOpen(false)} className="block w-full text-left px-5 py-3 hover:bg-gray-50 transition">
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div ref={dataRef} className="relative">
                            <button
                                onClick={() => setDataOpen(!dataOpen)}
                                className="px-8 py-3.5 bg-white border-2 border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition whitespace-nowrap"
                            >
                                Data Size <ChevronDown size={18} className={`transition ${dataOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {dataOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border z-50">
                                    {['All Sizes', '1-5GB', '5-10GB', '10GB+'].map(item => (
                                        <button key={item} onClick={() => setDataOpen(false)} className="block w-full text-left px-5 py-3 hover:bg-gray-50 transition">
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div ref={providerRef} className="relative">
                            <button
                                onClick={() => setProviderOpen(!providerOpen)}
                                className="px-8 py-3.5 bg-white border-2 border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition whitespace-nowrap"
                            >
                                Provider <ChevronDown size={18} className={`transition ${providerOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {providerOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border z-50">
                                    {['All Providers', 'Provider A', 'Provider B'].map(item => (
                                        <button key={item} onClick={() => setProviderOpen(false)} className="block w-full text-left px-5 py-3 hover:bg-gray-50 transition">
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Grid - Ab bilkul original image jaisa */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plans.map((plan, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl p-4 transition-shadow duration-300">
                                <div className="h-48 relative">
                                    <img
                                        src={plan.img}
                                        alt={plan.country}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {plan.country} - {plan.data} / {plan.validity}
                                    </h3>
                                    <p className="font-semibold text-gray-600 mb-6">{plan.price}</p>
                                        <Link to={"/payment"} className="w-full block text-center bg-green-600 text-white py-3 rounded-xl cursor-pointer font-medium hover:bg-green-700 transition">
                                            Buy Now
                                        </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer with Social Icons */}
            <footer className="bg-white border-t border-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Careers</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-green-600 transition">Contact Support</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">FAQs</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Help Center</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
                            <div className="flex gap-6 mt-4">
                                <a href="#" className="text-gray-600 hover:text-green-600 transition">
                                    <Twitter size={22} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-green-600 transition">
                                    <Facebook size={22} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-green-600 transition">
                                    <Instagram size={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-300">
                        © 2024 JetSim. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default EsimPlans;