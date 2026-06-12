import React from "react";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="bg-blue-50 min-h-screen">
            {/* Fixed Sidebar */}
            <div className="fixed left-0 top-0 h-screen w-64 z-50">
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className=" ml-64 min-h-screen p-8 overflow-y-auto ">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;