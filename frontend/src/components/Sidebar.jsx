import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="p-2 hover:bg-gray-700 rounded">Bookings</li>
        <li className="p-2 hover:bg-gray-700 rounded">Rooms</li>
        <li className="p-2 hover:bg-gray-700 rounded">Customers</li>
      </ul>
    </div>
  );
};

export default Sidebar;
