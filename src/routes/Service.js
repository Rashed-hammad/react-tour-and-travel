import React from "react";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Service"
        heroImg={AboutImg}
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
