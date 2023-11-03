import React from "react";
import Image from "next/image"; // Import the Image component

interface PastoralTeamProps {
  url: string;
  link: string;
  title: string;
  name: string;
}

const PastoralTeamSection: React.FC<PastoralTeamProps> = ({
  url,
  link,
  title,
  name,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        
        <Image
          src={url}
          alt={title}
          className="rounded-xl"
          width={300} // Adjust the width and height as needed
          height={400}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{name}</p>
        <div className="card-actions">
          <button className="btn text-white hover:btn-primary bg-[#AA9055]">
            <a href={link}>Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastoralTeamSection;
