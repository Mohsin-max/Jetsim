import React from 'react'

const Destinations = () => {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
                    Popular Destinations
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {[
                        { country: "USA", img: "https://images.unsplash.com/photo-1562961857-b1ba8f9dbd5f?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Statue of Liberty
                        { country: "Europe", img: "https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Eiffel Tower
                        { country: "Japan", img: "https://media.istockphoto.com/id/492042302/photo/flag-of-japan-in-the-wind.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nq7oxfMRAjZFCm4rMZswMmU0of1BEMNQFEYMoTOusw4=" }, // Japanese temple/tunnel vibe
                        { country: "Global", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop" }, // World map/globe
                    ].map((dest) => (
                        <div key={dest.country} className="group cursor-pointer overflow-hidden rounded-2xl shadow-xl">
                            <div className="relative aspect-4/3 md:aspect-3/2"> {/* Rectangle shape */}
                                {/* Real Image */}
                                <img
                                    src={dest.img}
                                    alt={dest.country}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                                {/* Country Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider">
                                        {dest.country}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Destinations