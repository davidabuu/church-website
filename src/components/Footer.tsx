// import {
//   FacebookOutlined,
//   InstagramOutlined,
//   MailFilled,
//   PhoneOutlined,
// } from "@ant-design/icons";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-gray-800 p-6">
//       <div className="container mx-auto text-white">
//         <h2 className="text-2xl font-bold">
//           Catholic Church of Annunciation Parish
//         </h2>
//         <br></br>
//         <p>Arab Road Kubwa, P.O.Box 286 Abuja, Nigeria.</p>
//         <br></br>
//         <p>
//           <MailFilled /> : annunciationchurchgbazango@gmail.com
//         </p>
//         <br></br>
//         <p>
//           <PhoneOutlined /> : 09139941554, 09070607266
//         </p>
//         <br></br>
//         <div className="flex items-center space-x-4">
//           <FacebookOutlined className="text-2xl" />
//           <InstagramOutlined className="text-2xl" />
//         </div>
//         <br></br>
//         <p>&copy; {new Date().getFullYear()} by CCAP</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import { InstagramFilled, MailFilled, PhoneOutlined } from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer font-bold text-[17px] p-10 bg-neutral text-neutral-content">
      <aside>
        CCAP
        <p>
          Catholic Church of Annunciation Parish
          <br />
          <br></br>
          Arab Road Kubwa, P.O.Box 286 Abuja, Nigeria.
          <br></br>
          <br />
          <PhoneOutlined /> : 09139941554, 09070607266
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/annunciationparishkubwa/"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>

          <a href="https://www.instagram.com/annunciation_kubwa/" className="cursor-pointer">
            <InstagramFilled style={{ fontSize: "30px" }} />
          </a>
          <a href={`mailto:info@annunciationparishkubwa.com`} className="cursor-pointer">
      <MailFilled style={{ fontSize: "30px" }} />
    </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
