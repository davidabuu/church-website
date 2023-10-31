import Footer from "@/components/Footer";
import LandingDiv from "@/components/LandingDiv";
import Subscribe from "@/components/Subscribe";
import React from "react";

const Page = () => {
  const members: string[] = [
    "Engr. Ezebuike Anene",
    "Barr.Dim Chidiebere",
    "Otunmba Folarin Smauel",
    "Cheif Enwerem Charles",
    "Lady Amba Maria",
    "Mrs. Igwebuike Sylverline",
    "Mr. Alegieuno Sandy",
    "Dr. Felix Mandy",
    "Mrs Nancy Calistus",
    "Mrs Amuta",
    "Mr Nwaku Chidera",
    "Mr Odoh Raph",
    "Mr Julius Ihegwuagu",
    "Chief Barth Ezeilo",
    "Chief Matrins Ifejimalu",
    "Mr. Nnaemeka Udeh",
    "Mr. Nanamdi Ezeche",
  ];

  return (
    <div>
      <LandingDiv
        backgroundImageSrc="/pic12.jpg"
        title="Have a Glance of the Pastoral Members"
      />
      <div className="bg-white p-4">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#aa9055] text-center mb-4">
            Pastoral Members
          </h2>
          <ul className="grid font-bold grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, index) => (
              <li
                key={index}
                className="p-2 border border-gray-200 rounded shadow-md"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br></br>
      <Subscribe />

      <Footer />
    </div>
  );
};

export default Page;
