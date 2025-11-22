import React from 'react';
import { Search, Heart, MessageCircle, Share2, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Blog = () => {
    return (
        <>
            {/* Header */}
            <Navbar />

            {/* Main Blog Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Title */}
                    <div className=" mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">JetSim Blog</h1>
                        <p className="text-xl text-gray-600">Your source for travel tips and eSIM guides.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Main Featured Post */}
                        <div className="lg:col-span-2">
                            {/* Hero Post */}
                            <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                                    alt="Laptop with code"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="p-8">
                                    <span className="text-green-600 font-medium text-sm">eSIM Guides</span>
                                    <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
                                        How to Set Up Your eSIM in 5 Easy Steps
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        Getting your JetSim eSIM up and running is a breeze. This guide will walk you through the simple process, from purchase to activation, so you can stay connected wherever you go.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <a href="#" className="text-green-600 font-semibold hover:underline flex items-center gap-2">
                                            Read More →
                                        </a>
                                        <div className="flex gap-6 text-gray-500">
                                            <button className="hover:text-red-500 transition"><Heart size={22} /></button>
                                            <button className="hover:text-blue-500 transition"><MessageCircle size={22} /></button>
                                            <button className="hover:text-green-600 transition"><Share2 size={22} /></button>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Second Post */}
                            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1544214036-5aaeb9e32d11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="City skyline"
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-8">
                                    <span className="text-green-600 font-medium text-sm">Travel Tips</span>
                                    <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
                                        Top 5 Destinations for Digital Nomads
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        Dreaming of working from anywhere? Discover the top destinations that offer the perfect blend of culture, connectivity, and cost of living for digital nomads.
                                    </p>
                                    <p className="text-sm text-gray-500 mb-6">By Jane Smith • May 15, 2024</p>
                                    <a href="#" className="text-green-600 font-semibold hover:underline flex items-center gap-2">
                                        Read More →
                                    </a>
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Search */}
                            <div className="bg-white rounded-xl shadow-sm p-4">
                                <div className="relative">
                                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                    />
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-6">Recent Posts</h3>
                                <div className="space-y-5">
                                    {[
                                        { title: "Top 5 Destinations for Digital Nomads", category: "Read" },
                                        { title: "Staying Connected in Southeast Asia", category: "Read" },
                                        { title: "eSIM vs. Physical SIM: What's the Difference?", category: "Read" },
                                    ].map((post, i) => (
                                        <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                                            <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0"></div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 text-sm hover:text-green-600 transition cursor-pointer">
                                                    {post.title}
                                                </h4>
                                                <span className="text-xs text-green-600">{post.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-gray-900 mb-6">Categories</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li><a href="#" className="hover:text-green-600 transition">Travel Tips</a></li>
                                    <li><a href="#" className="hover:text-green-600 transition">eSIM Guides</a></li>
                                    <li><a href="#" className="hover:text-green-600 transition">Country Spotlights</a></li>
                                    <li><a href="#" className="hover:text-green-600 transition">Product Updates</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">SOLUTIONS</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-green-600 transition">For Travelers</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">For Businesses</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Affiliates</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">SUPPORT</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-green-600 transition">Help Center</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Contact Us</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">COMPANY</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Blog</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">LEGAL</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t text-center">
                        <p className="text-gray-500 text-sm mb-4">© 2024 JetSim. All rights reserved.</p>
                        <div className="flex justify-center gap-6">
                            <a href="#" className="text-gray-500 hover:text-green-600 transition"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-green-600 transition"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-green-600 transition"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Blog;