
import Hero from "./components/Hero";
import Features from "./components/Features";
import Brands from "./components/Brands";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs"
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Features />
      <Brands />
      <Aboutus />
      <Services />
      <WhyChooseUs />
    </main>
  );
}
