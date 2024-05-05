import { ClockCircleFilled, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";

interface EventCardProps {
  day: string;
  month: string;
  eventName: string;
  eventTime: string;
  eventLocation: string;
  eventDescription?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  day,
  month,
  eventName,
  eventTime,
  eventLocation,
  eventDescription,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex items-center mb-4 justify-center">
      {/* Day and Month section with consistent size */}
      <div className="flex items-center p-8 md:p-9 mx-2 md:mx-6 flex-col justify-between bg-[#aa9055] w-24 h-24">
        <p>{day}</p>
        <p>{month}</p>
      </div>

      {/* Event details section */}
      <div className="flex flex-col justify-between w-1/2 p-2 md:p-9 border border-white ml-4 lg:flex-row">
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
        {/* Button to view details */}
        <Button
          className="mt-4 w-max bg-blue-400"
          type="primary"
          onClick={showModal}
        >
          View Details
        </Button>
      </div>

      {/* Event description modal */}
      <Modal
        title="Event Details"
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {eventDescription ? (
          <p>{eventDescription}</p>
        ) : (
          <p>No description</p>
        )}
      </Modal>
    </div>
  );
};

export default EventCard;
