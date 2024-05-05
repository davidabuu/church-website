import React from "react";
import {
  Upload,
  Button,
  message,
  Table,
  Image,
  Row,
  Col,
  Typography,
} from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { ImageData } from "@/app/utils";

const { Title } = Typography;

interface ImageData {
  filename: string;
  url: string;
}

const AdminGalleryPage: React.FC = () => {
  const [images, setImages] = React.useState<ImageData[]>([]);
  const [uploadLoading, setUploadLoading] = React.useState<boolean>(false);
  const [deleting, setDeleting] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  // Fetch the list of images when the component mounts
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}${ImageData.getAllImages}`
        );
        if (response.status === 200) {
          setImages(response.data);
        } else {
          message.error("Failed to fetch images.");
        }
      } catch (error) {
        message.error("Error fetching images.");
      }
    };

    fetchImages();
  }, []);

  // Handle image upload
  const handleUpload = async (options: any) => {
    const { file, onSuccess, onError } = options;
    const uploadEndpoint = `${process.env.BASE_URL}${ImageData.addImage}`;

    setUploadLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(uploadEndpoint, formData);
      if (response.status === 200) {
        message.success("Image uploaded successfully!");
        window.location.reload();
        // Refresh the image list

        // Call onSuccess to complete the upload process
        onSuccess(null, file);
      } else {
        message.error("Failed to upload image.");
        onError(new Error("Failed to upload image."));
      }
    } catch (error) {
      message.error("Error uploading image.");
      onError(error);
    } finally {
      setUploadLoading(false);
    }
  };

  // Handle image deletion
  const handleDelete = async (filename: string) => {
    setDeleting((prevState) => ({ ...prevState, [filename]: true }));

    try {
      const response = await axios.delete(
        `${process.env.BASE_URL}${ImageData.deleteImage}/${filename}`
      );
      if (response.status === 200) {
        setImages((prevImages) =>
          prevImages.filter((image) => image.filename !== filename)
        );
        message.success("Image deleted successfully!");
      } else {
        message.error("Failed to delete image.");
      }
    } catch (error) {
      message.error("Error deleting image.");
    } finally {
      setDeleting((prevState) => ({ ...prevState, [filename]: false }));
    }
  };

  // Define columns for the Ant Design table
  const columns = [
    {
      title: "Image",
      dataIndex: "url",
      key: "url",
      render: (url: string) => (
        <Image
          src={`https://localhost:7007${url}`}
          width={50}
          height={50}
          alt="Image"
        />
      ),
    },
    {
      title: "Filename",
      dataIndex: "filename",
      key: "filename",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: ImageData) => (
        <Button
          onClick={() => handleDelete(record.filename)}
          type="primary"
          danger
          loading={deleting[record.filename]} // Show loading state
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Image Upload</Title>
      <Upload
        customRequest={handleUpload}
        showUploadList={false}
      >
        <Button
          icon={<UploadOutlined />}
          loading={uploadLoading}
        >
          Upload Image
        </Button>
      </Upload>
      <Table
        columns={columns}
        dataSource={images}
        className="border-2 md:w-[60%] rounded-lg"
        rowKey="filename"
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default AdminGalleryPage;
