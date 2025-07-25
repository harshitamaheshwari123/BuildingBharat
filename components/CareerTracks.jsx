export default function CareerTracks() {
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
          <path d="M12 3L2 8.5l10 5.5 10-5.5L12 3z" />
          <path d="M2 8.5v7a2 2 0 001 1.73l9 5.2 9-5.2a2 2 0 001-1.73v-7" />
        </svg>
      ),
      title: "College Students",
      desc: "Students from any discipline looking to build a career in politics and policy",
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
      title: "Career Switchers",
      desc: "Professionals from other fields wanting to transition into political consulting",
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
      title: "Young Professionals",
      desc: "Early-career professionals seeking to specialize in government and policy work",
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
      title: "Policy Enthusiasts",
      desc: "Anyone passionate about public service and creating positive social impact",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
        Who Is This Initiative For?
      </h2>
      <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
        Perfect for Aspiring Political and Policy Professionals from All
        Backgrounds
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border"
          >
            <div className="mb-6">{track.icon}</div>
            <h3 className="text-green-900 font-bold text-xl mb-2">
              {track.title}
            </h3>
            <p className="text-gray-500 text-base">{track.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
