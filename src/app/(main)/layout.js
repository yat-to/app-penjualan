// app/(dashboard)/layout.js
import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 bg-stone-50">
            {/* <Header /> */}
            <Navbar />
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}