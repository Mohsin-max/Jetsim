import React, { useState } from 'react';
import { Grid3X3, Package, History, User, Headphones, LogOut, ShoppingCart, Menu } from 'lucide-react';
import OrderHistory from './OrderHistory';
import MyEsim from './MyEsim';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Profile from './Profile';

const Dashboard = () => {

    const location = useLocation();
    const current = location.pathname;

    const [open, setOpen] = useState(false); // mobile sidebar toggle

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* ========================= MOBILE TOP BAR ========================= */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-20">
                <h1 className="text-xl font-bold text-green-600">JETSIM</h1>
                <button onClick={() => setOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* ========================= MOBILE OVERLAY ========================= */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* ========================= SIDEBAR ========================= */}
            <aside
                className={`
                    fixed inset-y-0 left-0 w-80 bg-white shadow-lg z-30 overflow-y-auto
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0 lg:block
                `}
            >
                <div className="p-8 flex justify-between items-center lg:block">
                    <h1 className="text-2xl font-bold text-green-600">JETSIM</h1>

                    {/* Close Button Mobile */}
                    <button className="lg:hidden" onClick={() => setOpen(false)}>
                        ✕
                    </button>
                </div>

                <div className="p-5">

                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-10">
                        <img
                            src="https://img.freepik.com/free-vector/afro-man-profile_24908-81806.jpg?w=740"
                            alt="User"
                            className="w-14 h-14 rounded-full border-2 border-gray-200"
                        />
                        <div>
                            <p className="font-semibold text-gray-900">John Doe</p>
                            <p className="text-sm text-gray-500">johndoe@email.com</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2 mb-8">

                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard"
                            className={`flex w-full items-center gap-4 px-4 py-3 rounded-lg transition 
            ${current === "/dashboard"
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Grid3X3 size={20} /> Dashboard
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard/my-esim"
                            className={`flex w-full items-center gap-4 px-4 py-3 rounded-lg transition 
            ${current === "/dashboard/my-esim"
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Package size={20} /> My eSIMs
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard/order-history"
                            className={`flex w-full items-center gap-4 px-4 py-3 rounded-lg transition 
            ${current === "/dashboard/order-history"
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <History size={20} /> Order History
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard/profile"
                            className={`flex w-full items-center gap-4 px-4 py-3 rounded-lg transition 
            ${current === "/dashboard/profile"
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <User size={20} /> Profile
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard/support"
                            className={`flex w-full items-center gap-4 px-4 py-3 rounded-lg transition 
            ${current === "/dashboard/support"
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"}`}
                        >
                            <Headphones size={20} /> Support
                        </Link>

                    </nav>

                    <Link
                        onClick={() => setOpen(false)}
                        to={"/esim-plans"}
                        className="w-full text-center bg-[#10b981] text-white py-3 rounded-xl font-semibold
                       hover:bg-[#0a9f6e] transition flex items-center justify-center gap-3 cursor-pointer"
                    >
                        <ShoppingCart size={20} /> Buy new eSIM
                    </Link>

                    <button className="mt-4 flex items-center gap-3 py-3 text-gray-600 hover:text-red-600 transition cursor-pointer">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            {/* ========================= MAIN CONTENT ========================= */}
            <main className="flex-1 lg:ml-80 min-h-screen pt-16 lg:pt-0">
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
