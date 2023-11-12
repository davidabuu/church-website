import ChurchSchedule from "./ChurchSchedule";

const Masses: React.FC = () => {
  return (
    <div className="img2-bg text-white">
      <div className="bg-[#2a4057b9] pb-8">
        <br></br>
        <h2 className="text-center text-3xl pb-6 sm:text-4xl md:text-4xl">
          Our Mass
        </h2>

        <ChurchSchedule />
      </div>
    </div>
  );
};

export default Masses;
