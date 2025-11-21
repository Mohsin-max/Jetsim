import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Testimonials = () => {

    const testimonials = [
        {
            name: "Alex J.",
            text: "The best eSIM service I've used! Setup was instant and worked perfectly throughout my trip to Europe."
        },
        {
            name: "Samantha L.",
            text: "Stayed connected in Japan without any issues. Much better than expensive roaming!"
        },
        {
            name: "Michael Chen",
            text: "I was skeptical at first, but the 24/7 support was amazing when I had a question. Highly recommend!"
        },
        {
            name: "Emma Wilson",
            text: "Saved me hundreds on my Southeast Asia trip. Instant activation and reliable speeds everywhere!"
        },
        {
            name: "Rahul Kumar",
            text: "Finally a company that actually delivers what they promise. 10/10 would use again!"
        },
        {
            name: "Laura Martinez",
            text: "Super easy QR code installation. Worked flawlessly in 5 different countries."
        }
    ];

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800">
                    What Our Customers Say
                </h2>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        className="pb-8"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-gray-50 p-8 shadow-lg rounded-2xl transition-all duration-300 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, idx) => (
                                                <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.317 9.39c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.963z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                                            "{t.text}"
                                        </p>
                                    </div>
                                    <p className="font-bold text-emerald-600 text-lg">- {t.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Arrows - Bilkul clean aur modern */}
                    <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials