import React from 'react';
import { Search, QrCode, RefreshCw, Plus } from 'lucide-react';

const MyEsim = () => {
    const eSIMs = [
        {
            nickname: "Japan Unlimited",
            country: "Japan",
            flag: "🇯🇵",
            usage: 12.5,
            total: 20,
            status: "Active",
            expires: "Expires in 15 days",
            qr: true,
            topup: true
        },
        {
            nickname: "USA Trip",
            country: "United States",
            flag: "🇺🇸",
            usage: 3.2,
            total: 5,
            status: "Active",
            expires: "Expires in 8 days",
            qr: true,
            topup: true
        },
        {
            nickname: "Europe Roaming",
            country: "Europe",
            flag: "🇪🇺",
            usage: 0,
            total: 10,
            status: "Inactive",
            expires: "Ready to activate",
            qr: true,
            topup: true
        }
    ];

    const hasESIMs = eSIMs.length > 0;

    return (
        <div className="min-h-screen bg-gray-50 pb-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">My eSIMs</h1>
                <button className="bg-green-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-green-700 transition flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                    <Plus size={20} /> Buy new eSIM
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">

                {/* Search Bar */}
                <div className="mb-8 w-full">
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-4 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search for eSIMs by nickname or country"
                            className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                    </div>
                </div>

                {hasESIMs ? (
                    <div className="space-y-6">
                        {eSIMs.map((esim, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                                <div className="p-6 space-y-4">

                                    {/* Title + Status */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl sm:text-4xl">{esim.flag}</div>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{esim.nickname}</h3>
                                                <p className="text-gray-600 text-sm sm:text-base">{esim.country}</p>
                                            </div>
                                        </div>

                                        <span className={`px-4 py-2 rounded-full text-sm font-medium w-fit ${esim.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-100 text-gray-600"
                                            }`}>
                                            {esim.status}
                                        </span>
                                    </div>

                                    {/* Data Usage */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-600">Data Usage</span>
                                            <span className="font-medium text-gray-900">
                                                {esim.usage}GB / {esim.total}GB
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full transition-all duration-500 ${esim.status === "Active" ? "bg-green-500" : "bg-gray-300"
                                                    }`}
                                                style={{ width: `${(esim.usage / esim.total) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Expiry + Buttons */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <p className="text-sm text-gray-600">{esim.expires}</p>

                                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                            <button className="px-5 py-3 border border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition justify-center text-sm">
                                                <QrCode size={18} /> View QR
                                            </button>
                                            <button className="px-5 py-3 bg-green-600 text-white rounded-xl flex items-center gap-2 hover:bg-green-700 transition justify-center text-sm">
                                                <RefreshCw size={18} /> Top-Up / Renew
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                ) : (

                    // No eSIMs State
                    <div className="text-center py-20 px-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-28 h-28 mx-auto mb-8 flex items-center justify-center">
                            <div className="text-gray-400">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 12h3v8h14v-8h3L12 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">No eSIMs Found</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            You haven't purchased any eSIMs yet.
                        </p>
                        <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition text-lg">
                            Browse eSIM Plans
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default MyEsim;
