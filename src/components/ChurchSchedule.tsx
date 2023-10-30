import { ClockCircleOutlined } from "@ant-design/icons";

const ChurchSchedule = () => {
  const schedule = {
    sundayMasses: ["6:30am", "8:30am", "6:00pm"],
    sundayBenediction: "5:30pm",
    weekdayMasses: "6am",
    fridayAdoration: "5:30pm",
    saturdayConfession: "7:30am",
    marriageCourse: ["Thursday 7pm", "Sunday 6pm"],
    catechismClass: "4pm",
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="border-white border-2 p-4 flex  md:justify-around flex-col md:flex-row md:items-center">
        <h2 className="text-2xl font-semibold  mb-2">Sunday Masses</h2>
        <ul className="flex  md:flex-row  items-center">
          <ClockCircleOutlined />
          {schedule.sundayMasses.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </section>
      <br></br>
      <section className="border-white border-2 p-4 flex  md:justify-around flex-col md:flex-row md:items-center">
        <h2 className="text-2xl font-semibold  mb-2">WeekDay Masses</h2>
        <ul className="flex  md:flex-row items-center">
          <ClockCircleOutlined />

          <li>Mon, Wed, Fri 6am</li>
          <li>Tue, Thur, 6am</li>
        </ul>
      </section>
      <br></br>
      <section className="border-white border-2 p-4 flex  md:justify-around flex-col md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold  mb-2">Adoration</h2>
          <ul className="flex  md:flex-row items-center">
            <ClockCircleOutlined />

            <li>Friday 5:30pm</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold  mb-2">Confessions</h2>
          <ul className="flex  md:flex-row items-center">
            <ClockCircleOutlined />

            <li>Satuday 7:30am</li>
          </ul>
        </div>
      </section>
      <br></br>
      <section className="border-white border-2 p-4 flex  md:justify-around flex-col md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold  mb-2">Marriage Course</h2>
          <ul className="flex  md:flex-row items-center">
            <ClockCircleOutlined />

            <li>Thursday 7pm</li>
            <li>Sunday 6pm</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold  mb-2">Catechism Classes</h2>
          <ul className="flex  md:flex-row items-center">
            <ClockCircleOutlined />

            <li>4pm</li>
          </ul>
        </div>
      </section>
      <br></br>
      <section className="border-white border-2 p-4 flex  md:justify-around flex-col md:flex-row md:items-center">
        <h2 className="text-2xl font-semibold  mb-2">Baptism</h2>
        <ul className="flex  md:flex-row items-center">
         

          <li>Last Sat of the month</li>
        </ul>
      </section>
    </div>
  );
};

export default ChurchSchedule;
