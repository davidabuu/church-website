"use client";

import { Button, Spin, Table, Modal, Form, Input, Select, message } from "antd";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MembersApi } from "@/app/utils";
import MembersUpdateForm from "./MembersUpdateForm";

interface Member {
  id: number;
  name: string;
  catholicAssociation: string;
  phoneNumber: string;
}

const MemberTable: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentMember, setCurrentMember] = useState<Member | null>(null);
  const router = useRouter();

  const showModal = (member?: Member) => {
    if (member) {
      setCurrentMember(member);
    } else {
      setCurrentMember(null);
    }
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        if (!localStorage.getItem("token")) {
          router.push("/");
        } else {
          setLoading(true);
          const token = localStorage.getItem("token");
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

    fetchMembers();
  }, [router]);

  const handleUpdate = async (values: Member) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.BASE_URL}${MembersApi.updateMembers}/${currentMember?.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      message.success("Member updated successfully");
      setIsModalVisible(false);
      setMembers((prevMembers) =>
        prevMembers.map((member) =>
          member.id === values.id ? { ...member, ...values } : member
        )
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      message.error("Failed to update member");
    }
  };

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
      render: (text: string, record: Member) => (
        <Button onClick={() => showModal(record)}>Edit</Button>
      ),
    },
  ];

  return (
    <>
      <Content style={{ padding: "20px" }}>
        <div className="p-6 bg-white border-2 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Church Associations</h2>
          <div className="mb-4 flex justify-end">
            <Button
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => showModal()}
            >
              Add Association
            </Button>
          </div>
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Spin />
              <p>Loading...</p>
            </div>
          ) : (
            <Table
              dataSource={members}
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
        title={currentMember ? "Edit Member" : "Add Member"}
        visible={isModalVisible}
        footer={null}
        onCancel={handleModalClose}
      >
        {currentMember ? (
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name of Leader of Association
              </label>

              <input
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="catholicAssociation"
                className="block text-sm font-medium text-gray-600"
              >
                Catholic Association
              </label>

              <select
                className="mt-1 p-2 border-[2px] border-[#f4f4f4] outline-none  w-full"
                placeholder="Select Catholic Association"
              >
                <option value="Catholic Men Organization (CMO)">
                  Catholic Men Organization (CMO)
                </option>
                <option value="Christian Women Organization (CWO)">
                  Christian Women Organization (CWO)
                </option>
                <option value="Catholic Youth Organization of Nigeria (CYON)">
                  Catholic Youth Organization of Nigeria (CYON)
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>

              <input
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Phone Number"
              />
            </div>
            <div className="mt-6">
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              >
                Update Member
              </Button>
            </div>
          </form>
        ) : (
          <MembersUpdateForm />
        )}
      </Modal>
    </>
  );
};

export default MemberTable;
