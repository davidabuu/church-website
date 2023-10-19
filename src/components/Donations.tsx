import React from "react";

const DonateSection = () => {
  return (
    <div
      data-aos="fade-in"
      className="flex flex-col pt-8 pb-8 items-center justify-center text-[#AA9055]  bg-gray-100"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-[#AA9055]">
        Donation for the Church
      </h2>
      <p className="md:text-3xl text-center text-2xl italic mb-8">
        "Whoever is kind to the poor lends to the Lord, and he will reward them
        for what they have done."
      </p>
      <p className=" italic mb-12">Proverbs 19:17 (NIV)</p>

      <button className="text-[#AA9055] border-2 border-[#aa9055] text-2xl py-2 px-4 rounded hover:bg-[#8b7343] hover:text-white transition duration-300">
        Donate Now!
      </button>
    </div>
  );
};

export default DonateSection;
