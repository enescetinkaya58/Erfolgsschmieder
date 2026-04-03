import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Problem from "@/components/Problem";
import Leistungen from "@/components/Leistungen";
import WarumWir from "@/components/WarumWir";
import Team from "@/components/Team";
import Referenzen from "@/components/Referenzen";
import Prozess from "@/components/Prozess";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoBar />
      <Problem />
      <Leistungen />
      <WarumWir />
      <Team />
      <Referenzen />
      <Prozess />
      <CTA />
      <Footer />
    </>
  );
}
