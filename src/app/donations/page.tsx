"use client";
import React, { useEffect } from "react";
import Aos from "aos";

import DonationPage from "@/components/DonationPage";

import Footer from "@/components/Footer";

import LandingDiv from "@/components/LandingDiv";

const Page: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <LandingDiv
        backgroundImageSrc="/pic13.jpg"
        title=" How you can donate and help Annunciation Parish"
      />
      <DonationPage />

      <Footer />
    </div>
  );
};

export default Page;
