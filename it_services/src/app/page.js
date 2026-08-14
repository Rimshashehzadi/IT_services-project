import Hero from "../app/components/home/Hero";
import TrustedBy from "../app/components/home/TrustedBy";
import Services from "../app/components/home/Services";
import Technologies from "../app/components/home/Technologies";
import StatsSection from "../app/components/home/StatsSection";
import Projects from "../app/components/home/Projects";
import WhyChooseUs from "../app/components/home/WhyChooseUs";
import Testimonials from "../app/components/home/Testimonials";
import Plans from "../app/components/home/Plans";
import Contact from "../app/components/home/Contact";
import BottomGallery from "../app/components/home/BottomGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <Technologies />
      <StatsSection />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Plans />
      <Contact />
      <BottomGallery />
    </main>
  );
}