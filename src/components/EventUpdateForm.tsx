// components/EventUpdateForm.tsx

import React, { useState } from 'react';
// To this
interface ChurchEvent {
    name: string;
    date: string;
    time: string;
  }
interface EventUpdateFormProps {
    onEventUpdate: (event: ChurchEvent) => void;
  }

const EventUpdateForm: React.FC<EventUpdateFormProps> = ({ onEventUpdate }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    const event = { name, date, time };
    onEventUpdate(event);
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Upcoming Event</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Update Event
      </button>
    </div>
  );
};

export default EventUpdateForm;
