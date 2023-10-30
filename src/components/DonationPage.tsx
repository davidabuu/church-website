import React from "react";

const DonationPage: React.FC = () => {
  return (
    <div className="container mx-auto font-bold p-4">
      <h1 className="text-3xl font-semibold text-[#aa9055] mb-4">
        Church of Annunciation Parish Account Details
      </h1>
      <div className="bg-gray-100 p-4 my-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#aa9055] mb-2">Main Account</h2>
        <p>Zenith Bank plc. 10 14 31 88 40</p>

        <h2 className="text-2xl font-semibold text-[#aa9055] mt-4 mb-2">Platinum Mortgage Bank</h2>
        <p>00 00 23 07 39</p>

        <h2 className="text-2xl font-semibold text-[#aa9055] mt-4 mb-2">Project Account</h2>
        <p>Zenith Bank : 10 17 39 60 32</p>
      </div>
    </div>
  );
};

export default DonationPage;
