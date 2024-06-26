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
import { Events, MembersApi } from "@/app/utils";
import Link from "next/link";
import MembersUpdateForm from "./MembersUpdateForm";

const MemberTable: React.FC = () => {
  // Existing state and methods
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const router = useRouter();

  // Add state for controlling modal visibility

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
          const token = localStorage.getItem("token");
          // Get the token from localStorage
          const res = await axios.get(
            `${process.env.BASE_URL}${MembersApi.getAllMembers}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setMembers(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [router]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Catholic Association",
      dataIndex: "catholicAssociation",
      key: "catholicAssociation",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: any) => (
        <Button onClick={showModal}>Edit</Button>
      ),
    },
  ];

  return (
    <>
      {/* Header with navigation bar */}
      <Header
        className="text-white"
        style={{ backgroundColor: "#4096ff", padding: "0 20px" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* App logo/name */}

          <h2
            className="text-white text-2xl"
            style={{ marginRight: "auto" }}
          >
            Event Manager
          </h2>
          <Link
            className="text-white "
            href="/members-update"
          >
            Members Update
          </Link>

          <Link
            className="text-white "
            href="/upload-image"
          >
            Upload Image
          </Link>
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
              dataSource={members}
              columns={columns}
              className="border-2 ] rounded-lg"
              rowKey="id"
            />
          )}
        </div>
      </Content>

      {/* Event Form Modal */}
      <Modal
        title="Add Mmeber"
        open={isModalVisible}
        footer={null}
        onCancel={handleModalClose}
      >
        <MembersUpdateForm />
      </Modal>
    </>
  );
};

export default MemberTable;
