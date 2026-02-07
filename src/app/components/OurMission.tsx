import React from "react";
import imgHome from "figma:asset/0a20cf2467d663f5e6fc0094367514a5f9c56cfd.png";
import svgPaths from "@/imports/svg-keksqji0xd";

export const OurMission = () => {
  return (
    <section className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[400px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={imgHome} alt="Road background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-black/80 to-brand-black" />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      <div className="section-container relative z-10 py-16 lg:py-[60px] flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* Star Wreath Icon Section */}
        <div className="flex-1 flex justify-center w-full lg:w-[616px]">
          <div className="w-[226px] h-[201px]">
            <svg className="w-full h-full" viewBox="0 0 226 201" fill="none">
              <path d={svgPaths.p251b3100} fill="#FCFCFC" />
              <path d={svgPaths.p18acf680} fill="#FCFCFC" />
              <path d={svgPaths.p1bf26480} fill="#FCFCFC" />
              <path d={svgPaths.p2ec1ecf0} fill="#FCFCFC" />
              <path d={svgPaths.p306bd480} fill="#FCFCFC" />
              <path d={svgPaths.pb1f0a80} fill="#FCFCFC" />
              <path d={svgPaths.p841a900} fill="#FCFCFC" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[616px] text-brand-white space-y-8">
          <h2 className="heading-h2 !text-brand-white">Our Mission</h2>
          <p className="body-text !text-brand-white font-light opacity-90">
            Our mission is to streamline logistics and permitting processes, ensuring efficient, compliant operations. 
            We strive to provide top-tier service, fostering growth and success for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};
