import React, { useActionState } from "react";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import imgRectangle2 from "figma:asset/52b75f6f56631d1776b5307c515bf6f532919155.png";
import imgRectangle3 from "figma:asset/a61126b921a7f971cb0c9e1c78ee242c540f4bc5.png";
import imgRectangle4 from "figma:asset/f2bd0d9ad5da0588547a204b062cf500bcf2f8b4.png";
import imgRectangle5 from "figma:asset/744654926be46090c598f8028f68b208794304c3.png";
import svgPaths from "@/imports/svg-vm6ql5682x";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
  };
  success?: boolean;
  message?: string;
};

const ServiceSmallCard = ({ img, title, description }: { img: string, title: string, description: string }) => (
  <div className="card-site flex-1 !p-0 overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
    <div className="h-[280px] w-full">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-8 space-y-5 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold text-brand-black">{title}</h3>
      <p className="body-text flex-grow">{description}</p>
      <button className="btn-primary w-full uppercase tracking-tight !py-3">
        More about service
      </button>
    </div>
  </div>
);

export const ServicesPage = () => {
  async function contactAction(prevState: FormState | null, formData: FormData): Promise<FormState> {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const validatedFields = contactSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Please check the fields below.",
      };
    }

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("EmailJS environment variables are missing in ServicesPage!");
        return { message: "System configuration error." };
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: validatedFields.data.name,
          from_email: validatedFields.data.email,
          phone: validatedFields.data.phone,
          subject: validatedFields.data.subject,
          message: validatedFields.data.message,
          to_name: "Lynx Permits",
        },
        PUBLIC_KEY
      );

      return { success: true, message: "Thank you! We'll be in touch." };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { message: "Error sending message. Please try again." };
    }
  }

  const [state, formAction, isPending] = useActionState(contactAction, null);

  return (
    <div className="bg-[#fcfcfc] font-['Hind',sans-serif]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row bg-site-bg">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center z-10 mt-32 mb-10 lg:mb-0 ">
          <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[112px]">
            <div className="max-w-[616px] space-y-10">
              <div className="space-y-6">
                <h1 className="heading-h1">
                  Permit Acquisition
                </h1>
                <p className="body-text">
                  Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-[40px] w-full">
                <button className="btn-primary">
                  Sign Up
                </button>
                <button className="btn-secondary">
                  Contact Us
                </button>
              </div>
            </div>
             <div className="w-full lg:w-[512px] space-y-8"></div>
          </div>
        </div>

        {/* Right Image - Precise alignment matching Hero.tsx */}
        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[calc(50%-7rem)] flex-1 lg:min-h-[64.0625rem]">
          <div className="h-full w-full relative lg:rounded-bl-site shadow-site overflow-hidden">
            <img 
              src={imgRectangle2} 
              alt="Permit specialist" 
              className="w-full h-full object-cover -scale-x-100"
            />
          </div>
        </div>
      </section>

      {/* Permitting Procedures */}
      <section className="section-container py-16 lg:py-[60px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[112px]">
        <div className="w-full lg:w-[616px] h-[300px] lg:h-[418px] rounded-site overflow-hidden shadow-site flex-shrink-0 order-2 lg:order-1">
          <img 
            src={imgRectangle3} 
            alt="Stamping documents" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full lg:w-[512px] space-y-8 order-1 lg:order-2">
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
            Start permitting
          </button>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="section-container py-16 lg:py-[60px] space-y-12">
        <h2 className="heading-h2 text-center">Other Services</h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <ServiceSmallCard 
            img={imgRectangle4}
            title="Logistics Management"
            description="Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress."
          />
          <ServiceSmallCard 
            img={imgRectangle5}
            title="Compliance Consulting"
            description="Our Permit Acquisition service ensures you have all necessary permits for your logistics operations. We handle the process, saving you time and stress."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container py-16 lg:py-[60px] flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="w-full lg:w-[512px] space-y-8">
          <h2 className="heading-h2">Contact Us</h2>
          <p className="body-text">Got questions? We're here to help! Reach out to us today.</p>
          
          <div className="space-y-4 body-text font-medium">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p1179fd00} fill="currentColor" />
              </svg>
              <p>800 Roosevelt Rd, A-340 Glen Ellyn, IL 60137</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.pb384280} fill="currentColor" />
              </svg>
              <p>847-595-0652</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
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

        <div className="w-full lg:w-[616px] card-site space-y-8">
          <h3 className="text-[28px] font-semibold text-brand-black">Contact Form</h3>
          <div className="space-y-4">
            {state?.success ? (
              <div className="p-10 bg-green-50 text-green-700 rounded-3xl border border-green-100 text-center font-medium">
                {state.message}
              </div>
            ) : (
              <form className="space-y-3" action={formAction}>
                <div className="space-y-1">
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Name" 
                    className={`input-site ${state?.errors?.name ? 'border-destructive' : ''}`}
                  />
                  {state?.errors?.name && <p className="text-destructive text-sm px-2">{state.errors.name[0]}</p>}
                </div>

                <div className="space-y-1">
                  <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    className={`input-site ${state?.errors?.email ? 'border-destructive' : ''}`}
                  />
                  {state?.errors?.email && <p className="text-destructive text-sm px-2">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-1">
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    className={`input-site ${state?.errors?.phone ? 'border-destructive' : ''}`}
                  />
                  {state?.errors?.phone && <p className="text-destructive text-sm px-2">{state.errors.phone[0]}</p>}
                </div>

                <div className="space-y-1">
                  <input 
                    name="subject"
                    type="text" 
                    placeholder="Subject" 
                    className={`input-site ${state?.errors?.subject ? 'border-destructive' : ''}`}
                  />
                  {state?.errors?.subject && <p className="text-destructive text-sm px-2">{state.errors.subject[0]}</p>}
                </div>

                <div className="space-y-1">
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    className={`textarea-site h-[120px] !py-4 ${state?.errors?.message ? 'border-destructive' : ''}`}
                  />
                  {state?.errors?.message && <p className="text-destructive text-sm px-2">{state.errors.message[0]}</p>}
                </div>

                {state?.message && !state.success && (
                  <p className="text-destructive text-center font-medium">{state.message}</p>
                )}

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="btn-primary w-full uppercase tracking-tight mt-2 !py-4 disabled:opacity-50"
                >
                  {isPending ? "Sending..." : "send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
