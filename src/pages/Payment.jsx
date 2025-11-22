import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [currentStep, setCurrentStep] = useState('payment');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [promoCode, setPromoCode] = useState('');

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <h1 className="text-2xl font-bold text-green-600">JETSIM</h1>
                </div>
            </nav>

            {/* Main Content - No fixed height, grows naturally */}
            <div className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-center md:justify-start relative">
                            <div className="flex items-center gap-6 sm:gap-12 lg:gap-20 text-base sm:text-lg font-medium">
                                <button onClick={() => setCurrentStep('cart')} className={`relative pb-4 cursor-pointer transition-all ${currentStep === 'cart' ? 'text-green-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
                                    Cart
                                    {currentStep === 'cart' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>}
                                </button>
                                <button onClick={() => setCurrentStep('payment')} className={`relative pb-4 cursor-pointer transition-all ${currentStep === 'payment' ? 'text-green-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
                                    Payment
                                    {currentStep === 'payment' && <div className="absolute bottom-0 left-0 right-0 h-0.5  bg-green-600 rounded-full"></div>}
                                </button>
                                <button onClick={() => setCurrentStep('confirmation')} className={`relative pb-4 cursor-pointer transition-all ${currentStep === 'confirmation' ? 'text-green-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
                                    Confirmation
                                    {currentStep === 'confirmation' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>}
                                </button>
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 pb-20">
                        {/* Main Content */}
                        <div className="lg:col-span-2 order-2 lg:order-1">
                            <div className="relative">
                                {/* Cart */}
                                <div className={`transition-all duration-500 ease-in-out ${currentStep === 'cart' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                                    {currentStep === 'cart' && (
                                        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Your Cart</h2>
                                            <div className="space-y-6 pb-6 border-b">
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">Europe 10GB Plan (30 Days)</h4>
                                                        <p className="text-gray-600 text-sm">Valid for 30 days • Instant activation</p>
                                                    </div>
                                                    <span className="text-2xl font-bold">$18.00</span>
                                                </div>
                                            </div>
                                            <div className="mt-8 flex justify-end">
                                                <button onClick={() => setCurrentStep('payment')} className="bg-green-600 text-white px-10 py-4 rounded-xl cursor-pointer font-semibold hover:bg-green-700 transition shadow-lg">
                                                    Proceed to Payment
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Payment */}
                                <div className={`transition-all duration-500 ease-in-out ${currentStep === 'payment' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                                    {currentStep === 'payment' && (
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Payment Details</h2>
                                            <p className="text-gray-600 mb-8">
                                                Securely enter your payment information to complete your purchase. All transactions are encrypted and protected.
                                            </p>

                                            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                                                <div className="space-y-5 mb-8">
                                                    {/* Credit/Debit Card */}
                                                    <label className={`flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 border-2 rounded-xl cursor-pointer transition ${paymentMethod === 'card' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                                        <div className="flex items-center gap-4">
                                                            <input type="radio" name="method" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-5 h-5 text-green-600" />
                                                            <span className="font-semibold">Credit/Debit Card</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <img src="https://pk.visamiddleeast.com/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png" alt="Visa" className="h-4" />
                                                            <img src="https://i.pinimg.com/736x/56/fd/48/56fd486a48ff235156b8773c238f8da9.jpg" alt="Mastercard" className="h-8" />
                                                            <img src="https://snusalert.com/image/catalog/Betalingen/american-express-snus.png" alt="Amex" className="h-8" />
                                                        </div>
                                                    </label>

                                                    {/* PayPal */}
                                                    <label className={`flex items-center justify-between p-5 sm:p-6 border-2 rounded-xl cursor-pointer transition ${paymentMethod === 'paypal' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                                        <div className="flex items-center gap-4">
                                                            <input type="radio" name="method" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="w-5 h-5 text-green-600" />
                                                            <span className="font-semibold">PayPal</span>
                                                        </div>
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-6" />
                                                    </label>

                                                    {/* Crypto */}
                                                    <label className={`flex items-center justify-between p-5 sm:p-6 border-2 rounded-xl cursor-pointer transition ${paymentMethod === 'crypto' ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                                        <div className="flex items-center gap-4">
                                                            <input type="radio" name="method" checked={paymentMethod === 'crypto'} onChange={() => setPaymentMethod('crypto')} className="w-5 h-5 text-green-600" />
                                                            <span className="font-semibold">Crypto</span>
                                                        </div>
                                                        <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">₿</div>
                                                    </label>
                                                </div>

                                                {paymentMethod === 'card' && (
                                                    <div className="space-y-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition" />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                                                <input type="text" placeholder="MM / YY" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition" />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-2">CVC / CVV</label>
                                                                <input type="text" placeholder="123" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                                                            <input type="text" placeholder="John Doe" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition" />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
                                                    <button onClick={() => setCurrentStep('cart')} className="text-gray-600 hover:text-green-600 font-medium text-lg order-2 sm:order-1">
                                                        ← Back to Cart
                                                    </button>
                                                    <button onClick={() => setCurrentStep('confirmation')} className="bg-green-600 text-white px-10 py-4 rounded-xl cursor-pointer font-semibold hover:bg-green-700 transition shadow-lg order-1 sm:order-2 w-full sm:w-auto">
                                                        Complete Purchase
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Confirmation */}
                                <div className={`transition-all duration-500 ease-in-out ${currentStep === 'confirmation' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                                    {currentStep === 'confirmation' && (
                                        <div className="bg-white rounded-2xl shadow-sm p-10 sm:p-16 text-center">
                                            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                                <svg className="w-14 h-14 sm:w-16 sm:h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Purchase Complete!</h2>
                                            <p className="text-lg sm:text-xl text-gray-600 mb-10">Your eSIM has been sent to your email.</p>
                                            <Link to={"/manage-esims"} className="bg-green-600 text-white px-12 py-4 rounded-xl font-semibold cursor-pointer text-lg hover:bg-green-700 transition shadow-lg">
                                                Go to My eSIMs
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1 order-1 lg:order-2">
                            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-20">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span>Europe 10GB Plan (30 Days)</span>
                                        <span className="font-medium">$18.00</span>
                                    </div>
                                    <div className="flex justify-between text-green-600">
                                        <span>Discount</span>
                                        <span>-$2.00</span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-xl font-bold">
                                            <span>Total</span>
                                            <span className="text-green-600">$16.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <input
                                            type="text"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            placeholder="Promo Code"
                                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600"
                                        />
                                        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-medium whitespace-nowrap">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 flex items-start gap-3">
                                    <ShieldCheck className="text-green-600" size={40} />
                                    <div>
                                        <p className="font-medium text-green-600">Secure Payment</p>
                                        <p className="text-sm text-zinc-500">
                                            Your payment information is encrypted and transmitted securely with an SSL protocol.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Always at bottom */}
            <footer className="bg-gray-100 border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                        <p>© 2024 JetSim. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-green-600 transition">Support</a>
                            <a href="#" className="hover:text-green-600 transition">FAQs</a>
                            <a href="#" className="hover:text-green-600 transition">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Payment;