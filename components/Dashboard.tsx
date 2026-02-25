"use client";
import { useState, useMemo } from "react";
import data from "../result.json";
import Image from "next/image";
<<<<<<< HEAD
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 30;
const RESULT_PDF_PATH = "/result.pdf";
const VALID_SEAT_NO = "T40088415";
const VALID_MOTHER_NAME = "SHAILA RAMDAS WALUNJ";

=======
import { House, User } from "lucide-react";

const ITEMS_PER_PAGE = 30;
const CAPTCHA_LENGTH = 6;
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f3f4f6;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #2aa6b3;
    border-radius: 5px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1a8a99;
  }

  @keyframes scroll-text {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .running-text {
    animation: scroll-text 15s linear infinite;
    white-space: nowrap;
  }
`;

export default function Dashboard() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedSession, setSelectedSession] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [seatNo, setSeatNo] = useState("");
  const [motherName, setMotherName] = useState("");
  const [captchaText, setCaptchaText] = useState("");
<<<<<<< HEAD
  const [captchaCode, setCaptchaCode] = useState("41682");
=======
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
  const [selectedCourse, setSelectedCourse] = useState("");
  const [showResultCard, setShowResultCard] = useState(false);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: CAPTCHA_LENGTH }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length)),
    ).join("");
  };

  // Parse the data: skip the header row and convert C values to readable dates
  const rows = useMemo(() => {
    return data.slice(1).map((item: any) => ({
      id: item.A,
      course: item.B,
      resultDate: convertExcelDate(parseInt(item.C)),
    }));
  }, []);

  // Filter rows based on session and search term
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearch = row.course
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [rows, searchTerm]);

  // Convert Excel serial date to readable format
  function convertExcelDate(excelDate: number) {
    const date = new Date((excelDate - 25569) * 86400 * 1000);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  // Calculate pagination based on filtered rows
  const totalPages = Math.ceil(filteredRows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRows = filteredRows.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset to page 1 when search/filter changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSessionChange = (value: string) => {
    setSelectedSession(value);
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const openResultPopup = (courseName: string) => {
    setSelectedCourse(courseName);
    setSeatNo("");
    setMotherName("");
    setCaptchaText("");
<<<<<<< HEAD
    setShowResultCard(false);
    setCaptchaCode(generateCaptcha());
=======
    setGeneratedCaptcha(generateCaptcha());
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
    setIsPopupOpen(true);
  };

  const closeResultPopup = () => {
    setIsPopupOpen(false);
    setShowResultCard(false);
  };

  const generateCaptcha = () =>
    Math.floor(10000 + Math.random() * 90000).toString();

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setCaptchaText("");
  };

  const refreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
    setCaptchaText("");
  };

  const handleCheckResult = () => {
    if (!seatNo || !motherName || !captchaText) {
      alert("Please fill all fields");
      return;
    }
<<<<<<< HEAD

    const normalizedSeatNo = seatNo.trim().toUpperCase();
    const normalizedMotherName = motherName.trim().toUpperCase();
    if (
      normalizedSeatNo !== VALID_SEAT_NO ||
      normalizedMotherName !== VALID_MOTHER_NAME
    ) {
      alert("Invalid seat number or mother name");
      return;
    }

    if (captchaText.trim() !== captchaCode) {
      alert("Invalid captcha text");
      refreshCaptcha();
      return;
    }

    setIsPopupOpen(false);
    router.push("/result");
=======
    if (captchaText.trim().toUpperCase() !== generatedCaptcha) {
      alert("Invalid captcha. Please try again.");
      refreshCaptcha();
      return;
    }
    // Add your result checking logic here
    console.log("Checking result for:", { seatNo, motherName, captchaText });
    alert("Result checked for Seat No: " + seatNo);
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
  };

  return (
    <>
      <style>{scrollbarStyles}</style>
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black/30 md:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 bg-[#2f3e46] text-white transition-all duration-300 overflow-hidden md:static md:inset-auto ${
            sidebarOpen
              ? "translate-x-0 w-60"
              : "-translate-x-full w-60 md:w-20 md:translate-x-0"
          }`}
        >
          <div className="h-14 flex items-center border-b border-gray-600 font-semibold bg-[#2f3e46] text-white gap-3 px-3">
            <Image
              src="/image.png"
              alt="SPPU Logo"
              width={40}
              height={40}
              className="h-10 w-12 rounded-full object-cover shrink-0"
            />
            <div className="flex-1 overflow-hidden h-full flex items-center">
              <div className="running-text whitespace-nowrap">
                Online Result Display System
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveTab("dashboard");
              setSidebarOpen(false);
            }}
            className={`p-4 text-sm cursor-pointer transition  ${
              activeTab === "dashboard"
                ? "bg-[#117A65]  rounded-md "
                : "hover:bg-[#3c4f57]"
            } ${sidebarOpen ? "" : "flex justify-center"}`}
          >
            <div className="flex items-center">
              <User />
              {sidebarOpen && <span className="ml-2">Dashboard</span>}
            </div>
          </div>
          <div
            onClick={() => {
              setActiveTab("home");
              setSidebarOpen(false);
            }}
            className={`p-4 text-sm cursor-pointer transition ${
              activeTab === "home"
                ? "bg-[#2aa6b3] border-l-4 border-l-white rounded-md"
                : "hover:bg-[#3c4f57]"
            } ${sidebarOpen ? "" : "flex justify-center"}`}
          >
            <div className="flex items-center">
              <House />
              {sidebarOpen && <span className="ml-2">Home</span>}
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Top Header */}
          <header className="h-14 bg-[#e5e5e5] flex items-center px-4 sm:px-6 shadow-sm gap-3 sm:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-lg text-black hover:text-[#2aa6b3] transition"
            >
              ☰
            </button>
            <span className="text-sm sm:text-lg font-medium text-gray-600 leading-tight">
              Online Result Display System
            </span>
          </header>

          {/* Dashboard Card */}
          <div className="p-3 sm:p-6">
            <div className="bg-white shadow-2xl rounded-sm border-t-4 border-t-[#23B0C4] ">
              <div className="sticky top-0 text-center bg-[#EBEBEB] shadow-2xl text-black py-3 font-semibold z-10 border-b border-gray-300">
                Dashboard
              </div>

              {/* Filter Section */}
              <div className="px-4 sm:px-6 py-4 bg-white border-b border-gray-200 flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
                <div className="flex flex-col items-start sm:items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Select Session:
                  </label>
                  <select
                    value={selectedSession}
                    onChange={(e) => handleSessionChange(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded text-[11px] bg-white text-gray-700 focus:outline-none focus:border-[#2aa6b3] transition w-full sm:w-72 h-8 font-light"
                  >
                    <option value="all">-- Select --</option>
                    <option value="2024">APR/MAY-2025</option>
                    <option value="2025">OCT/NOV-2025</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full lg:w-auto">
                  <span className="text-black"> Search:</span>

                  <input
                    type="text"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className=" border-2 border-black text-sm bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#2aa6b3] transition w-full sm:w-48 h-8 sm:h-6"
                  />
                </div>
              </div>

              <div
                className="max-h-96 overflow-y-auto overflow-x-auto custom-scrollbar"
                style={{
                  scrollbarColor: "#2aa6b3 #f3f4f6",
                  scrollbarWidth: "thin",
                }}
              >
                <table
                  className="w-full min-w-[760px] mt-2 text-sm shadow-xl"
                  style={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <thead>
                    <tr className="bg-[#2aa6b3] text-white text-center">
                      <th className="px-4 py-3 w-16 border-r border-r-white">
                        Sr.No.
                      </th>
                      <th className="px-4 py-3 border-r border-r-white">
                        Course Name
                      </th>
                      <th className="px-4 py-3 w-52 border-r border-r-white">
                        Result Date
                      </th>
                      <th className="px-4 py-3 w-48 text-center"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {paginatedRows.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`${
                          index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"
                        }`}
                      >
                        <td className="px-4 py-3 border-t border-t-white border-r border-r-white text-neutral-950">
                          {row.id}
                        </td>
                        <td className="px-4 py-3 border-t border-t-white border-r border-r-white text-neutral-950">
                          {row.course}
                        </td>
                        <td className="px-4 py-3 border-t border-t-white border-r border-r-white text-neutral-950">
                          {row.resultDate}
                        </td>
                        <td className="px-4 py-3 border-t border-t-white text-center text-neutral-950">
                          <button
                            onClick={() => openResultPopup(row.course)}
                            className="border border-[#2aa6b3] text-[#2aa6b3] px-4 py-1 rounded hover:bg-[#2aa6b3] hover:text-white transition text-sm"
                          >
                            Go for Result
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="h-1 bg-[#2aa6b3]"></div>

              {/* Pagination Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 bg-gray-50 border-t gap-3">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(startIndex + ITEMS_PER_PAGE, filteredRows.length)}{" "}
                  of {filteredRows.length} results
                </div>

                <div className="flex gap-2 items-center flex-wrap">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-[#2aa6b3] text-[#2aa6b3] rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2aa6b3] hover:text-white transition text-sm"
                  >
                    Previous
                  </button>

                  <div className="flex gap-1">
                    {(() => {
                      const pageGroup = Math.floor((currentPage - 1) / 2);
                      const startPage = pageGroup * 2 + 1;
                      const endPage = Math.min(startPage + 1, totalPages);
                      const visiblePages = [];
                      for (let i = startPage; i <= endPage; i++) {
                        visiblePages.push(i);
                      }
                      return visiblePages.map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageClick(page)}
                          className={`px-3 py-1 rounded text-sm transition ${
                            currentPage === page
                              ? "bg-[#2aa6b3] text-white"
                              : "border border-[#2aa6b3] text-[#2aa6b3] hover:bg-[#2aa6b3] hover:text-white"
                          }`}
                        >
                          {page}
                        </button>
                      ));
                    })()}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-[#2aa6b3] text-[#2aa6b3] rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2aa6b3] hover:text-white transition text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-600 mt-6">
              Copyright © 2026 Savitribai Phule Pune University. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Result Popup Modal */}
      {isPopupOpen && (
<<<<<<< HEAD
        <div
          className={`fixed inset-0 z-50 ${showResultCard ? "bg-white" : "bg-black/10 flex items-center justify-center"}`}
        >
          <div
            className={
              showResultCard
                ? "w-full h-full bg-white"
                : "bg-white rounded-lg shadow-lg p-8 max-w-6xl w-full mx-4"
            }
          >
            <div
              className={
                showResultCard
                  ? "hidden"
                  : "flex justify-between items-center mb-6 pb-6 border-b border-gray-200"
              }
            >
              <h2 className="text-md font-semibold text-gray-800">
=======
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 max-w-6xl w-full mx-0 sm:mx-4 max-h-[92vh] overflow-y-auto">
            <div className="flex justify-between items-start sm:items-center mb-6 pb-6 border-b border-gray-200 gap-3">
              <h2 className="text-sm sm:text-md font-semibold text-gray-800 leading-snug">
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
                {selectedCourse || "Course"} - Enter Details
              </h2>
              <button
                onClick={closeResultPopup}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

<<<<<<< HEAD
            {!showResultCard ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Seat No
                    </label>
                    <input
                      type="text"
                      value={seatNo}
                      onChange={(e) => setSeatNo(e.target.value)}
                      placeholder=""
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2aa6b3]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Mother Name
                    </label>
                    <input
                      type="text"
                      value={motherName}
                      onChange={(e) => setMotherName(e.target.value)}
                      placeholder=""
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2aa6b3]"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center py-8 border-t border-b border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Enter captcha text as shown in image{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-200 px-6 py-4 rounded font-mono text-2xl font-bold">
                      {captchaCode}
                    </div>
                    <button
                      onClick={refreshCaptcha}
                      className="text-[#2aa6b3] hover:text-[#1a8a99] font-medium text-sm"
                    >
                      Refresh Captcha
                    </button>
                  </div>
                  <input
                    type="text"
                    value={captchaText}
                    onChange={(e) => setCaptchaText(e.target.value)}
                    placeholder="Enter Captcha Text"
                    className="w-80 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2aa6b3] text-center text-black"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleCheckResult}
                    className="px-8 py-2 bg-[#2aa6b3] text-white rounded border border-[#2aa6b3] hover:bg-[#1a8a99] transition font-medium"
                  >
                    Check Result
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                <iframe
                  title="Result PDF"
                  src={RESULT_PDF_PATH}
                  className="w-full h-full"
=======
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Seat No
                  </label>
                  <input
                    type="text"
                    value={seatNo}
                    onChange={(e) => setSeatNo(e.target.value)}
                    placeholder=""
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2aa6b3]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Mother Name
                  </label>
                  <input
                    type="text"
                    value={motherName}
                    onChange={(e) => setMotherName(e.target.value)}
                    placeholder=""
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2aa6b3]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-8 border-t border-b border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Enter captcha text as shown in image{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full">
                  <div
                    className="
    relative
    w-full max-w-[320px] h-[90px]
    flex items-center justify-center
    bg-[#e5e5e5]
    overflow-hidden
    select-none
  "
                  >
                    {/* Grid */}
                    <div
                      className="
      absolute inset-0 opacity-90
      bg-[linear-gradient(#cfcfcf_1px,transparent_1px),linear-gradient(90deg,#cfcfcf_1px,transparent_1px)]
      bg-[size:20px_20px]
    "
                    />

                    {/* Noise */}
                    <div
                      className="
      absolute inset-0 opacity-90
      bg-[radial-gradient(black_1px,transparent_1px)]
      bg-size-[18px_18px]
    "
                    />

                    {/* Tilted Text */}
                    <div className="relative z-10 flex gap-2">
                      {generatedCaptcha.split("").map((char, index) => {
                        const rotations = [-15, -10, -5, 5, 10, 15];
                        const randomRotate =
                          rotations[
                            Math.floor(Math.random() * rotations.length)
                          ];

                        const randomY = Math.floor(Math.random() * 10) - 5;

                        return (
                          <span
                            key={index}
                            style={{
                              transform: `rotate(${randomRotate}deg) translateY(${randomY}px)`,
                            }}
                            className="
            inline-block
            font-mono
            text-[56px]
            font-bold
            text-black
          "
                          >
                            {char}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <button
                    onClick={refreshCaptcha}
                    className="text-[#2aa6b3] hover:text-[#1a8a99] font-medium text-sm"
                  >
                    Refresh Captcha
                  </button>
                </div>
                <input
                  type="text"
                  value={captchaText}
                  onChange={(e) => setCaptchaText(e.target.value)}
                  placeholder="Enter Captcha Text"
                  className="w-full max-w-80 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2aa6b3] text-center text-black"
>>>>>>> 8a5a08cb3ecfdf8a7ef95e0f256b7c83a6c81ff8
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
