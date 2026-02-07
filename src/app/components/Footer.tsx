import React from "react";
import imgImage2 from "figma:asset/68cecdc21ba2777999dbc55c22ae13da4d2b5e34.png";
import svgPaths from "@/imports/svg-keksqji0xd";

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white py-12">
      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[60px]">
        
        {/* Logo & Tagline */}
        <div className="flex items-center gap-5 w-full lg:w-[409px]">
          <div className="w-[96px] h-[89px] shrink-0 mix-blend-plus-lighter relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                src={imgImage2} 
                alt="LYNX Logo" 
                className="absolute h-[130%] left-[-10%] max-w-none top-[-10%] w-[120%] object-contain" 
              />
            </div>
          </div>
          <p className="text-lg leading-[1.2] capitalize">
            Streamlining Logistics and Permitting for Your Business Success
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5 text-lg font-medium capitalize w-full lg:flex-1">
          <a href="#services" className="hover:text-white/70 transition-colors">Our Services</a>
          <a href="#contact" className="hover:text-white/70 transition-colors">Contact Us</a>
          <a href="#order" className="hover:text-white/70 transition-colors">Permit order form</a>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-[512px] space-y-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p1179fd00} fill="currentColor" />
            </svg>
            <p className="text-lg font-medium opacity-90">800 Roosevelt Rd, A-340 Glen Ellyn, IL 60137</p>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.pb384280} fill="currentColor" />
            </svg>
            <p className="text-lg font-medium opacity-90">847-595-0652</p>
          </div>
          <div className="flex items-center gap-8 pt-2">
            <a href="https://www.facebook.com/profile.php?id=100095584053193" target="_blank" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p1fb59100} fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.instagram.com/lynx_permits/" target="_blank" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p37059e00} fill="currentColor" />
                <path d={svgPaths.pf2a8b00} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                <path d={svgPaths.p17a7ae00} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://t.me/lynx_permits" target="_blank" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p280b8780} fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
