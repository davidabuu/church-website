import { Button } from "antd";
import React, { useState } from "react";

interface EventFormProps {
  onAddEvent: (newEvent: any) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    eventName: "",
    eventTime: "",
    eventLocation: "",
    eventDescription: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onAddEvent(formData);
    setLoading(false);
    setFormData({
      day: "",
      month: "",
      eventName: "",
      eventTime: "",
      eventLocation: "",
      eventDescription: "",
    });
  };

  return (
    <div>
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
            htmlFor="eventDescription"
            className="block text-sm font-medium text-gray-600"
          >
            Event Description (Optional)
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Event Description"
            value={formData.eventDescription}
            onChange={handleChange}
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
