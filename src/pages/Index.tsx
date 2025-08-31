import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SampleQuestions from "@/components/SampleQuestions";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SampleQuestions />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
