"use client";
import { MembersApi } from "@/app/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MemberPage = () => {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    const fetchAssociations = async () => {
      try {
        const response = await fetch(
          `${process.env.BASE_URL}${MembersApi.getAllMembers}`
        );
        const data = await response.json();
        setAssociations(data);
      } catch (error) {
        console.error("Error fetching associations:", error);
      }
    };

    fetchAssociations();
  }, []);
  console.log(associations);
  return (
    <div
      id="membership"
      data-aos="fade-in"
      className="flex flex-col py-14 items-center justify-center text-[#AA9055] bg-cover "
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-[#AA9055]">
        Become a Member
      </h2>
      <p className="md:text-3xl text-center text-2xl italic mb-8">
        &quot;Join us to help those in need and spread kindness. Your generosity
        is rewarded.&quot;
      </p>
      <p className="italic mb-8">
        To become a member, please see the organization you want to join and
        transfer <strong>N1000</strong> to the following persons
      </p>
      <div className="text-xl mb-4 w-full max-w-2xl grid grid-cols-1 gap-4">
        {associations.length > 0 ? (
          associations.map((association) => (
            <div key={association.id} className="flex mb-3 flex-col bg-white p-4 rounded-lg shadow-md">
              <p><strong>Name:</strong> {association.name}</p>
              <p><strong>Category:</strong> {association.catholicAssociation}</p>
              <p><strong>Phone Number:</strong> {association.phoneNumber}</p>
            </div>
          ))
        ) : (
          <p>Loading associations...</p>
        )}
      </div>

      <p className="italic font-bold text-xl mb-8">
        Please call your association president for more info.
      </p>
    </div>
  );
};

export default MemberPage;
