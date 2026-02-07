import React from "react";
import { NavLink, Link } from "react-router-dom";
import svgPaths from "@/imports/svg-fw06ab0w8h";
import imgLogo from "figma:asset/f357b2379de4744d9ce74b316cb53882b3926676.png";
import { LogOut } from "lucide-react";

interface SidebarProps {
  onLogout: () => void;
}

const Icon = ({ path, color = "currentColor", size = 24 }: { path: string, color?: string, size?: number }) => (
  <div style={{ width: size, height: size }} className="shrink-0">
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="none">
      <path d={path} fill={color} />
    </svg>
  </div>
);

export const Sidebar = ({ onLogout }: SidebarProps) => {
  const menuItems = [
    { id: "home", label: "Home", path: "/", icon: svgPaths.p17852172 },
    { id: "regulations", label: "States Dimensions", path: "/dashboard/regulations", icon: svgPaths.p31951680 },
    { id: "overview", label: "Dashboard", path: "/dashboard", icon: svgPaths.p205fe700, end: true },
    { id: "provisions", label: "Provisions", path: "/dashboard/provisions", icon: svgPaths.p17e45300 },
    { id: "order", label: "Order Oversize", path: "/dashboard/order", icon: svgPaths.p218d1df0 },
    { id: "maintenance", label: "Maintain Vehicle", path: "/dashboard/maintenance", icon: svgPaths.p2a8fdf40 },
  ];

  const bottomItems = [
    { id: "account", label: "Account", path: "/dashboard/account", icon: svgPaths.p8ea680 },
    { id: "settings", label: "Settings", path: "/dashboard/settings", icon: svgPaths.pab73400 },
  ];

  return (
    <div className="w-[196px] h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.07)]">
      <div className="p-8 flex justify-center">
        <Link to="/" className="w-[96px] mix-blend-darken">
          <img src={imgLogo} alt="LYNX PERMITS INC" className="w-full h-auto" />
        </Link>
      </div>

      <nav className="flex-1 flex flex-col gap-2 pr-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.end}
            className={({ isActive }) => `
              group flex items-center gap-2 px-4 py-3 relative w-full transition-all
              ${isActive 
                ? "bg-[#0d0d0e] text-[#fcfcfc] rounded-tr-[32px] rounded-br-[32px]" 
                : "text-[#0d0d0e] hover:bg-gray-50 rounded-tr-[32px] rounded-br-[32px]"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <Icon path={item.icon} color={isActive ? "#fcfcfc" : "#0d0d0e"} />
                <span className="font-['Hind',sans-serif] font-medium text-[18px]">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 flex flex-col gap-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `
              group flex items-center gap-2 px-4 py-3 relative w-full transition-all
              ${isActive 
                ? "bg-[#0d0d0e] text-[#fcfcfc] rounded-[32px]" 
                : "text-[#0d0d0e] hover:bg-gray-50 rounded-[32px]"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <Icon path={item.icon} color={isActive ? "#fcfcfc" : "#0d0d0e"} />
                <span className="font-['Hind',sans-serif] font-medium text-[18px]">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-50 rounded-[32px] transition-all mt-4 font-['Hind',sans-serif] font-medium text-[18px]"
        >
          <LogOut size={24} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
