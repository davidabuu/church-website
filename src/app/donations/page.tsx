"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import DonationPage from "@/components/DonationPage";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Link from "next/link";
import LandingDiv from "@/components/LandingDiv";

const Page: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const router = useRouter();
  return (
    <div>
      <LandingDiv
        backgroundImageSrc="/pic13.jpg"
        title=" How you can donate and help Annunciation Parish"
      />
      <DonationPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Page;
