import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className="flex items-center justify-center w-full min-h-screen bg-white px-4">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
