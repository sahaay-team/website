import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import ExpertShowcase from "@/components/ExpertShowcase"
import LocalImpact from "@/components/LocalImpact";
import SimpleSteps from "@/components/SimpleSteps";
import TimeValue from "@/components/TimeValue";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";
import LocalHeroes from "@/components/LocalHeroes";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <HowItWorks />
        <ExpertShowcase />
        <LocalImpact />
        <SimpleSteps />
        <TimeValue />
        <EnhancedTestimonials />
        <LocalHeroes />
        <Footer />
      </main>
    </div>
  );
}