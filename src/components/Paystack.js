"use client";
import React from "react";
import { PaystackButton } from "react-paystack";

const Paystack = ({ email, name, phone }) => {
  const publicKey = "fghgfddfghj";
  const amount = 2000000
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Register and Pay ₦2,000",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };


  return <PaystackButton  {...componentProps} />;
};

export default Paystack;
