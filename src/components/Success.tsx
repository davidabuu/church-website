// SuccessMessage.tsx

"use client";
import React, { useEffect } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const SuccessMessage = () => {
  useEffect(() => {
    // Automatically close the success message after 3 seconds (adjust as needed)
    const timer = setTimeout(() => {}, 3000);

    return () => clearTimeout(timer); // Clear the timeout on unmount or closure
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-md flex items-center">
        <CheckCircleOutlined className="text-green-500 text-3xl mr-3" />
        <p className="text-green-600 text-lg font-semibold">
          Success! You are now a registered Member{" "}
      <Link href='/members-list'>
      <b className="cursor-pointer">Check?</b> 
      </Link>
        </p>
        
      </div>
    </div>
  );
};

export default SuccessMessage;
