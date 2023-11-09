'use client'
import React, { useState } from "react";

const EventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    eventName: "",
    eventTime: "",
    eventLocation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here, using formData
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Event Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="day" className="block text-sm font-medium text-gray-600">
            Day
          </label>
          <input
            type="text"
            id="day"
            name="day"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Day"
            value={formData.day}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="month" className="block text-sm font-medium text-gray-600">
            Month
          </label>
          <input
            type="text"
            id="month"
            name="month"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Month"
            value={formData.month}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-600">
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
          <label htmlFor="eventTime" className="block text-sm font-medium text-gray-600">
            Event Time
          </label>
          <input
            type="time"
            id="eventTime"
            name="eventTime"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Time"
            value={formData.eventTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-600">
            Event Location
          </label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Location"
            value={formData.eventLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          >
            Add New Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
