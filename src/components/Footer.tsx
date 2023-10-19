import {
    FacebookOutlined,
    InstagramOutlined,
    MailFilled,
    PhoneOutlined,
  } from "@ant-design/icons";
  import React from "react";
  
  const Footer = () => {
    return (
      <div className="bg-gray-800 p-6">
        <div className="container mx-auto text-white">
          <h2 className="text-2xl font-bold">Catholic Church of Annunciation Parish</h2>
          <p>Arab Road Kubwa, P.O.Box 286 Abuja, Nigeria.</p>
          <p>
            <MailFilled /> : annunciationchurchgbazango@gmail.com
          </p>
          <p>
            <PhoneOutlined /> : 09139941554, 09070607266
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <FacebookOutlined className="text-2xl" />
            <InstagramOutlined className="text-2xl" />
          </div>
          <p>&copy; {new Date().getFullYear()} by CCAP</p>
        </div>
      </div>
    );
  };
  
  export default Footer
  