"use client";

// app/(dashboard)/layout.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import Header from "../components/Header";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
            <div className={`flex flex-col flex-1  bg-stone-100 transition-all duration-300 min-w-0 ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
                <Navbar onMenuClick={toggleSidebar} />
                <main className="p-4 md:p-6 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}