import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stack from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Content";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stack />
      <Experience />
      <Projects />
      <Newsletter />
      <Contact />
    </main>
  );
}
