"use client";
import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div  id="events" className="img3-bg text-white">
      <div className="bg-[#2a4057b9] pb-8">
        <h2 className="text-center text-3xl pb-6 sm:text-4xl md:text-4xl">
          Upcoming Events
        </h2>
        <EventCard
          day="13th"
          month="JULY"
          eventName="Community Day"
          eventTime="12:00 am"
          eventLocation="Church Location"
        />
        <EventCard
          day="13th"
          month="JULY"
          eventName="Community Day"
          eventTime="12:00 am"
          eventLocation="Church Location"
        />
        <EventCard
          day="13th"
          month="JULY"
          eventName="Community Day"
          eventTime="12:00 am"
          eventLocation="Church Location"
        />
      </div>
    </div>
  );
};

export default Events;
