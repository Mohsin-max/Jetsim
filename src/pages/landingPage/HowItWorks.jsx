import React from 'react'
import { MapPin, QrCode, Wifi } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">How It Works</h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Get connected in just 3 simple steps</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { icon: MapPin, title: "Choose Your Destination", desc: "Select from over 190 countries and regions. Find the perfect data plan for your trip." },
            { icon: QrCode, title: "Install Your eSIM", desc: "Scan the QR code we send you. Installation is simple and only takes a few moments." },
            { icon: Wifi, title: "Activate and Connect", desc: "Turn on your eSIM, activate data and start enjoying instant high-speed connection." },
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <step.icon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{i + 1}. {step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks