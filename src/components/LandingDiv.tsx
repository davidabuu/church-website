import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import Aos from "aos";

interface LandingDivProps {
  backgroundImageSrc: string;
  title: string;
}

const LandingDiv: React.FC<LandingDivProps> = ({
  backgroundImageSrc,
  title,
}) => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div
     
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("${backgroundImageSrc}")`,
        height: "50vh",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        data-aos="fade-right"
        className="text-white text-center z-10 slide-in-right"
      >
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 animate__animated animate__fadeInLeft">
          {title}
        </h1>
      </div>
      <Link href="/">
        <ArrowLeftOutlined className="absolute top-4 right-16 text-white hover:text-[#aa9055] cursor-pointer" />
      </Link>
    </div>
  );
};

export default LandingDiv;
