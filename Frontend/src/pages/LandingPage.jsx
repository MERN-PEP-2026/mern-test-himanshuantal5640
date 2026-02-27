// import React from "react";
// import Navbar from "../components/layout/Navbar";
// import Hero from "../components/landing/Hero";
// import Features from "../components/landing/Features";
// import CTA from "../components/landing/CTA";
// import Footer from "../components/layout/Footer";

// export default function LandingPage() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features />
//       <CTA />
//       <Footer />
//     </>
//   );
// }
import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Footer from "../components/layout/Footer";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
      <Footer />
    </>
  );
}