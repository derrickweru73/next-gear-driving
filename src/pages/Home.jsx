import React from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import CoursesPreview from "../components/home/CoursesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F8F6F2] overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* Featured Courses */}
      <CoursesPreview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Student Reviews */}
      <Reviews />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
