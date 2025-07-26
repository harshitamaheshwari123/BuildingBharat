import React, { useRef, useState } from "react";

const tracks = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="#fb8500"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M17 1l4 4-4 4" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M3 5h7a4 4 0 014 4v12" />
        <path d="M21 19h-7a4 4 0 01-4-4V3" />
      </svg>
    ),
    title: "Think Tanks",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="#fb8500"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 3L2 8.5l10 5.5 10-5.5L12 3z" />
        <path d="M2 8.5v7a2 2 0 001 1.73l9 5.2 9-5.2a2 2 0 001-1.73v-7" />
      </svg>
    ),
    title: "Fellowships",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="#fb8500"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 21s-6-4.35-6-10A6 6 0 0112 3a6 6 0 016 6c0 5.65-6 10-6 10z" />
      </svg>
    ),
    title: "Political consulting",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="#fb8500"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 21s-6-4.35-6-10A6 6 0 0112 3a6 6 0 016 6c0 5.65-6 10-6 10z" />
      </svg>
    ),
    title: "Public Policy",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="#fb8500"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M2 21v-2a4 4 0 014-4h12a4 4 0 014 4v2" />
      </svg>
    ),
    title: "Research",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="#fb8500"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M17 1l4 4-4 4" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M3 5h7a4 4 0 014 4v12" />
        <path d="M21 19h-7a4 4 0 01-4-4V3" />
      </svg>
    ),
    title: "MLA/MP internships",
  },
];

export default function CircularCareerTracks() {
  const [rotating, setRotating] = useState(false);
  const [moveIn, setMoveIn] = useState(false);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    setMoveIn(true);
    setRotating(true);
  };

  const handleMouseLeave = () => {
    setMoveIn(false);
    setRotating(false);
  };

  const radius = 180;
  const center = 220;

  return (
    <div className="w-full flex justify-center items-center py-16 bg-orange-50 select-none">
      <div className="relative" style={{ width: 440, height: 440 }}>
        {tracks.map((track, idx) => {
          const angle = (idx / tracks.length) * 2 * Math.PI;
          const x = center + radius * Math.cos(angle) - 44; 
          const y = center + radius * Math.sin(angle) - 44; 
          return (
            <div
              key={idx}
              className={`absolute flex flex-col items-center transition-all duration-700 ${
                rotating ? "animate-spin-slow" : ""
              } ${moveIn ? "z-20 scale-110" : ""}`}
              style={{
                left: moveIn ? center - 44 : x,
                top: moveIn ? center - 44 : y,
                transition: "all 0.7s cubic-bezier(.4,2,.6,1)",
              }}
            >
              <div className="bg-white rounded-full shadow-lg p-4 mb-2 border border-orange-200">
                {track.icon}
              </div>
              <span className="text-green-900 font-semibold text-base whitespace-nowrap">
                {track.title}
              </span>
            </div>
          );
        })}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer z-30"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="block text-3xl md:text-4xl font-extrabold text-green-900 leading-none">
            Building
          </span>
          <span className="block text-3xl md:text-4xl font-extrabold text-orange-500 leading-none">
            BHARAT
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          100% {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
