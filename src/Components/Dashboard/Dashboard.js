import React from 'react';
import {  Outlet } from 'react-router-dom';
import AssignedTasks from './MemberDashboardItems/AssignedTasks';
import CompletedTask from './MemberDashboardItems/CompletedTask';
import TaskForwarding from './MemberDashboardItems/TaskForwarding';
import UncompletedTask from './MemberDashboardItems/UncompletedTask';

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-center text-4xl mt-5">hELLO DASHBOARD</h2>
            <button className="btn btn-primary">hello</button>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;