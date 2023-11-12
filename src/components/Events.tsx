
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import { Events } from "@/app/utils";

const Event = () => {
  interface EventCardProps {
    day: string;
    month: string;
    eventName: string;
    eventTime: string;
    eventLocation: string;
  }
  const [events, setEvents] = useState<EventCardProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Make an API request to get all events
        const res = await axios.get(
          `${process.env.BASE_URL}${Events.getAllEvents}`
        );

        // Set the fetched events to the state
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    // Call the fetchEvents function when the component mounts
    fetchEvents();
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div
      id="events"
      className="img3-bg text-white"
    >
      <div className="bg-[#2a4057b9] pb-16">
        <br></br>
        <h2 className="text-center text-3xl pb-6 sm:text-4xl md:text-4xl">
          Upcoming Events
        </h2>
        {events.map((event, index) => (
          <EventCard
            key={index}
            day={event.day}
            month={event.month}
            eventName={event.eventName}
            eventTime={event.eventTime}
            eventLocation={event.eventLocation}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
