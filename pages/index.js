import Header from "../components/Header";
import PartnersMarquee from "../components/PartnersMarquee";
import Testimonials from "../components/Testimonials";
import CareerTracks from "../components/CareerTracks";
import HeroSection from "../components/Herosection";

export default function Home() {
  const circularItems = [
    { label: "Think Tanks", icon: "/icons/bulb.svg", angle: 210 },
    { label: "Research", icon: "/icons/research.svg", angle: 270 },
    { label: "MLA/MP internships", icon: "/icons/mic.svg", angle: 330 },
    { label: "Political consulting", icon: "/icons/brain.svg", angle: 150 },
    { label: "Public Policy", icon: "/icons/paper.svg", angle: 30 },
    { label: "Fellowships", icon: "/icons/grad.svg", angle: 90 },
  ];

  return (
    <>
      <Header />
      <HeroSection/>
      <PartnersMarquee />
      <Testimonials />
      <CareerTracks />
    </>
  );
}
