import React, { useState } from 'react';
import { Mail, Camera } from 'lucide-react';

const Profile = () => {
    const [firstName, setFirstName] = useState('Alex');
    const [lastName, setLastName] = useState('Doe');
    const [email] = useState('alex.doe@email.com');

    // Notification toggles
    const [offers, setOffers] = useState(true);
    const [reminders, setReminders] = useState(true);
    const [updates, setUpdates] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="w-28 h-28 overflow-hidden rounded-full flex items-center justify-center text-white text-4xl font-bold border-2 border-gray-200">
                                    {/* AD */}
                                    <img src="https://img.freepik.com/free-vector/afro-man-profile_24908-81806.jpg?w=740" alt="" />
                                </div>
                                <button className="absolute bottom-1 right-1 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition">
                                    <Camera size={16} />
                                </button>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    Jhon Doe
                                </h2>
                                <p className="text-gray-600 flex items-center gap-2 mt-1">
                                    <Mail size={18} /> jhondoe@email.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Information - Already in Form Mode (like image) */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-b-gray-200 pb-4">Personal Information</h3>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                className="w-full px-5 py-4 bg-gray-100 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Save / Cancel Buttons - Exactly like image */}
                        <div className="flex justify-end gap-4 pt-4 ">
                            <button className="px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium">
                                Cancel
                            </button>
                            <button className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-b-gray-200 pb-4">Security</h3>
                    <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transition">
                        Change Password
                    </button>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h3>

                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-800 max-w-md">Special offers and promotions from JetSim</p>
                            <button
                                onClick={() => setOffers(!offers)}
                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${offers ? 'bg-green-600' : 'bg-gray-300'}`}
                            >
                                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${offers ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-gray-800 max-w-md">Reminders about your data plan and eSIM expiration</p>
                            <button
                                onClick={() => setReminders(!reminders)}
                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${reminders ? 'bg-green-600' : 'bg-gray-300'}`}
                            >
                                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${reminders ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-gray-800 max-w-md">Important updates about your account</p>
                            <button
                                onClick={() => setUpdates(!updates)}
                                className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${updates ? 'bg-green-600' : 'bg-gray-300'}`}
                            >
                                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${updates ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;