"use client";

import React, { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import Masses from "@/components/Masses";
import Subscribe from "@/components/Subscribe";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";
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
      <Subscribe />
      {/* <Footer />  */}
    </div>
  );
};

export default Page;
