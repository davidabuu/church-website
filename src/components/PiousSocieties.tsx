import React, { useState, useEffect } from "react";
import LandingDiv from "./LandingDiv";
import { Table, Spin, Input } from "antd";

const PiousSocieties = () => {
  const [data, setData] = useState<SocietyMeetings[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<SocietyMeetings[]>([]);

  interface SocietyMeetings {
    name: string;
    meeting: string;
  }
  const societyMeetings: SocietyMeetings[] = [
    {
      name: "Catholic Men Ogranization",
      meeting: "1st Sunday after 8:30am Mass",
    },
    { name: "St. Peter Akwa Cross", meeting: "3rd Sunday of the month" },
    { name: "Legion of Mary", meeting: "Every Sunday after 6:30 Mass" },
    {
      name: "SS Peter and Paul Idoma",
      meeting: "First Sunday of the month after 6:30am   Mass",
    },
    {
      name: " St Augustin Tiv Community",
      meeting: "2nd Sunday of every month ",
    },
    { name: "Choir", meeting: "2nd Sunday of the month" },
    { name: "St. Anthony Imo/Abia", meeting: "3rd Sunday of the month" },
    {
      name: "Catholic Youth of Ogranization",
      meeting: "3rd Sunday of the month after 8:30 Mass",
    },
    {
      name: "St Gabriel All Northern State",
      meeting: "1st Sunday of every after 9:00am Mass",
    },
    { name: "St.Patrick Edo/Delta", meeting: "3rd Sunday after 9:00am mass" },
    {
      name: "St.Patrick Enugu/Anambra/Ebonyi",
      meeting: "3rd Sunday of the month ",
    },
    {
      name: "All Saints Igala Community",
      meeting: "3rd Sunday of the month, 8:30am",
    },
    { name: "Laity Counsel", meeting: "Last Sunday of the month" },
    { name: "Catholic Women Ogranization", meeting: "1st Saturday after Mass" },
    {
      name: "St Michael Yoruba Community",
      meeting: "3rd Sunday of the month after 8:30am mass",
    },
    { name: "St.Anthony of Padua", meeting: "Tuesday 5pm" },
    { name: "St.Jude", meeting: "Sat after am Mass" },
    {
      name: "Catholic Lectors Association of Nigeria ",
      meeting: "Every Saturday:4pm ",
    },
    { name: "St Vincent De Paul", meeting: "Tuesday 6pm" },
    {
      name: "Secrate Hearth of Jesus",
      meeting: "Every Thursday Adoration by 5pm",
    },
    {
      name: "Cathlolic Charismatic Renewal",
      meeting: "Wed. Prayer Meeting & Monday Bible Study",
    },
    {
      name: "All Saints Igala Cathlolic Community ",
      meeting: "Every 3rd Sunday of the month ",
    },
    {
      name: "Confratenity of our Mother of Perpetual help",
      meeting: "Saturdays 7:30am",
    },
  ];
  const columns = [
    {
      title: "Name of Association or Society",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Meeting Days",
      dataIndex: "meeting",
      key: "meeting",
    },
  ];

  useEffect(() => {
    // Simulate a 2-second loading delay

    setData(societyMeetings);
  }, []);

  useEffect(() => {
    // Filter data based on search text
    if (searchText) {
      const filtered = data.filter((item: any) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchText, data]);

  return (
    <div>
      <LandingDiv
        title="Have a view of our Pious Societies"
        backgroundImageSrc="/pic13.png"
      />
      <div className="centeredTable">
        <div>
          <br></br>
          <Input
            className="mx-4"
            placeholder="Search Societies"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: "100%", maxWidth: "300px", marginBottom: "10px" }}
          />
          <Table
            dataSource={filteredData}
            columns={columns}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default PiousSocieties;
