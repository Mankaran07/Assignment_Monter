import React from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

function ReportCard({ id, timestamp, name }) {
  const dateObj = new Date(timestamp);

  const date = `${dateObj.getDate() < 10 ? "0" : ""}${dateObj.getDate()}.${
    dateObj.getMonth() + 1 < 10 ? "0" : ""
  }${dateObj.getMonth() + 1}.${dateObj.getFullYear()}`;
  const time = `${dateObj.getHours() % 12}:${dateObj.getMinutes()} ${
    dateObj.getHours() >= 12 ? "PM" : "AM"
  }`;

  return (
    <div className="grid grid-cols-5 ml-5 mb-4">
      <div className="col-span-1">
        <h5>{date}</h5>
        <span>{time}</span>
      </div>
      <p className="col-span-3">{name}</p>
      <HiOutlineDocumentArrowDown
        className="col-span-1 size-7 cursor-pointer hover:text-slate-600"
        onClick={() => {
          alert("The file has started downloading!!!");
        }}
      />
    </div>
  );
}

export default ReportCard;
