"use client";
import PiousSocieties from "@/components/PiousSocieties";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Pious Societies | Annunctiation Parish",
  description: "",
};
const Page = () => {
  return (
    <div>
      <PiousSocieties />
    </div>
  );
};

export default Page;
