import Image from "next/image";

export default function CareerTracks() {
  const tracks = [
    {
      icon: (
        <Image
          src="/scholar.png"
          alt="College Students"
          width={48}
          height={48}
          unoptimized
        />
      ),
      title: "College Students",
      desc: "Students from any discipline looking to build a career in politics and policy",
    },
    {
      icon: (
        <Image
          src="/exchange.png"
          alt="Career Switchers"
          width={48}
          height={48}
          unoptimized
        />
      ),
      title: "Career Switchers",
      desc: "Professionals from other fields wanting to transition into political consulting",
    },
    {
      icon: (
        <Image
          src="/give-love.png"
          alt="Young Professionals"
          width={48}
          height={48}
          unoptimized
        />
      ),
      title: "Young Professionals",
      desc: "Early-career professionals seeking to specialize in government and policy work",
    },
    {
      icon: (
        <Image
          src="/user.png"
          alt="Policy Enthusiasts"
          width={48}
          height={48}
          unoptimized
        />
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
