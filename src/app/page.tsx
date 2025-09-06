import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen">
      <Header />
      <Hero />
        <WhyChooseUs />
          <Services />
            <Portfolio />
             <Testimonials />
              <CallToAction />
              <FAQ />
              <Contact />
               <Footer />
    </main>
  );
}
