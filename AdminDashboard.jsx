import React from "react";
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700"
          >
            <UsersIcon className="w-5 h-5" />
            <span>Users</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700"
          >
            <ChartBarIcon className="w-5 h-5" />
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700"
          >
            <Cog6ToothIcon className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
        <div className="p-4 border-t border-blue-700">
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">Welcome Back, Admin</h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600">Total Users</h2>
              <p className="text-2xl font-bold text-blue-700">1,254</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600">Revenue</h2>
              <p className="text-2xl font-bold text-green-600">$45,200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600">Active Projects</h2>
              <p className="text-2xl font-bold text-purple-600">32</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-gray-600">New Messages</h2>
              <p className="text-2xl font-bold text-red-600">14</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span>User JohnDoe signed up</span>
                <span className="text-gray-500 text-sm">2 hours ago</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Payment received from Client A</span>
                <span className="text-gray-500 text-sm">5 hours ago</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>New project "Website Redesign"</span>
                <span className="text-gray-500 text-sm">1 day ago</span>
              </li>
              <li className="flex justify-between">
                <span>User JaneDoe updated profile</span>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
