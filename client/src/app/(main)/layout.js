"use client";

// app/(dashboard)/layout.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import Header from "../components/Header";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

            <div className="flex flex-col flex-1 bg-stone-50 min-w-0 overflow-hidden">
            {/* <Header /> */}
            <Navbar onMenuClick={toggleSidebar} />
                <main className="p-6 flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}