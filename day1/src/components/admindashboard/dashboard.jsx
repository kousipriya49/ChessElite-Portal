import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();

    const SideBar = () => {
        return (
            <div className="dashboardSideBar">
                <div className="dashboardSidebarInnerContainer">
                    <button className="dashboardSidebarBtn">Home</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/chart">
                        <button className="dashboardSidebarBtn">Performance</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/fees">
                        <button className="dashboardSidebarBtn">Fees</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/reduxcontact">
                        <button className="dashboardSidebarBtn">Message</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/view">
                        <button className="dashboardSidebarBtn">Attendence</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/records">
                        <button className="dashboardSidebarBtn">Details</button>
                    </Link>
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
            <div className="dashboardContainer">
                
                <div className="dashboardContentContainer">
                    STUDENT MANAGEMENT SYSTEM
                    <br></br>
                    <br></br>
                    Sri Krishna College of Engineering and
                    <br></br>
                    Technology is the most sought after
                    <br></br>
                    Institution among the premier
                    <br></br>
                    technical Institutions in South India.
                    <br></br>
                    It is an Autonomous Institution.
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
