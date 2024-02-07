import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();

    const SideBar = () => {
        return (
            <div className="dashboardSideBar">
                <div className="dashboardSidebarInnerContainer">
                <Link to="/academy">
                    <button className="dashboardSidebarBtn">Home</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/academy">
                        <button className="dashboardSidebarBtn">Academy</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/courses">
                        <button className="dashboardSidebarBtn">courses</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/add">
                        <button className="dashboardSidebarBtn">add academy</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/view">
                        <button className="dashboardSidebarBtn">leaderboard</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/records">
                        <button className="dashboardSidebarBtn">StudentDetails</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">
                        <button className="dashboardSidebarBtn">logout</button>
                    </Link>
                    &nbsp;&nbsp;
                </div>
            </div>
        );
    }

    return (
        <div className="dashboardMainContainer">
            <SideBar />
           
        </div>
    );
}

export default Dashboard;
