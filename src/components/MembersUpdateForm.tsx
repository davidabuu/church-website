"use client";
import { MembersApi } from "@/app/utils";
import { Button, Select } from "antd";
import axios from "axios";
import React, { useState } from "react";

const { Option } = Select;

const MembersUpdateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    catholicAssociation: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, catholicAssociation: value });
  };
console.log(formData)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Get the token from localStorage
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${process.env.BASE_URL}${MembersApi.addMembers}` || "",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);

      if (res.status === 200 && token) {
        setLoading(false);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-6">Member Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name of Leader of Association
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="catholicAssociation"
            className="block text-sm font-medium text-gray-600"
          >
            Catholic Association
          </label>
          <select
            id="catholicAssociation"
            name="catholicAssociation"
            className="mt-1 w-full"
            placeholder="Select Catholic Association"
            value={formData.catholicAssociation}
            onChange={handleSelectChange}
            required
          >
            <option value="Catholic Men Organization (CMO)">
              Catholic Men Organization (CMO)
            </option>
            <Option value="Christian Women Organization (CWO)">
              Christian Women Organization (CWO)
            </Option>
            <Option value="Catholic Youth Organization of Nigeria (CYON)">
              Catholic Youth Organization of Nigeria (CYON)
            </Option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6">
          <Button
            htmlType="submit"
            type="primary"
            loading={loading}
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          >
            Add New Association
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MembersUpdateForm;
