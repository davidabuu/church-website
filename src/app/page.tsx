"use client";

import React, { useEffect } from "react";

import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos"; // Import the AOS libra

import Intro from "@/components/Intro";
const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Intro />
    </div>
  );
};

export default Page;
