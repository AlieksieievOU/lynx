import React from "react";
import imgRectangle4 from "figma:asset/ffd0c74991a6e53a424dda890b6ea88ca41437ac.png";
import imgRectangle5 from "figma:asset/f2bd0d9ad5da0588547a204b062cf500bcf2f8b4.png";
import imgRectangle6 from "figma:asset/744654926be46090c598f8028f68b208794304c3.png";

const ServiceCard = ({ img, title, description }: { img: string, title: string, description: string }) => (
  <div className="card-site flex-1 flex flex-col group hover:scale-[1.02] transition-transform duration-300 !p-0 overflow-hidden">
    <div className="h-[182px] w-full">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-8 space-y-5 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold text-brand-black">{title}</h3>
      <p className="body-text flex-grow text-[16px] leading-relaxed">{description}</p>
      <button className="btn-primary flex-none !py-3 !text-lg uppercase tracking-tight">
        More about service
      </button>
    </div>
  </div>
);

export const OurServices = () => {
  return (
    <section id="services" className="section-container py-16 lg:py-[60px] space-y-12">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h2 className="heading-h2">Our Services</h2>
        <p className="body-text max-w-2xl mx-auto">
          We provide comprehensive services in the Logistics and Permitting industry, 
          ensuring smooth operations and compliance with all regulations.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <ServiceCard 
          img={imgRectangle4}
          title="Permit Acquisition"
          description="Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress."
        />
        <ServiceCard 
          img={imgRectangle5}
          title="Logistics Management"
          description="Our logistics solutions streamline your supply chain, optimize routes, and reduce overhead costs while ensuring timely delivery."
        />
        <ServiceCard 
          img={imgRectangle6}
          title="Compliance Consulting"
          description="Expert guidance on local and national regulations to keep your business running smoothly and avoid costly compliance issues."
        />
      </div>
    </section>
  );
};
