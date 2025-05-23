import React from "react";
import Navbar from "../Components/Navbar";

export default function AppLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="p-6 max-w-7xl mx-auto">{children}</main>
        </div>
    );
}
