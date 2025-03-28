import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h2 className="text-2xl font-bold mt-4">Welcome to Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
