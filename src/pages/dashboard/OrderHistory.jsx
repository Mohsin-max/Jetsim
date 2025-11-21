import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const OrderHistory = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);

    const itemsPerPage = 5;  // ← Yeh line important hai

    const orders = [
        { id: '#JS-123456', date: 'October 26, 2023', plan: 'USA - 10GB / 30 Days', price: '$29.99', status: 'Completed' },
        { id: '#JS-123455', date: 'October 24, 2023', plan: 'Japan - 20GB / 30 Days', price: '$49.99', status: 'Completed' },
        { id: '#JS-123454', date: 'October 22, 2023', plan: 'Global Plan - 5GB / 15 Days', price: '$19.99', status: 'Pending' },
        { id: '#JS-123453', date: 'October 20, 2023', plan: 'Europe - 10GB / 30 Days', price: '$39.99', status: 'Failed' },
        { id: '#JS-123452', date: 'October 18, 2023', plan: 'USA - 5GB / 15 Days', price: '$15.99', status: 'Completed' },
        { id: '#JS-123451', date: 'October 17, 2023', plan: 'Thailand - 8GB / 15 Days', price: '$24.99', status: 'Completed' },
        { id: '#JS-123450', date: 'October 15, 2023', plan: 'Global - 3GB / 7 Days', price: '$12.99', status: 'Pending' },
        { id: '#JS-123449', date: 'October 12, 2023', plan: 'USA - 20GB / 30 Days', price: '$49.99', status: 'Completed' },
        { id: '#JS-123448', date: 'October 10, 2023', plan: 'Europe - 15GB / 30 Days', price: '$59.99', status: 'Failed' },
        { id: '#JS-123447', date: 'October 8, 2023', plan: 'Japan - 10GB / 15 Days', price: '$39.99', status: 'Completed' },
    ];

    // ← Yeh calculation add ki hai (main fix)
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentOrders = orders.slice(startIndex, endIndex);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'Pending': return 'bg-yellow-100 text-yellow-700';
            case 'Failed': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="p-6 lg:p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">My Order History</h2>

            {/* Filters same */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-5 top-4 text-gray-400" size={20} />
                        <input type="text" placeholder="Search by country or order ID" className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                    </div>
                    {/* Date Picker & Status Dropdown same */}
                    <div className="relative">
                        <button onClick={() => setShowDatePicker(!showDatePicker)} className="px-6 py-4 bg-gray-50 rounded-xl flex items-center gap-3 whitespace-nowrap hover:bg-gray-100 transition">
                            <Calendar size={20} /> {startDate && endDate ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` : 'Date Range'}
                        </button>
                        {showDatePicker && (
                            <div className="absolute top-full mt-2 z-50">
                                <DatePicker selected={startDate} onChange={(dates) => { const [start, end] = dates; setStartDate(start); setEndDate(end); if (end) setShowDatePicker(false); }} startDate={startDate} endDate={endDate} selectsRange inline />
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button onClick={() => setShowStatusDropdown(!showStatusDropdown)} className="px-6 py-4 bg-gray-50 rounded-xl flex items-center gap-3 whitespace-nowrap hover:bg-gray-100 transition">
                            Status: {selectedStatus} <ChevronDown size={20} />
                        </button>
                        {showStatusDropdown && (
                            <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg border w-full z-50">
                                {['All', 'Completed', 'Pending', 'Failed'].map(status => (
                                    <button key={status} onClick={() => { setSelectedStatus(status); setShowStatusDropdown(false); }} className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition">
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table - Sirf current page ke orders dikhao */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left font-medium text-gray-600 px-8 py-5">ORDER ID</th>
                                <th className="text-left font-medium text-gray-600 px-8 py-5">PURCHASE DATE</th>
                                <th className="text-left font-medium text-gray-600 px-8 py-5">PLAN</th>
                                <th className="text-left font-medium text-gray-600 px-8 py-5">PRICE</th>
                                <th className="text-left font-medium text-gray-600 px-8 py-5">STATUS</th>
                                <th className="text-right font-medium text-gray-600 px-8 py-5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order) => (
                                <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                                    <td className="px-8 py-6 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-8 py-6 text-gray-600">{order.date}</td>
                                    <td className="px-8 py-6 text-gray-900">{order.plan}</td>
                                    <td className="px-8 py-6 font-semibold text-gray-900">{order.price}</td>
                                    <td className="px-8 py-6">
                                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <a href="#" className="text-green-600 font-medium hover:underline inline-flex items-center gap-2">
                                            View Details <ChevronRight size={18} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination - Ab fully working */}
                <div className="px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50">
                    <div className="flex items-center gap-2">
                        <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}
                            className="p-3 rounded-lg border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition">
                            <ChevronLeft size={20} />
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i + 1} onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 rounded-lg transition ${currentPage === i + 1 ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'}`}>
                                {i + 1}
                            </button>
                        ))}

                        <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}
                            className="p-3 rounded-lg border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <p className="text-gray-600">Page {currentPage} of {totalPages}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory