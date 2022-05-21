import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-center text-2xl text-secondary">
          Welcome to your Dashboard
        </h2>

        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">Sidebar</Link>
          </li>
          <li>
            <Link to="/dashboard/my-review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/my-history">History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
