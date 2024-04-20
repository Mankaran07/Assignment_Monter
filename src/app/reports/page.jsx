import React from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function reports() {
  return (
    <div className="w-screen h-screen p-4 ">
      <div className=" h-full w-4/5 mx-auto relative shadow-lg mt-4">
        <div className="relative flex w-full max-h-fit m-3">
          <h1 className="text-center w-full font-bold text-lg justify-self-center">
            Recently Genereated Reports
          </h1>
          <div className=" flex absolute right-0 pr-4 gap-2 justify-self-end">
            <button className=" border-2 border-solid border-black rounded-lg hover:border-slate-400">
              <CiFilter className="size-7 hover:border-slate-400" />
            </button>
            <button className=" justify-self-end border-2 border-solid border-black rounded-lg hover:border-slate-400">
              <IoIosClose className="size-7 hover:border-slate-400" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 ml-5 mb-6 bg-slate-200">
          <h6 className="col-span-1">Date</h6>
          <h6 className="col-span-3">Report Name</h6>
          <h6 className="col-span-1">Download</h6>
        </div>
      </div>
    </div>
  );
}

export default reports;
