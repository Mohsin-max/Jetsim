import React from 'react'
import { Globe, CheckCircle, Headphones} from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Us</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        { icon: Globe, title: "Global Coverage", desc: "Stay connected in over 190 countries with our reliable network partners." },
                        { icon: CheckCircle, title: "Instant Activation", desc: "Receive and activate your eSIM immediately – no waiting, no physical SIM needed." },
                        { icon: Headphones, title: "Secure Checkout", desc: "Your payments and data safe with our encrypted and trusted payment process." },
                        { icon: Headphones, title: "24/7 Support", desc: "Our customer support team is here for you around the clock, any day, any time." },
                    ].map((feature, i) => (
                        <div key={i} className="text-center bg-white p-4 rounded-xl">
                            <div className="w-16 h-16 mx-auto mb-5 bg-green-100 rounded-full flex items-center justify-center">
                                <feature.icon className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs