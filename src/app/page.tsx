"use client";

import React, { useEffect } from "react";

import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos"; // Import the AOS libra

import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import Masses from "@/components/Masses";
import Subscribe from "@/components/Subscribe";
import Donations from "@/components/Donations";
const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Intro />
      <AboutUs />
      <Masses />
      <Donations />
      <Subscribe />
    </div>
  );
};

export default Page;
