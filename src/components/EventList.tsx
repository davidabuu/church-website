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
import { useState, useEffect } from "react";

import { getEvents, addEvent, deleteEvent } from "./eventsApi";
import EventForm from "./EventUpdateForm";

const { Content } = Layout;

const EventList: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const fetchEvents = async () => {
    setLoading(true);
    const events = await getEvents();
    console.log(events)
    setEvents(events);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = async (newEvent: any) => {
    const addedEvent = await addEvent(newEvent);
    setEvents((prevEvents) => [...prevEvents, addedEvent]);
    message.success("Event added successfully");
    setIsModalVisible(false);
  };

  const handleDelete = async (eventId: number) => {
    await deleteEvent(eventId);
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    message.success("Event deleted successfully");
  };

  const columns = [
    {
      title: "Event Name",
      dataIndex: "eventName",
      key: "eventName",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Time",
      dataIndex: "eventTime",
      key: "eventTime",
      render: (text: string) => <p>{text}</p>,
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
          return "No Description Provided";
        }
        return (
          <Tooltip title={text}>
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
          <Button className="text-white bg-red-500">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Content className="p-4 sm:p-6 bg-gray-100 min-h-screen">
        <div className="bg-white border-2 rounded-md shadow-lg p-4 sm:p-6">
          <h2 className="text-2xl font-semibold mb-6">Event List</h2>

          <div className="mb-4 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white"
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
              dataSource={events}
              columns={columns}
              className="border-2 rounded-lg"
              rowKey="id"
              pagination={{ pageSize: 5 }}
              scroll={{ x: "max-content" }}
            />
          )}
        </div>
      </Content>

      <Modal
        title="Add Event"
        open={isModalVisible}
        footer={null}
        onCancel={handleModalClose}
        className="w-full max-w-2xl"
      >
        <EventForm onAddEvent={handleAddEvent} />
      </Modal>
    </>
  );
};

export default EventList;
