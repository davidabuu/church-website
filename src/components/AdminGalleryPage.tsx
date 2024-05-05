import React from "react";
import { Upload, Button, message, Table, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { ImageData } from "@/app/utils";

interface ImageData {
  filename: string;
  url: string;
}

const AdminGalleryPage: React.FC = () => {
  const [images, setImages] = React.useState<ImageData[]>([]);

  // Fetch the list of images when the component mounts
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/api/images`);
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
    const uploadEndpoint = `${process.env.BASE_URL}/api/images/upload`;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(uploadEndpoint, formData);
      if (response.status === 200) {
        message.success("Image uploaded successfully!");

        // Refresh the image list
        setImages((prevImages) => [
          ...prevImages,
          { filename: response.data, url: `${process.env.BASE_URL}/api/images/${response.data}` },
        ]);

        // Call onSuccess to complete the upload process
        onSuccess(null, file);
      } else {
        message.error("Failed to upload image.");
        onError(new Error("Failed to upload image."));
      }
    } catch (error) {
      message.error("Error uploading image.");
      onError(error);
    }
  };

  // Handle image deletion
  const handleDelete = async (filename: string) => {
    try {
      const response = await axios.delete(`${process.env.BASE_URL}/api/images/${filename}`);
      if (response.status === 200) {
        setImages((prevImages) => prevImages.filter((image) => image.filename !== filename));
        message.success("Image deleted successfully!");
      } else {
        message.error("Failed to delete image.");
      }
    } catch (error) {
      message.error("Error deleting image.");
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
          src={url}
          width={100}
          height={100}
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
        <Button onClick={() => handleDelete(record.filename)} type="primary" danger>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin: Upload Image</h2>
      <Upload
        customRequest={handleUpload}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Upload Image</Button>
      </Upload>

      <h2>Image Gallery</h2>
      <Table columns={columns} dataSource={images} rowKey="filename" />
    </div>
  );
};

export default AdminGalleryPage;
