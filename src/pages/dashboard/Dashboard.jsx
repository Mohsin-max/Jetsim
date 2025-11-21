import React, { useState } from 'react';
import { Grid3X3, Package, History, User, Headphones, LogOut, ShoppingCart } from 'lucide-react';
import OrderHistory from './OrderHistory';
import MyEsim from './MyEsim';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Profile from './Profile';

const Dashboard = () => {

    const location = useLocation();
    const current = location.pathname;


    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-80 bg-white shadow-lg z-10 hidden lg:block overflow-y-auto">
                <div className="p-8">
                    <h1 className="text-2xl font-bold text-green-600">JETSIM</h1>
                </div>

                <div className="p-5">
                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-10">
                        <img src="https://img.freepik.com/free-vector/afro-man-profile_24908-81806.jpg?w=740" alt="User" className="w-14 h-14 rounded-full border-2 border-gray-200" />
                        <div>
                            <p className="font-semibold text-gray-900">John Doe</p>
                            <p className="text-sm text-gray-500">johndoe@email.com</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2 mb-8">

                        <Link
                            to="/dashboard"
                            className={`flex w-full text-left items-center gap-4 px-4 py-3 rounded-lg transition 
        ${current === "/dashboard" ? "bg-green-50 text-green-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Grid3X3 size={20} /> Dashboard
                        </Link>

                        <Link
                            to="/dashboard/my-esim"
                            className={`flex w-full text-left items-center gap-4 px-4 py-3 rounded-lg transition 
        ${current === "/dashboard/my-esim" ? "bg-green-50 text-green-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Package size={20} /> My eSIMs
                        </Link>

                        <Link
                            to="/dashboard/order-history"
                            className={`flex w-full text-left items-center gap-4 px-4 py-3 rounded-lg transition 
        ${current === "/dashboard/order-history" ? "bg-green-50 text-green-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <History size={20} /> Order History
                        </Link>

                        <Link
                            to="/dashboard/profile"
                            className={`flex w-full text-left items-center gap-4 px-4 py-3 rounded-lg transition 
        ${current === "/dashboard/profile" ? "bg-green-50 text-green-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <User size={20} /> Profile
                        </Link>

                        <Link
                            to="/dashboard/support"
                            className={`flex w-full text-left items-center gap-4 px-4 py-3 rounded-lg transition 
        ${current === "/dashboard/support" ? "bg-green-50 text-green-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Headphones size={20} /> Support
                        </Link>

                    </nav>


                    <button className="w-full bg-[#10b981] text-white py-3 rounded-xl font-semibold hover:bg-[#0a9f6e] transition flex items-center justify-center gap-3 cursor-pointer">
                        <ShoppingCart size={20} /> Buy new eSIM
                    </button>

                    <button className="mt-4 flex items-center gap-3 py-3 text-gray-600 hover:text-red-600 transition cursor-pointer">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content (Dynamic) */}
            <main className="flex-1 lg:ml-80 min-h-screen">
                <Routes>
                    <Route path="/my-esim" element={<MyEsim />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>

        </div>
    );
};

export default Dashboard;
