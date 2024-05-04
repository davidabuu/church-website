"use client";
import React, { useEffect } from "react";
import Aos from "aos";

import DonationPage from "@/components/DonationPage";

import Footer from "@/components/Footer";

import LandingDiv from "@/components/LandingDiv";
import MemberPage from "@/components/Member";

const Page: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <LandingDiv
        backgroundImageSrc="/pic66.jpg"
        title=" Join us to uplift others and create a supportive circle."
      />
      <MemberPage />

      <Footer />
    </div>
  );
};

export default Page;
