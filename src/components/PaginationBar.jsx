"use client";
import React from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

function PaginationBar({ currentPage, totalPages, count }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const router = useRouter();

  return (
    <div className="w-full relative bottom-0 mb-5">
      <div className="flex items-center justify-center gap-10 mx-auto">
        <div className="flex">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              if (currentPage != 1) {
                router.replace(`/reports/${currentPage - 1}-${count}`);
              }
            }}
          >
            <AiOutlineVerticalRight />
            <span>Prev</span>
          </div>
          {pageNumbers.map((page) => (
            <button
              className={`h-10 w-10 rounded-md text-slate-400 border border-slate-400 ml-3 duration-300 ${
                currentPage == page ? "bg-[#f05225] text-white" : "bg-white"
              }`}
              key={page}
              onClick={() => {
                router.replace(`/reports/${page}-${count}`);
              }}
            >
              {page}
            </button>
          ))}
          <div
            className="flex items-center gap-3 ml-3 cursor-pointer"
            onClick={() => {
              if (currentPage != totalPages) {
                router.replace(
                  `/reports/${parseInt(currentPage) + 1}-${count}`
                );
              }
            }}
          >
            <span>Next</span>
            <AiOutlineVerticalLeft />
          </div>
        </div>
        <div>
          <span>Rows per page</span>
          <select
            onChange={(event) => {
              const { name, value } = event.target;
              router.replace(`/reports/1-${value}`);
            }}
            value={count}
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PaginationBar;
