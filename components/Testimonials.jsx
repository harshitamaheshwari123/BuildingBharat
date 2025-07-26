import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React, { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student Leader, Nagpur",
      text: `<span class="font-bold text-2xl block mb-2">Student to Social Impact Leader</span>
        Building Bharat transformed the way I learn and think. With hands-on projects, expert mentorship, and constant support, I discovered my leadership potential. I never imagined I'd lead initiatives in my own town while learning from top mentors across India. The journey wasn't easy, but the Building Bharat team made it achievable. Every step, every doubt, every win was celebrated. If you're serious about growing and giving back to India, this is where you start.`,
      image: "/girl1.avif",
    },
    {
      name: "Ravi Kumar",
      role: "Policy Intern, Delhi",
      text: `<span class="font-bold text-2xl block mb-2">Small Village to National Level Fellowship</span>
        Before Building Bharat, I had big dreams but no direction. The courses opened up opportunities I never thought possible from rural innovation challenges to real-world community projects. The mentors treated us like family and pushed us to aim higher. Today, I'm mentoring students from my own village and applying for fellowships that once felt out of reach. This platform is a launchpad for every Indian youth who wants to create change`,
      image: "/boy.jpeg",
    },
    {
      name: "Sneha Roy",
      role: "Social Impact Fellow, Kolkata",
      text: `<span class="font-bold text-2xl block mb-2">From Doubt to Impactful Career Path</span>
        I used to believe students from tier 3 colleges couldn't compete. But Building Bharat changed my mindset. Through their programs, I built a strong portfolio, worked on local issues, and even led a state-level hackathon! This journey isn't just about jobs — it's about purpose. I'm more confident, skilled, and connected to a mission bigger than myself."`,
      image: "/girl.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-14 px-4" id="testimonials">
      <h2 className="text-center text-5xl font-bold text-green-900 mb-10">
        Stories That Inspire
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onAutoplay={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl flex flex-col md:flex-row items-center md:items-start p-8 md:p-12 max-w-5xl mx-auto transition-all duration-500 relative">
              
            
              <div className="flex-1 text-left md:pr-12 w-full">
                <div
                  className="text-gray-800 text-lg leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: t.text }}
                />
                <p className="text-orange-600 font-bold text-2lg">{t.name}</p>
                <p className="text-gray-600 font-medium mb-4">{t.role}</p>
              </div>

              
              <img
                src={t.image}
                alt={t.name}
                className="w-48 h-60 rounded-2xl object-cover mt-6 md:mt-0 md:ml-10"
              />

             
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "bg-black w-10" : "bg-gray-300 w-24"
                    }`}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
