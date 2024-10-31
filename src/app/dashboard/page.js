// src/pages/MyPage.js
import React from "react";

const Dashboard = () => {
  // Sample array to map over
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      {/* Top Horizontal Section */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-lg">
        {/* Left: Static Page Name */}
        <h2 className="text-lg font-semibold">My Page</h2>

        {/* Right: Button */}
        <button className="px-4 py-2 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition">
          Action Button
        </button>
      </div>

      {/* Rounded Corner Section with List */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-gray-700 font-semibold mb-3">List Section</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-3 bg-gray-100 rounded-md shadow-sm text-gray-800 font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Another Rounded Corner Section */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-gray-700 font-semibold">Additional Section</h3>
        <p className="text-gray-600 mt-2">
          This is an additional section below the list. You can add any other
          content or elements here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
