"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import VerifyingTransaction from "@/components/Verify";
import axios from "axios";
import { MembersRegsitration } from "../utils";
import SuccessMessage from "@/components/Success";
const Page = () => {
  const searchParams = useSearchParams();
  const [param, setParam] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const verify = async (param: string) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.BASE_URL}${MembersRegsitration.verify}?response=${param}`
      );
      console.log(res);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    const url = `${searchParams}`;
    //setParam(url)
    setParam(url.slice(7, 16));

    // You can now use the current URL
    // ...
  }, [searchParams]);
  useEffect(() => {
    if (param !== "") {
      verify(param);
    }
  }, [param]);
  return <div>{loading ? <VerifyingTransaction /> : <SuccessMessage />}</div>;
};

export default Page;
