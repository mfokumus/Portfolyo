import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/shared/SideBar";
import "../styles/main.css";

const MasterLayout = () => {
  return (
    <div className="flex">
      <div className="layout-sidebar">
        <SideBar />
      </div>
      <div className="layout-main">
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
