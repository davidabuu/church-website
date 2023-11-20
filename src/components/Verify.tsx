// VerifyingTransaction.tsx
"use client";
import React from "react";

const VerifyingTransaction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4 text-3xl font-semibold">Verifying Transaction</div>
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <p className="text-sm text-gray-600">Please wait...</p>
    </div>
  );
};

export default VerifyingTransaction;
