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
        <h2 className="text-2xl font-bold">
          Catholic Church of Annunciation Parish
        </h2>
        <br></br>
        <p>Arab Road Kubwa, P.O.Box 286 Abuja, Nigeria.</p>
        <br></br>
        <p>
          <MailFilled /> : annunciationchurchgbazango@gmail.com
        </p>
        <br></br>
        <p>
          <PhoneOutlined /> : 09139941554, 09070607266
        </p>
        <br></br>
        <div className="flex items-center space-x-4">
          <FacebookOutlined className="text-2xl" />
          <InstagramOutlined className="text-2xl" />
        </div>
        <br></br>
        <p>&copy; {new Date().getFullYear()} by CCAP</p>
      </div>
    </div>
  );
};

export default Footer;
