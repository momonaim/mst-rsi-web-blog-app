import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
            <div className="space-x-4">
                <Link href="/" className="font-bold text-lg">
                    MyApp
                </Link>
                <Link href="/articles" className="hover:underline">
                    Articles
                </Link>
                {auth.user && (
                    <Link href="/articles/create" className="hover:underline">
                        Create Article
                    </Link>
                )}
            </div>

            <div className="relative">
                {auth.user ? (
                    <div>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 focus:outline-none"
                        >
                            <span>{auth.user.name}</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow z-10">
                                <div className="px-4 py-2 border-b">
                                    <div className="text-sm font-medium">
                                        {auth.user.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {auth.user.email}
                                    </div>
                                </div>
                                <Link
                                    href={route("profile.edit")}
                                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                >
                                    Profile
                                </Link>
                                <Link
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                                >
                                    Log Out
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="space-x-4">
                        <Link href={route("login")} className="hover:underline">
                            Login
                        </Link>
                        <Link
                            href={route("register")}
                            className="hover:underline"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
