import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Problem from "@/components/Problem";
import AboutEmre from "@/components/AboutEmre";
import Leistungen from "@/components/Leistungen";
import Prozess from "@/components/Prozess";
import Referenzen from "@/components/Referenzen";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoBar />
      <Problem />
      <AboutEmre />
      <Leistungen />
      <Prozess />
      <Referenzen />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
