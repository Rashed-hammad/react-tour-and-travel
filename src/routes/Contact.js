import React from "react";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Contact"
        heroImg={AboutImg}
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
