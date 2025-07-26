const logos = [
  "/global.png",
  "/ledtech.png",
  "/thepolitical.png",
  "/voxpopuli.jpeg",
  "/smartneta.jpg",
  "/global.png",
  "/DEX.jpeg",
  "/Chanakya_logo.jpg",
];

export default function PartnersMarquee() {
  return (
    <div className="bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full">
         
          <div className="overflow-hidden">
            <div className="flex items-center space-x-8 animate-marquee will-change-transform">
              {logos.concat(logos).map((logo, idx) => (
                <div
                  key={idx}
                  className="border border-green-200 rounded-xl bg-white px-8 py-4 flex items-center min-w-[180px] h-24"
                >
                  <img
                    src={logo}
                    alt={`Partner Logo ${idx + 1}`}
                    className="h-12 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
