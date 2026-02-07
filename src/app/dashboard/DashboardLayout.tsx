import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Search, Bell } from "lucide-react";

export const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-site-bg flex">
      <Sidebar 
        onLogout={handleLogout} 
      />
      
      <main className="flex-1 ml-[196px] p-12 min-h-screen">
        <div className="max-w-[1600px] mx-auto">
          {/* <Outlet /> */}
        </div>
      </main>
    </div>
  );
};
