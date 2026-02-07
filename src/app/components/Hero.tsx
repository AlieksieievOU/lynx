import React from "react";
import imgRectangle2 from "figma:asset/168a40fd939835c10f602a3777f56058a29180aa.png";
import imgImage6 from "figma:asset/b20faf258c63686adc5f3e65dcf827fe35a5d1df.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-[#fcfcfc] font-['Hind',sans-serif] ">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center z-10 mt-32 mb-12 lg:mb-0">
        <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[112px]">
          <div className="w-full lg:w-[616px] space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="heading-h1">
                OVERSIZE & OVERWEIGHT<br />
                <span className="block">Permitting Solutions</span>
              </h1>
              <p className="body-text">
                Providing comprehensive planning solutions to streamline your permitting needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[40px] w-full">
              <button className="btn-primary">
                Sign Up
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>

            {/* Testimonial snippet */}
            <div className="mt-12 lg:mt-16 space-y-[24px] w-full">
              <h3 className="text-[20px] sm:text-[24px] font-semibold text-center">Voices of Satisfied Clients</h3>
              <div className="card-site max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
                <div className="flex items-center gap-5">
                  <img src={imgImage6} alt="ATC Transport" className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full object-cover" />
                  <span className="text-[18px] sm:text-[20px] font-semibold text-brand-black">ATC Transport</span>
                </div>
                <p className="text-[16px] sm:text-[20px] font-semibold leading-relaxed text-brand-black">
                  "I recently had the pleasure of working with LYNX for obtaining over-dimensional permits for my trucking business, and I must say, their service was impeccable. From the initial contact to the final execution, their team demonstrated professionalism, deep knowledge, and efficiency."
                </p>
              </div>
            </div>
          </div>
           <div className="w-full lg:w-[512px] space-y-8"></div>
        </div>
      </div>

      {/* Right Image (Truck) */}
      <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[calc(50%-7rem)] flex-1 lg:min-h-[64.0625rem] mt-12 lg:mt-0">
        <div className="h-full w-full relative lg:rounded-bl-site shadow-site overflow-hidden">
          <img 
            src={imgRectangle2} 
            alt="Red Truck on Road" 
            className="w-full h-full object-cover -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
};
