"use client";
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import ReportCard from "@/components/ReportCard";
import PaginationBar from "@/components/PaginationBar";
import { data } from "./data";
import { useRouter } from "next/navigation";

function Reports({ params }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(params.page);
  const [count, setCount] = useState(10);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, [count]);

  function getReports() {
    const newArr = [];
    for (let i = 0; i < count; i++) {
      newArr.push(data[i]);
    }
    setReports(newArr);
  }
  return (
    <div className="w-full h-full p-4 ">
      <div className=" h-screen w-full mx-auto relative my-4 ">
        <div className="relative flex w-full max-h-fit m-3">
          <h1 className="text-center w-full font-bold text-lg justify-self-center">
            Recently Genereated Reports
          </h1>
          <div className=" flex absolute right-0 pr-4 gap-2 justify-self-end">
            <button className=" border-2 border-solid border-black rounded-lg hover:border-slate-400">
              <CiFilter className="size-7 hover:border-slate-400" />
            </button>
            <button
              className=" justify-self-end border-2 border-solid border-black rounded-lg hover:border-slate-400"
              onClick={() => {
                router.replace(`/`);
              }}
            >
              <IoIosClose className="size-7 hover:border-slate-400" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 ml-5 mb-6 bg-slate-200">
          <h6 className="col-span-1">Date</h6>
          <h6 className="col-span-3">Report Name</h6>
          <h6 className="col-span-1">Download</h6>
        </div>
        <div>
          {reports.map((data) => (
            <ReportCard
              key={data.id}
              id={data.id}
              name={data.name}
              timestamp={data.timestamp}
            />
          ))}
        </div>
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalPages={5}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default Reports;
