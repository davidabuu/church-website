import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import { Events } from "@/app/utils";
import { Skeleton } from "antd";

const Event = () => {
  interface EventCardProps {
    day: string;
    month: string;
    eventName: string;
    eventTime: string;
    eventLocation: string;
    eventDescription: string;
  }

  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Indicate that the API request is in progress
        setLoading(true);

        // Make an API request to get all events
        const res = await axios.get(
          `${process.env.BASE_URL}${Events.getAllEvents}`
        );

        // Set the fetched events to the state
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        // Set loading to false once the request completes, whether successful or not
        setLoading(false);
      }
    };

    // Call the fetchEvents function when the component mounts
    fetchEvents();
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div id="events" className="img3-bg text-white">
      <div className="bg-[#2a4057b9] pb-16">
        <br />
        <h2 className="text-center text-3xl pb-6 sm:text-4xl md:text-4xl">
          Upcoming Events
        </h2>
        
        {/* Conditionally render the Skeleton or the events */}
        {loading ? (
          // Render Skeleton placeholders
          <div className="flex flex-col bg-white items-center justify-center">
            <Skeleton className=""  active />
            <Skeleton className="" active />
            <Skeleton className="" active />
          </div>
        ) : (
          // Render EventCard components when not loading
          events.map((event, index) => (
            <EventCard
              key={index}
              day={event.day}
              month={event.month}
              eventName={event.eventName}
              eventTime={event.eventTime}
              eventLocation={event.eventLocation}
              eventDescription={event.eventDescription}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Event;
