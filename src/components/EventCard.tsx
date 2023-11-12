import { ClockCircleFilled, EnvironmentOutlined } from "@ant-design/icons";
import React from "react";

interface EventCardProps {
  day: string;
  month: string;
  eventName: string;
  eventTime: string;
  eventLocation: string;
}

const EventCard: React.FC<EventCardProps> = ({
  day,
  month,
  eventName,
  eventTime,
  eventLocation,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center p-8 md:p-9 mx-2 md:mx-6 flex-col justify-between bg-[#aa9055]">
        <p>{day}</p>
        <p>{month}</p>
      </div>
      <div className="flex flex-col  justify-between w-[50%] p-2 md:p-9 border border-white ml-4 lg:flex-row">
        <div className="mb-4 lg:mr-4 lg:mb-0">
          <p className="text-2xl font-bold text-white">{eventName}</p>
        </div>
        <div className="flex items-center">
          <ClockCircleFilled className="text-white" />
          <p className="ml-2 text-white">{eventTime}</p>
        </div>
        <div className="flex items-center">
          <EnvironmentOutlined className="text-white" />
          <p className="ml-2 text-white">{eventLocation}</p>
        </div>
      </div>

    
    </div>
  );
};

export default EventCard;
