import Image from "next/image";

const items = [
  { icon: "/mindset.png", label: "Research" },
  { icon: "/fellowship.png", label: "Think Tanks" },
  { icon: "/bulb.png", label: "MLA/MP internships" },
  { icon: "/mike.png", label: "Public Policy" },
  { icon: "/document.png", label: "Political consulting" },
  { icon: "/search.png", label: "Fellowships" },
];

export default function HeroSection() {
  return (
    <div className="relative bg-white px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Text Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00473C] leading-tight mb-4">
          Crack Political and policies roles with Confidence!
        </h1>
        <p className="text-3xl font-extrabold text-orange-600 mb-4">
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

      {/* Rotating Section */}
      <div className="relative mt-12 md:mt-0 group w-[300px] h-[300px] flex items-center justify-center">
        {/* Central Text */}
        <div className="text-center z-20 absolute">
          <h2 className="text-4xl font-bold text-[#00473C]">Building</h2>
          <h2 className="text-5xl font-bold text-orange-600">BHARAT</h2>
        </div>

        {/* Icon Circle (Initially hidden) */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-700">
            {items.map((item, i) => {
              const angle = (360 / items.length) * i;
              const radius = 120;

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `
                      rotate(${angle}deg)
                      translate(${radius}px)
                      rotate(${-angle}deg)
                    `,
                    transformOrigin: "center",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-orange-100 p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <span className="text-sm text-[#00473C] mt-1 text-center whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}