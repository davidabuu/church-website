"use client";
import Link from "next/link";
import React from "react";

const MemberPage = () => {
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
        `&quot;Join us to help those in need and spread kindness. Your
        generosity is rewarded.`&quot;
      </p>
      <p className="italic mb-8">
        To become a member, please see the organization you want to join and
        transfer <strong>N1000</strong> to the following account:
      </p>
      <div className="text-xl mb-4">
        <p>1. Catholic Men Organization (CMO)</p>
        <p>2. Christian Women Organization (CWO)</p>
        <p>3. Catholic Youth Organization of Nigeria (CYON)</p>
      </div>
      <p className="text-xl mb-4">
        Bank: XYZ Bank <br />
        Account Number: 123456789 <br />
        Account Name: Church Membership Fund
      </p>
      <p className="italic mb-8">
        After payment, please call <strong>(123) 456-7890</strong> for
        verification.
      </p>
    </div>
  );
};

export default MemberPage;
