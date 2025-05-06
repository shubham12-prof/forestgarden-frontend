"use client";

import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
    return (
        <div className="w-1/4 bg-gray-800 text-white p-4">
            <div className="space-y-4">
                <div
                    onClick={() => setActiveSection("kyc")}
                    className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 ${activeSection === "kyc" ? "bg-gray-600" : ""}`}
                >
                    KYC Form
                </div>
                <div
                    onClick={() => setActiveSection("users")}
                    className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 ${activeSection === "users" ? "bg-gray-600" : ""}`}
                >
                    Added Users
                </div>
                <div
                    onClick={() => setActiveSection("tree")}
                    className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 ${activeSection === "tree" ? "bg-gray-600" : ""}`}
                >
                    View Tree Structure
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
