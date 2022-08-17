import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>

            <>
              <li>
                <Link to="addMember">Add New Member</Link>
              </li>
              <li>
                <Link to="attendanceReports">Attendance Reports</Link>
              </li>
              <li>
                <Link to="employeeTask">Members Tasks</Link>
              </li>

              <li>
                <Link to="manageAttendance">Manage Attendance</Link>
              </li>
            </>

            <>
              <li>
                <Link to="manageEmployee">Manage Members</Link>
              </li>
              <li>
                <Link to="reviewYourTeamMember">Review A Member</Link>
              </li>
              <li>
                <Link to="assignedTasks">Assigned Tasks</Link>
              </li>
              <li>
                <Link to="completedTask">Completed Tasks</Link>
              </li>
              <li>
                <Link to="uncompletedTask">Uncompleted Tasks</Link>
              </li>
              <li>
                <Link to="taskForwarding">Task Forwarding</Link>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
