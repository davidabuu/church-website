import React, { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message, Spin } from "antd";
import axios from "axios";
import { Events, MembersRegsitration } from "@/app/utils";
import { useRouter } from "next/navigation";

const MemberList: React.FC = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}${MembersRegsitration.getAllMembers}`
        );

        setMembers(res.data);
        console.log(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (eventId: number) => {
    try {
      setLoading(true);

      // Get the token from localStorage
      const token = localStorage.getItem("token");

      // Send a request to delete the event
      await axios.delete(
        `${process.env.BASE_URL}${MembersRegsitration.deleteSingleMember}?id=${eventId}`,
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

      // Update the Members list
      setMembers((prevMembers) =>
        prevMembers.filter((event: any) => event.id !== eventId)
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
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text: string, record: any) => <p>{text}</p>,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      render: (text: string, record: any) => (
        <>
          <p>{record.lastName},</p>
        </>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text: string, record: any) => (
        <>
          <p>{record.phoneNumber},</p>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text: string, record: any) => (
        <>
          <p>{record.email}</p>
        </>
      ),
    },
    {
      title: "Oraganization",
      dataIndex: "organization",
      key: "organization",
      render: (text: string, record: any) => (
        <>
          <p>{record.organization}</p>
        </>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },

    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
      render: (text: boolean, record: any) => (
        <>
        {console.log(record.paid)}
          <p className=" text-green-400">{record.paid.toString()}</p>
        </>
      ),
    },
  ];

  return (
    <div className=" mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Members List</h2>
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
          dataSource={members}
          columns={columns}
          rowKey="id"
        />
      )}
    </div>
  );
};

export default MemberList;
