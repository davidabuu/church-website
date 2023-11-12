import React, { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message, Spin } from "antd";
import axios from "axios";
import { Events } from "@/app/utils";
import { useRouter } from "next/navigation";

const EventList: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

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
  }, []);

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
    <div className=" mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Event List</h2>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spin />
          <p>Loading....</p>
        </div>
      ) : (
        <Table
          style={{
            fontSize: "20px",
          }}
          dataSource={events}
          columns={columns}
          rowKey="id"
        />
      )}
    </div>
  );
};

export default EventList;
