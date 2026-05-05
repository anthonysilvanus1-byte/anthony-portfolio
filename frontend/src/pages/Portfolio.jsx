import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Collaboration from "../components/Collaboration";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  // IntersectionObserver-based scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Skills />
        <Experience />
        <Collaboration />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
