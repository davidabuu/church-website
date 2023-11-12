"use client";
import { Events } from "@/app/utils";
import { Button } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EventForm: React.FC = () => {
  
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    eventName: "",
    eventTime: "",
    eventLocation: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Get the token from localStorage
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${process.env.BASE_URL}${Events.addEvent}` || "",
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Event Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="day"
            className="block text-sm font-medium text-gray-600"
          >
            Day
          </label>
          <input
            type="text"
            id="day"
            name="day"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Day e.g 12th or 1st"
            value={formData.day}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="month"
            className="block text-sm font-medium text-gray-600"
          >
            Month
          </label>
          <input
            type="text"
            id="month"
            name="month"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Month e.g December"
            value={formData.month}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventName"
            className="block text-sm font-medium text-gray-600"
          >
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventTime"
            className="block text-sm font-medium text-gray-600"
          >
            Event Time
          </label>
          <input
            type="text"
            id="eventTime"
            name="eventTime"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Time e.g 12am or 12pm"
            value={formData.eventTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventLocation"
            className="block text-sm font-medium text-gray-600"
          >
            Event Location
          </label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Location e.g Church"
            value={formData.eventLocation}
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
            Add New Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
