"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-4 font-serif h-[90vh]">
      <h1 className="text-center font-bold text-2xl">
        Click the button below to see the reports
      </h1>
      <button
        className="bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded w-fit"
        onClick={() => {
          router.replace(`/reports/1-10`);
        }}
      >
        Click Here
      </button>
    </div>
  );
}
