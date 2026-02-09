import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import imgImage1 from "figma:asset/f357b2379de4744d9ce74b316cb53882b3926676.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 inset-x-0 z-50 py-4 max-w-[1440px] mx-auto box-content">
      <div className="section-container flex items-center justify-between !px-6 lg:!px-[100px]">
        <div className="flex items-center gap-12 lg:gap-[60px]">
          <Link to="/" className="w-[80px] lg:w-[96px] mix-blend-darken cursor-pointer">
            <img 
              src={imgImage1} 
              alt="LYNX Permits Logo" 
              className="w-full h-auto object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-6 lg:gap-[40px] text-brand-black font-medium text-lg capitalize">
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `hover:text-black/70 transition-colors ${isActive ? 'text-black border-b-2 border-black' : ''}`
              }
            >
              Our Services
            </NavLink>
             <a href="#contact" className="hover:text-black/70 transition-colors">Contact Us</a>
            <NavLink 
              to="/permit-application" 
              className={({ isActive }) => 
                `hover:text-black/70 transition-colors ${isActive ? 'text-black border-b-2 border-black' : ''}`
              }
            >
              Permit order form
            </NavLink>
           
            {/* <a href="#order" className="hover:text-black/70 transition-colors">Permit order form</a> */}
            {/* <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `hover:text-black/70 transition-colors ${isActive ? 'text-black border-b-2 border-black' : ''}`
              }
            >
              Dashboard
            </NavLink> */}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-brand-black text-white px-6 py-2.5 rounded-full font-semibold text-lg hover:bg-brand-black/90 transition-all">
              Sign Up
            </button>
            <button className="bg-white text-brand-black px-6 py-2.5 rounded-full font-semibold text-lg shadow-site hover:shadow-lg transition-all border border-gray-100">
              Log In
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-black"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-white z-[60] lg:hidden animate-in fade-in duration-200">
          {/* Custom Header to match Navbar exactly and prevent layout shift */}
          <div className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto box-content">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="w-[80px]">
              <img src={imgImage1} alt="Logo" className="w-full h-auto object-contain mix-blend-darken" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-brand-black">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-8 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-8 text-[24px] font-semibold text-brand-black capitalize">
              <NavLink 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'text-black border-l-4 border-black pl-4' : '')}
              >
                Our Services
              </NavLink>
              <NavLink 
                to="/permit-application" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'text-black border-l-4 border-black pl-4' : '')}
              >
                Permit order form
              </NavLink>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
              {/* <a href="#order" onClick={() => setIsMenuOpen(false)}>Permit order form</a> */}
              {/* <NavLink 
                to="/dashboard" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'text-black border-l-4 border-black pl-4' : '')}
              >
                Dashboard
              </NavLink> */}
            </div>
            <div className="mt-auto space-y-4 py-10">
              <button className="w-full bg-brand-black text-white py-4 rounded-full font-semibold text-xl">
                Sign Up
              </button>
              <button className="w-full bg-white text-brand-black py-4 rounded-full font-semibold text-xl border border-gray-200 shadow-sm">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>

  );
};
