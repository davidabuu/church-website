"use client";
import { useState } from "react";
import axios from "axios"; // Use axios or your preferred HTTP client
import Paystack from "./Paystack";
import { MembersRegsitration } from "@/app/utils";
import { redirect, useRouter } from "next/navigation";
import { Button } from "antd";
const MemberForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    sex: "",
    organization: "",
    phoneNumber: "",
    paid: false,
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.BASE_URL}${MembersRegsitration.addNewMember}` || "",
        formData
      );
      if (res.data.data.status) {
        console.log(res.data.data.data.authorizationUrl)
        router.push(res.data.data.data.authorizationUrl);
        //window.location.href = (res.data.data.authorizationUrl)
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Member Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="sex"
              className="block text-sm font-medium text-gray-700"
            >
              Sex
            </label>
            <select
              name="sex"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-700"
            >
              Organization
            </label>
            <select
              id="organization"
              name="organization"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.organization}
              onChange={handleChange}
              required
            >
              <option value="">Select Organization</option>
              <option value="CMO">Catholic Men Organization (CMO)</option>
              <option value="CWO">Christian Women Organization (CWO)</option>
              <option value="CYON">
                Catholic Youth Organization of Nigeria (CYON)
              </option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <Button
              loading={loading}
              htmlType="submit"
              className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Register and Pay N2,000
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
