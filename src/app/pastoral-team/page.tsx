"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import PastoralTeamSection from "@/components/PastoralTeamSection";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";


const Page: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);
 
  return (
    <div>
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("./pic7.jpg")',
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
            PASTORIAL TEAM
          </h1>
          <p className="text-sm lg:text-lg">
            Have a quick glance at the pastoral team
          </p>
        </div>
      </div>
     <Link href='/'>
     <ArrowLeftOutlined
          className="absolute top-4 right-16 text-white hover:text-[#aa9055] cursor-pointer"
         
        />
     </Link>
      <div className="flex flex-col mx-4 md:mx-0 items-center justify-around md:flex-row">
        <PastoralTeamSection
          url="/pic9.jpg"
          link="https://en.wikipedia.org/wiki/Ignatius_Ayau_Kaigama"
          title="His Grace, Most Rev. (Dr.)"
          name="Ignatius Ayau Kaigama"
        />
        <br></br>
        <PastoralTeamSection
          url="/pic10.jpg"
          link="https://catholicarchdioceseofabuja.org/team-member/most-rev-dr-anselm-umoren-msp/"
          title="Auxiliary Bishop"
          name="Anselm Umoren, MSP"
        />
        <br></br>
        <PastoralTeamSection
          url="/pic8.jpg"
          link="ggg"
          title="Rev. Fr"
          name="Edache Gabriel"
        />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Page;
