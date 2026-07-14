import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CoursesPreview from "@/components/CoursesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
