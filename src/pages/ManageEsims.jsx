import React, { useState } from 'react';
import { Search, MoreVertical, QrCode, RefreshCw, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ManageEsims = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeESIMs = [
    {
      nickname: "My UK Trip",
      country: "United Kingdom",
      flag: "UK",
      used: 15.2,
      total: 20,
      validUntil: "2024-08-15",
      status: "Active"
    },
    {
      nickname: "Euro Tour",
      country: "Europe",
      flag: "EU",
      used: 4.5,
      total: 10,
      validUntil: "2024-09-01",
      status: "Active"
    }
  ];

  const expiredESIMs = [
    {
      nickname: "Japan 2023",
      country: "Japan",
      flag: "JP",
      used: 8,
      total: 8,
      validUntil: "2023-12-20",
      status: "Expired"
    }
  ];

  const currentESIMs = activeTab === 'active' ? activeESIMs : expiredESIMs;

  return (
    <>
      {/* Navbar */}
      {/* <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-600">JETSIM</Link>
          
          <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
            <Link to="/plans" className="hover:text-green-600 transition">Buy eSIMs</Link>
            <Link to="/my-esims" className="text-green-600 font-bold">My eSIMs</Link>
            <Link to="/account" className="hover:text-green-600 transition">My Account</Link>
            <button className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">i</span>
            </button>
          </div>
        </div>
      </nav> */}

      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Manage My eSIMs</h1>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-5 top-4 text-gray-400" size={22} />
              <input
                type="text"
                placeholder="Search by nickname or country"
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-sm"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('active')}
              className={`pb-4 px-2 text-lg font-medium transition relative ${activeTab === 'active'
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Active
              {activeTab === 'active' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('expired')}
              className={`pb-4 px-2 text-lg font-medium transition relative ${activeTab === 'expired'
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Expired
              {activeTab === 'expired' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-full"></div>
              )}
            </button>
          </div>

          {/* eSIM Cards */}
          <div className="space-y-6">
            {currentESIMs.map((esim, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left Side */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{esim.nickname}</h3>
                          <p className="text-gray-600 flex items-center gap-2">
                            <span className="text-2xl">{esim.flag}</span> {esim.country}
                          </p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${esim.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                          }`}>
                          {esim.status}
                        </span>
                      </div>

                      {/* Data Usage */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Data Usage</span>
                          <span className="font-medium text-gray-900">
                            {esim.used} GB / {esim.total} GB
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className={`h-4 rounded-full transition-all duration-700 ${esim.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
                              }`}
                            style={{ width: `${(esim.used / esim.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">
                        Valid until: {esim.validUntil}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button className="px-5 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition flex items-center gap-2">
                        <Plus size={18} /> Top-Up
                      </button>
                      <button className="px-5 py-3 bg-green-100 text-green-700 rounded-xl font-medium hover:bg-green-200 transition flex items-center gap-2">
                        <RefreshCw size={18} /> Renew
                      </button>
                      <button className="px-5 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition flex items-center gap-2">
                        <QrCode size={18} /> View QR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (if no eSIMs) */}
          {currentESIMs.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">No {activeTab} eSIMs found</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
            <a href="#" className="hover:text-green-600 transition">Support</a>
            <a href="#" className="hover:text-green-600 transition">FAQ</a>
            <a href="#" className="hover:text-green-600 transition">Terms of Service</a>
          </div>
          <p>© 2024 JetSim. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ManageEsims;