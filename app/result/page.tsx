<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <a
        href="/result.pdf"
        download
        className="absolute top-4 right-4 px-4 py-2 bg-[#2aa6b3] text-white rounded hover:bg-[#1a8a99] transition"
      >
        Download
      </a>
      <Image src="/result1.jpg" alt="result" width={600} height={600} />
    </div>
  );
};

export default page;
=======
export default function page() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-[900px] p-4 sm:p-8 border border-black text-[12px] sm:text-[13px] text-black font-serif">
        {/* University Header */}
        <div className="text-center">
          <h1 className="text-[16px] sm:text-[20px] font-bold tracking-wide">
            SAVITRIBAI PHULE PUNE UNIVERSITY
          </h1>
          <p className="text-[12px]">(Formerly University of Pune)</p>
          <p className="text-[12px]">GANESHKHIND, PUNE 411007</p>
        </div>

        <hr className="border-black my-3" />

        {/* Top Info Section */}
        <div className="space-y-1">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
            <p>
              <span className="font-semibold">Branch/Course:</span> T.E (2019
              Credit Pattern) Winter Session 2025
            </p>
            <p>
              <span className="font-semibold">Seat No:</span> T40080315
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
            <p>
              <span className="font-semibold">Center:</span> [CEGP0157/20]
            </p>
            <p>
              <span className="font-semibold">PRN No:</span> 723324026
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
            <p>
              <span className="font-semibold">Student Name:</span> SHREYASH
              RAMDAS WALUNJ
            </p>
            <p>
              <span className="font-semibold">Mother Name:</span> SHALINI RAMDAS
              WALUNJ
            </p>
          </div>

          <div>
            <span className="font-semibold">College Name:</span> AJEENKYA DY
            PATIL SCHOOL OF ENGINEERING, PUNE
          </div>

          <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 mt-2">
            <p>
              <span className="font-semibold">Sub:</span> MECHANICAL
            </p>
            <p>
              <span className="font-semibold">Sem:</span> 5
            </p>
          </div>
        </div>

        {/* Marks Table */}
        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse border border-black text-[12px]">
            <thead>
              <tr className="border border-black bg-gray-100">
                <th className="border border-black px-2 py-1">SubCode</th>
                <th className="border border-black px-2 py-1 text-left">
                  Subject Name
                </th>
                <th className="border border-black px-2 py-1">Cr</th>
                <th className="border border-black px-2 py-1">Grd</th>
                <th className="border border-black px-2 py-1">GP</th>
                <th className="border border-black px-2 py-1">CrPt</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["302041", "NUMERICAL & STATISTICAL METHODS", 3, "P", 4, 12],
                ["302042", "HEAT & MASS TRANSFER", 3, "A", 8, 24],
                ["302043", "DESIGN OF MACHINE ELEMENTS", 3, "A+", 9, 27],
                ["302044", "MECHATRONICS", 3, "C", 5, 15],
                ["302045", "MACHINING SCIENCE & TECHNOLOGY", 3, "P", 4, 12],
                ["302046", "DIGITAL MANUFACTURING LABORATORY", 1, "B", 6, 6],
                ["302047", "SKILL DEVELOPMENT", 1, "O", 10, 10],
                ["302048", "ENTREPRENEURSHIP & IP STRATEGY", 1, "A", 8, 8],
              ].map((row, index) => (
                <tr key={index} className="border border-black">
                  <td className="border border-black px-2 py-1 text-center">
                    {row[0]}
                  </td>
                  <td className="border border-black px-2 py-1">{row[1]}</td>
                  <td className="border border-black px-2 py-1 text-center">
                    {row[2]}
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    {row[3]}
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    {row[4]}
                  </td>
                  <td className="border border-black px-2 py-1 text-center">
                    {row[5]}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>

        {/* GPA Section */}
        <div className="mt-6 text-[13px]">
          <p className="font-semibold">
            Fifth Semester SGPA: ---- Credits Earned/Total: 15/21 &nbsp;&nbsp;
            Total Credit Points: 91
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-[12px]">
          <p>
            <span className="font-semibold">RESULT DATE:</span> 15 February 2026
          </p>

          <p className="mt-3 text-[11px]">
            The results published online are for immediate information only.
            These cannot be treated as original statement of marks. Please
            verify the information from original statement of marks issued by
            the Savitribai Phule Pune University separately.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
