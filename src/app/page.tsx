import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import Awards from "@/components/Awards";
import BlogAndService from "@/components/BlogAndService";
import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Projects />
      <WhyChooseUs />
      <CTABanner />
      <Services />
      <Difference />
      <Awards />
      <BlogAndService />
      <CompanyOverview />
      <Footer />
    </main>
  );
}
