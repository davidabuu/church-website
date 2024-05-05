import {
  message,
  Popconfirm,
  Button,
  Layout,
  Spin,
  Table,
  Modal,
  Tooltip,
} from "antd";
import { Header, Content } from "antd/es/layout/layout";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import EventForm from "./EventUpdateForm";
import { Events } from "@/app/utils";
import Link from "next/link";

const EventList: React.FC = () => {
  // Existing state and methods
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Add state for controlling modal visibility
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // Function to handle modal visibility
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  // Existing useEffect and handleDelete functions
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (!localStorage.getItem("token")) {
          router.push("/");
        } else {
          setLoading(true);

          // Get the token from localStorage
          const token = localStorage.getItem("token");

          // Fetch events from the server with the token in the headers
          const res = await axios.get(
            `${process.env.BASE_URL}${Events.getAllEvents}`
          );

          setEvents(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [router]);

  const handleDelete = async (eventId: number) => {
    try {
      setLoading(true);

      // Get the token from localStorage
      const token = localStorage.getItem("token");

      // Send a request to delete the event
      await axios.delete(
        `${process.env.BASE_URL}${Events.deleteSingleEvent}?id=${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            eventId: eventId,
          },
        }
      );

      // Display success message
      message.success("Event deleted successfully");

      // Update the events list
      setEvents((prevEvents) =>
        prevEvents.filter((event: any) => event.id !== eventId)
      );

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      // Display error message
      message.error("Failed to delete event");
    }
  };

  // Existing columns definition
  const columns = [
    {
      title: "Event Name",
      dataIndex: "eventName",
      key: "eventName",
      render: (text: string, record: any) => <p>{text}</p>,
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
      render: (text: string, record: any) => (
        <>
          <p>{record.day},</p>
        </>
      ),
    },
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
      render: (text: string, record: any) => (
        <>
          <p>{record.month}</p>
        </>
      ),
    },
    {
      title: "Time",
      dataIndex: "eventTime",
      key: "eventTime",
      render: (text: string, record: any) => (
        <>
          <p>{record.eventTime}</p>
        </>
      ),
    },
    {
      title: "Location",
      dataIndex: "eventLocation",
      key: "eventLocation",
    },
    {
      title: "Event Description",
      dataIndex: "eventDescription",
      key: "eventDescription",
      render: (text: string | null) => {
        if (!text) {
          // If text is null or undefined, return an empty string or a placeholder
          return "No Description Provided";
        }

        return (
          <Tooltip title={text}>
            {/* Truncate the description to a reasonable length (e.g., 20 characters) */}
            {text.length > 20 ? `${text.substring(0, 20)}...` : text}
          </Tooltip>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text: string, record: any) => (
        <Popconfirm
          title="Are you sure to delete this event?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ className: "bg-red-500" }}
        >
          <div className="">
            <Button className=" bg-red-500">Delete</Button>
          </div>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      {/* Header with navigation bar */}
      <Header className="text-white" style={{ backgroundColor: "#4096ff",  padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* App logo/name */}

          <h2 className="text-white text-2xl"  style={{ marginRight: "auto" }}>Event Manager</h2>

          {/* Menu with links */}
          <Link className="text-white "  href="/upload-image">Upload Image</Link>
        </div>
      </Header>

      {/* Content section */}
      <Content style={{ padding: "20px" }}>
        <div className="mt-8 p-6 bg-white  border-2 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Event List</h2>

          {/* Add Event Button */}
          <div className="mb-4">
            <Button
              type="primary"
              className="mb-4"
              onClick={showModal}
            >
              Add Event
            </Button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Spin />
              <p>Loading...</p>
            </div>
          ) : (
            <Table
              style={{ fontSize: "20px" }}
              dataSource={events}
              columns={columns}
              className="border-2 ] rounded-lg"
              rowKey="id"
            />
          )}
        </div>
      </Content>

      {/* Event Form Modal */}
      <Modal
        title="Add Event"
        open={isModalVisible}
        footer={null}
        onCancel={handleModalClose}
      >
        <EventForm />
      </Modal>
    </>
  );
};

export default EventList;
