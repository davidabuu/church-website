import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Intro: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("./pic1.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-white text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 animate__animated animate__fadeInUp">
            Welcome to Catholic Church Annunciation Parish
          </h1>
          <p className="text-sm lg:text-lg animate__animated animate__fadeInUp animate__delay-1s">
            Join our close-knit community for worship, fellowship, and service.
            Together, let&apos;s build a haven of hope and kindness.
          </p>

          <button className="mt-4 bg-[#AA9055] text-white font-bold py-2 px-4 rounded animate__animated animate__fadeInUp animate__delay-2s">
            <Link href="/member">Become A Member</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
