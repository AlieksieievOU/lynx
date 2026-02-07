import React from "react";
import imgRectangle3 from "figma:asset/5e105b8213775db503e3fcbb1c29a5ee6227673f.png";

export const PermittingProcedures = () => {
  return (
    <section className="section-container py-16 lg:py-[60px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[112px]">
      {/* Man with Truck Image */}
      <div className="w-full lg:w-[616px] h-[300px] lg:h-[418px] rounded-site overflow-hidden shadow-site">
        <img 
          src={imgRectangle3} 
          alt="Driver with truck" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="w-full lg:w-[512px] space-y-8">
        <h2 className="heading-h2">
          Permitting Procedures
        </h2>
        <p className="body-text">
          When you choose us to handle your permits, you're not just another client; you're a partner. 
          We're dedicated to ensuring your best interests are at the forefront of every decision we make. 
          We don't just process permits; we optimize your routes for maximum efficiency. 
          Your success is our success, and that's a commitment you can count on.
        </p>
        <button className="btn-secondary w-full">
          Start Permitting
        </button>
      </div>
    </section>
  );
};
