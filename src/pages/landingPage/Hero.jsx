import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {

    return (
        <section className="pt-20 lg:pt-32 relative overflow-hidden bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 text-center bg-gradient-to-bl from-[#aeecd8] to-[#aeecd8]/40 rounded-3xl flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight text-center lg:w-[65%]">
                    Stay Connected Anywhere
                    — Buy Global eSIMs in Seconds
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Experience seamless connectivity with our global eSIMs. No more roaming fees. Just instant, affordable data to over 190 countries. Travel smart, stay connected.
                </p>

                <Link
                    to="/signup"
                    className="bg-[#00d18b] text-white px-10 py-4 rounded-xl text-lg font-bold transition shadow-xl transform hover:scale-102 cursor-pointer inline-block"
                >
                    Get Started
                </Link>
            </div>
        </section>
    )
}

export default Hero
