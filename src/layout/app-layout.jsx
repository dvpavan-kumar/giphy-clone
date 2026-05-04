import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
  return (
    <>
      <div className="bg-gray-950 text-white min-h-screen">
        <div className="containter px-6 py-4">
          {/* header */}
          <Header/>
          </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
