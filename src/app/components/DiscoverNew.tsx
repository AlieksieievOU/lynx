import React from "react";

export const DiscoverNew = () => {
  return (
    <section className="section-container py-16 lg:py-[60px] flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Google Maps Iframe */}
      <div className="w-full lg:w-[616px] h-[400px] lg:h-[451px] rounded-site overflow-hidden shadow-site order-2 lg:order-1 border border-gray-100">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          src="https://maps.google.com/maps?q=800%20Roosevelt%20Rd%20A-340%2C%20Glen%20Ellyn%2C%20IL%2060137&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          title="Google Maps - Lynx Permits"
          // className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
      
      {/* Content */}
      <div className="w-full lg:w-[512px] space-y-8 order-1 lg:order-2">
        <h2 className="heading-h2">
          Discover Something New With Every Visit!
        </h2>
        <p className="body-text">
          Step into our world and experience a place where every visit is a new adventure. 
          We're not just a destination, we're an experience. From the moment you walk through our doors, 
          you'll be greeted with a warm welcome and a friendly smile. Our team is always ready to 
          assist and make your visit as enjoyable as possible. We pride ourselves on our commitment 
          to customer satisfaction and strive to exceed your expectations. So why wait? Come in 
          and see us today. We promise, you won't be disappointed!
        </p>
      </div>
    </section>
  );
};
