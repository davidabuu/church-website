"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import DonationPage from "@/components/DonationPage";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Link from "next/link";

const Page: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const router = useRouter();
  return (
    <div>
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("./pic12.jpg")',
          height: "50vh",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          data-aos="fade-right"
          className="text-white text-center z-10 slide-in-right"
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 animate__animated animate__fadeInLeft">
            How you can donate and help Annunciation Parish
          </h1>
        </div>
        <Link href="/">
          <ArrowLeftOutlined className="absolute top-4 right-16 text-white hover:text-[#aa9055] cursor-pointer" />
        </Link>
      </div>
      <DonationPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Page;
