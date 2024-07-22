import React, { useState } from "react";
import AdminGalleryPage from "./AdminGalleryPage";
import EventList from "./EventList";

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("Events");

  const renderComponent = () => {
    switch (activeComponent) {
    
      case "ImageUpload":
        return <AdminGalleryPage />;
      case "Events":
        return <EventList />;
      default:
        return <EventList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Church Dashboard</h1>
      </header>
      <nav className="flex justify-around bg-blue-500 text-white p-2">
        <button
          onClick={() => setActiveComponent("Events")}
          className="hover:bg-blue-700 p-2 rounded"
        >
          Events
        </button>
        <button
          onClick={() => setActiveComponent("ChurchAssociations")}
          className="hover:bg-blue-700 p-2 rounded"
        >
          Church Associations
        </button>
        <button
          onClick={() => setActiveComponent("ImageUpload")}
          className="hover:bg-blue-700 p-2 rounded"
        >
          Image Upload
        </button>
      </nav>
      <main className="p-4">{renderComponent()}</main>
    </div>
  );
};

export default Dashboard;
