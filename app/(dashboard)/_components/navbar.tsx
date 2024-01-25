import React from "react";
import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "@/components/navbar-routes";

const Navbar = () => {
  return (
    <div className="h-full border-b p-4 flex items-center bg-white shadow-sm">
      <MobileSidebar/>
      <NavbarRoutes/>
    </div>
  );
};

export default Navbar;
