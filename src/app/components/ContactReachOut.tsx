import React, { useActionState } from "react";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import svgPaths from "@/imports/svg-keksqji0xd";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
  };
  success?: boolean;
  message?: string;
};

export const ContactReachOut = () => {
  async function contactAction(prevState: FormState | null, formData: FormData): Promise<FormState> {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
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
        console.error("EmailJS environment variables are missing!");
        return { message: "System configuration error. Please contact support." };
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: validatedFields.data.name,
          from_email: validatedFields.data.email,
          phone: validatedFields.data.phone,
          to_name: "Lynx Permits Support",
          message: `New reach out request from ${validatedFields.data.name}. Phone: ${validatedFields.data.phone}`,
        },
        PUBLIC_KEY
      );

      return { success: true, message: "Thank you! We will contact you soon." };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { message: "Something went wrong sending the email. Please try again." };
    }
  }

  const [state, formAction, isPending] = useActionState(contactAction, null);

  return (
    <section className="section-container min-h-[400px] py-16 lg:py-[60px] flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Text Content */}
      <div className="w-full lg:w-[512px] space-y-8">
        <h2 className="heading-h2">
          Reach Out to Us for Your Logistics & Permitting Needs
        </h2>
        <p className="body-text">
          Have questions or need assistance with logistics and permitting? Don't hesitate to contact us. 
          We're here to help you navigate the process with ease.
        </p>
      </div>

      {/* Floating Contact Card */}
      <div className="w-full lg:w-[616px] card-site space-y-8">
        <div className="flex items-center gap-8">
          {/* Message Icon */}
          <div className="w-[67px] h-[67px] relative flex items-center justify-center shrink-0">
             <svg className="w-full h-full" fill="none" viewBox="0 0 65 57">
               <path d={svgPaths.p163e6080} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
               <path d="M14.7813 10.8446H26.5938" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
               <path d="M14.7813 16.7507H42.3438" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
               <path d="M14.7813 22.6563H34.4688" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
               <path d={svgPaths.p2f907600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
             </svg>
          </div>
          <h3 className="text-2xl lg:text-[28px] font-semibold leading-tight text-brand-black">
            Feel Free to Ask Us<br />To Contact You
          </h3>
        </div>

        {/* Main Contact Form */}
        <div className="space-y-4">
          {state?.success ? (
            <div className="p-6 bg-green-50 text-green-700 rounded-2xl border border-green-100 text-center font-medium">
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
  );
};
