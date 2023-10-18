import Image from "next/image";
import React from "react";
import Slide from "./Slide";

const About = () => {
  return (
    <div
      id="about"
      data-aos="fade-right"
      className="mt-4 mb-4 justify-evenly items-center flex flex-col sm:flex-row"
    >
      <div className="">
        <h2 className="text-3xl  text-[#AA9055] font-bold mb-4 ">
          About Us
        </h2>
        <Slide />
      </div>
      <br></br>
      <div className="w-full sm:w-[50%] px-4 sm:px-8">
        <p className="text-black mb-4">
          Annunciation Parish in Kubwa, Abuja, is a vibrant Catholic community
          devoted to spiritual growth and community service. Join us for Mass,
          sacraments, and educational programs, as we embody the values of love
          and compassion through active outreach. All are welcome to be part of
          our mission of faith, fellowship, and service.
        </p>
      </div>
    </div>
  );
};

export default About;
