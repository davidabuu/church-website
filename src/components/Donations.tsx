"use client";
import Link from "next/link";
import React from "react";

const DonateSection = () => {
  return (
    <div
      id="dontations"
      data-aos="fade-in"
      className="flex flex-col py-14 items-center justify-center text-[#AA9055]  bg-gray-100"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-[#AA9055]">
        Donation for the Church
      </h2>
      <p className="md:text-3xl text-center text-2xl italic mb-8">
        &quot;Whoever is kind to the poor lends to the Lord, and he will reward
        them for what they have done. &quot;
      </p>
      <p className=" italic mb-12">Proverbs 19:17 (NIV)</p>

      <button className="text-[#AA9055] border-2 border-[#aa9055] text-2xl py-2 px-4 rounded hover:bg-[#8b7343] hover:text-white transition duration-300">
        <Link href="/donations">Donate Now!</Link>
      </button>
    </div>
  );
};

export default DonateSection;
