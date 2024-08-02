// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded">Electronics</li>
        <li className="hover:bg-gray-200 p-2 rounded">Fashion</li>
        <li className="hover:bg-gray-200 p-2 rounded">Home Appliances</li>
        <li className="hover:bg-gray-200 p-2 rounded">Books</li>
        <li className="hover:bg-gray-200 p-2 rounded">Toys</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Price</h3>
          <div className="flex items-center mt-2">
            <input type="range" min="0" max="1000" className="w-full" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Brand</h3>
          <select className="w-full mt-2 p-2 border border-gray-300 rounded">
            <option>Any</option>
            <option>Brand A</option>
            <option>Brand B</option>
            <option>Brand C</option>
          </select>
        </div>
        <div>
          <h3 className="font-semibold">Rating</h3>
          <div className="flex items-center space-x-2 mt-2">
            <input type="checkbox" id="4stars" />
            <label htmlFor="4stars" className="text-sm">4 stars & up</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="3stars" />
            <label htmlFor="3stars" className="text-sm">3 stars & up</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
