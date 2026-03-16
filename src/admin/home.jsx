import "./admin.css";
import AdminSidebar from "./sidebar";

import {
  FaArrowUp,
  FaRegCalendarAlt,
  FaPhone,
  FaDownload,
  FaUserPlus,
} from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { MdAppRegistration } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import React, { useEffect, useState } from "react";

const stats = [
  {
    title: "Total Amount",
    value: "$0",
    subValue: "₹ 0 Rupees",
    icon: <FaArrowUp className="text-white" />,
    percentage: "0%",
    bgColor: "bg-orange-500",
  },
  {
    title: "Total Registration",
    value: "#11",
    subValue: "From Till Date",
    icon: <MdAppRegistration className="text-white" />,
    bgColor: "bg-rose-400",
  },
  {
    title: "Total Submission",
    value: "#91",
    subValue: "From Till Date",
    icon: <HiOutlineDocumentReport className="text-white" />,
    bgColor: "bg-lime-400",
  },
  {
    title: "Total Member",
    value: "#3",
    subValue: "From Till Date",
    icon: <FaUserPlus className="text-white" />,
    bgColor: "bg-purple-500",
  },
  {
    title: "Total Downloads",
    value: "#31",
    subValue: "From Till Date",
    icon: <FaDownload className="text-white" />,
    bgColor: "bg-sky-400",
  },
  {
    title: "Total Enquiries",
    value: "#3",
    subValue: "From Till Date",
    icon: <BsQuestionCircle className="text-white" />,
    bgColor: "bg-indigo-400",
  },
  {
    title: "Total Contact",
    value: "#8",
    subValue: "From Till Date",
    icon: <FaPhone className="text-white" />,
    bgColor: "bg-pink-600",
  },
];

// Tabled Details

const data = [
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: 33,
    date: "11/28/2008",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 47,
    date: "10/9/2009",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    date: "1/12/2009",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: 41,
    date: "10/13/2012",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    date: "6/7/2011",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    date: "12/2/2012",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    age: 38,
    date: "5/3/2011",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    date: "12/12/2011",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    age: 46,
    date: "12/6/2011",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    date: "3/29/2012",
  },
];

export default function AdminHome() {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIdx = (currentPage - 1) * entriesPerPage;
  const paginatedData = filteredData.slice(startIdx, startIdx + entriesPerPage);

  

  return (
    <>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex-1 p-4">
          <section id="dashboard">
            <h2>Dashboard</h2>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${stat.bgColor}`}>
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          {stat.title}
                        </p>
                        <p className="text-xl font-bold">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.subValue}</p>
                      </div>
                    </div>
                    {stat.percentage && (
                      <div className="text-sm bg-gray-100 rounded-full px-2 py-1">
                        {stat.percentage}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5 overflow-scroll" id="registration">
                <h2>Registration</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 p-4 ">
              <div className="flex items-center gap-2">
                <label htmlFor="entries" className="text-sm">
                  Show
                </label>
                <select
                  id="entries"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="rounded px-2 py-1"
                >
                  {[10, 25, 50].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-sm">entries per page</span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1  rounded"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto text-sm border border-gray-700">
                <thead className="">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Position</th>
                    <th className="p-2 text-left">Office</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Start Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {paginatedData.map((emp, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-600 hover:text-white transition"
                    >
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.position}</td>
                      <td className="p-2">{emp.office}</td>
                      <td className="p-2">{emp.age}</td>
                      <td className="p-2">{emp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {startIdx + 1} to{" "}
                {Math.min(startIdx + entriesPerPage, filteredData.length)} of{" "}
                {filteredData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-2 py-1 rounded ${
                      currentPage === num + 1 ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
                <h2>Submission </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 p-4 ">
              <div className="flex items-center gap-2">
                <label htmlFor="entries" className="text-sm">
                  Show
                </label>
                <select
                  id="entries"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="rounded px-2 py-1"
                >
                  {[10, 25, 50].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-sm">entries per page</span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1  rounded"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto text-sm border border-gray-700">
                <thead className="">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Position</th>
                    <th className="p-2 text-left">Office</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Start Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {paginatedData.map((emp, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-600 hover:text-white transition"
                    >
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.position}</td>
                      <td className="p-2">{emp.office}</td>
                      <td className="p-2">{emp.age}</td>
                      <td className="p-2">{emp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {startIdx + 1} to{" "}
                {Math.min(startIdx + entriesPerPage, filteredData.length)} of{" "}
                {filteredData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-2 py-1 rounded ${
                      currentPage === num + 1 ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
                <h2>Committee Members</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 p-4 ">
              <div className="flex items-center gap-2">
                <label htmlFor="entries" className="text-sm">
                  Show
                </label>
                <select
                  id="entries"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="rounded px-2 py-1"
                >
                  {[10, 25, 50].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-sm">entries per page</span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1  rounded"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto text-sm border border-gray-700">
                <thead className="">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Position</th>
                    <th className="p-2 text-left">Office</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Start Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {paginatedData.map((emp, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-600 hover:text-white transition"
                    >
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.position}</td>
                      <td className="p-2">{emp.office}</td>
                      <td className="p-2">{emp.age}</td>
                      <td className="p-2">{emp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {startIdx + 1} to{" "}
                {Math.min(startIdx + entriesPerPage, filteredData.length)} of{" "}
                {filteredData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-2 py-1 rounded ${
                      currentPage === num + 1 ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
                <h2>Contact</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 p-4 ">
              <div className="flex items-center gap-2">
                <label htmlFor="entries" className="text-sm">
                  Show
                </label>
                <select
                  id="entries"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="rounded px-2 py-1"
                >
                  {[10, 25, 50].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-sm">entries per page</span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1  rounded"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto text-sm border border-gray-700">
                <thead className="">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Position</th>
                    <th className="p-2 text-left">Office</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Start Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {paginatedData.map((emp, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-600 hover:text-white transition"
                    >
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.position}</td>
                      <td className="p-2">{emp.office}</td>
                      <td className="p-2">{emp.age}</td>
                      <td className="p-2">{emp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {startIdx + 1} to{" "}
                {Math.min(startIdx + entriesPerPage, filteredData.length)} of{" "}
                {filteredData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-2 py-1 rounded ${
                      currentPage === num + 1 ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
                <h2>Downloads</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 p-4 ">
              <div className="flex items-center gap-2">
                <label htmlFor="entries" className="text-sm">
                  Show
                </label>
                <select
                  id="entries"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="rounded px-2 py-1"
                >
                  {[10, 25, 50].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-sm">entries per page</span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1  rounded"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto text-sm border border-gray-700">
                <thead className="">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Position</th>
                    <th className="p-2 text-left">Office</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Start Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {paginatedData.map((emp, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-600 hover:text-white transition"
                    >
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.position}</td>
                      <td className="p-2">{emp.office}</td>
                      <td className="p-2">{emp.age}</td>
                      <td className="p-2">{emp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {startIdx + 1} to{" "}
                {Math.min(startIdx + entriesPerPage, filteredData.length)} of{" "}
                {filteredData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-2 py-1 rounded ${
                      currentPage === num + 1 ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
                <h2>Enquiries</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 p-4 ">
              <div className="flex items-center gap-2">
                <label htmlFor="entries" className="text-sm">
                  Show
                </label>
                <select
                  id="entries"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="rounded px-2 py-1"
                >
                  {[10, 25, 50].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-sm">entries per page</span>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1  rounded"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto text-sm border border-gray-700">
                <thead className="">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Position</th>
                    <th className="p-2 text-left">Office</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Start Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {paginatedData.map((emp, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-600 hover:text-white transition"
                    >
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.position}</td>
                      <td className="p-2">{emp.office}</td>
                      <td className="p-2">{emp.age}</td>
                      <td className="p-2">{emp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {startIdx + 1} to{" "}
                {Math.min(startIdx + entriesPerPage, filteredData.length)} of{" "}
                {filteredData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-2 py-1 rounded ${
                      currentPage === num + 1 ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
