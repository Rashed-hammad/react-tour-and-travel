import React from "react";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
export default function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" title="About" heroImg={AboutImg} btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
}
