"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import Masses from "@/components/Masses";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Intro />
      <AboutUs />
      <br></br>
      <Masses />

      <Donations />

      <Events onAddEvent={function (newEvent: any): void {
        throw new Error("Function not implemented.");
      } } />

      <Footer />
    </div>
  );
};

export default Page;
