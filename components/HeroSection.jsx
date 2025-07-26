"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { icon: "/mindset.png", label: "Research" },
  { icon: "/fellowship.png", label: "Think Tanks" },
  { icon: "/bulb.png", label: "MLA/MP internships" },
  { icon: "/mike.png", label: "Public Policy" },
  { icon: "/document.png", label: "Political consulting" },
  { icon: "/search.png", label: "Fellowships" },
];

export default function HeroSection() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="relative bg-white pl-8 pr-16 md:pl-28 md:pr-36 pt-20 pb-28 mt-6 flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-6xl md:text-5xl font-bold text-[#00473C] leading-tight mb-4">
          Crack Political and policies roles with Confidence!
        </h1>
        <p className="text-4xl font-extrabold text-orange-600 mb-4">
          Learn. Lead. Transform Bharat
        </p>
        <p className="text-gray-800 mb-6 text-lg">
          We offer a world class curriculum and expert mentorship to help you
          break into politics and policy roles. No background needed — just your
          passion to lead and transform Bharat.
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition">
            Start Learning For Free
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold transition-colors duration-300 hover:bg-orange-500 hover:text-white">
            Join premium
          </button>
        </div>
      </div>

      <div
        className="relative mt-12 md:mt-0 group w-[400px] h-[400px] flex items-center justify-center px-4"
        onMouseEnter={() => setShowIcons(true)}
      >
        <div className="text-center z-20 cursor-pointer">
          <h2 className="text-7xl font-bold text-[#00473C]">Building</h2>
          <h2 className="text-7xl font-bold text-orange-600">BHARAT</h2>
        </div>

        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full">
            {items.map((item, i) => {
              const angle = (360 / items.length) * i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    showIcons
                      ? {
                          opacity: 1,
                          scale: [1, 1.15, 1],
                          x: [
                            350 * Math.cos((angle * Math.PI) / 180),
                            280 * Math.cos((angle * Math.PI) / 180),
                            230 * Math.cos((angle * Math.PI) / 180),
                            280 * Math.cos((angle * Math.PI) / 180),
                          ],
                          y: [
                            350 * Math.sin((angle * Math.PI) / 180),
                            280 * Math.sin((angle * Math.PI) / 180),
                            230 * Math.sin((angle * Math.PI) / 180),
                            280 * Math.sin((angle * Math.PI) / 180),
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div className="rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={40}
                      height={40}
                      unoptimized
                    />
                  </motion.div>
                  <span className="text-sm text-[#00473C] mt-1 text-center whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
