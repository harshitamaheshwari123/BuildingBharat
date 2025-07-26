import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex items-center justify-between bg-white rounded-full shadow-md px-8 py-3 border border-orange-100"
          style={{ boxShadow: "0 2px 16px 0 #ffb26b33" }}
        >
          <div className="flex items-center">
            <span className="text-orange-500 text-2xl font-bold mr-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fb8500"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 21V7.5L12 3l5 4.5V21" />
                <path d="M12 3v18" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-green-900 font-bold text-sm">BUILDING</span>
              <span className="text-orange-500 font-bold text-sm -mt-1">
                BHARAT
              </span>
            </span>
          </div>
          <nav className="flex-1 flex justify-center items-center gap-10">
            {["Home", "Courses", "For College", "Internships", "Blogs"].map(
              (text, i) => {
                const isHome = text === "Home";

                return (
                  <Link
                    href="#"
                    key={i}
                    className={`relative group inline-block overflow-hidden rounded-full px-7 py-2 font-medium text-lg transition-all duration-1000 ${
                      isHome ? "bg-orange-500 text-white" : "text-orange-500"
                    }`}
                  >
                    {!isHome && (
                      <span className="absolute inset-0 left-0 top-0 h-full w-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                    )}

                    <span
                      className={`relative z-10 ${
                        !isHome ? "group-hover:text-white" : ""
                      }`}
                    >
                      {text}
                    </span>
                  </Link>
                );
              }
            )}
          </nav>
          <button className="border-2 border-orange-500 text-orange-500 font-bold px-7 py-2 rounded-full text-lg transition hover:bg-orange-500 hover:text-white shadow-sm">
            Start Learning
          </button>
        </div>
      </div>
    </header>
  );
}
