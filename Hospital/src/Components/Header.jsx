import OPD_logo from "../assets/Images/OPD_logo.jpg"
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Header() {
    const [isHomePage, setIsHomePage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Check if the current page is the Home page
        setIsHomePage(location.pathname === "/");
    }, [location]);
  return (
    <header className='bg-emerald-200 shadow-xl opacity-100'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <img src={OPD_logo} className='h-7 w-7 rounded-lg justify-center'/>
                <img src="OPD_logo.jpg" className='h-3 w-3 rounded-lg'/>
                <span className='text-black'>MedQueue</span>
            </h1>
            <nav className="flex items-center space-x-6">
                <a href="/" className="text-black hover:underline">
                Home
                </a>
                <a href="/about-us" className="text-black hover:underline">
                About Us
                </a>
                <a href="/services" className="text-black hover:underline">
                Services
                </a>
                {isHomePage && (
                <>
                    <a href="/login" className="text-black hover:underline">
                    Login
                    </a>
                    <a href="/register" className="text-black hover:underline">
                    Register
                    </a>
                </>
                )}
            </nav>
        </div>
    </header>
  )
}
