// app/page.tsx
"use client";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
