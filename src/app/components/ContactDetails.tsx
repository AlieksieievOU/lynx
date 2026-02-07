import React, { useActionState } from "react";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import svgPaths from "@/imports/svg-keksqji0xd";

const detailsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
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

export const ContactDetails = () => {
  async function detailsAction(prevState: FormState | null, formData: FormData): Promise<FormState> {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const validatedFields = detailsSchema.safeParse(data);

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
        console.error("EmailJS environment variables are missing in ContactDetails!");
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

      return { success: true, message: "Thank you! Your message has been sent." };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { message: "Something went wrong. Please try again later." };
    }
  }

  const [state, formAction, isPending] = useActionState(detailsAction, null);

  return (
    <section id="contact" className="section-container min-h-[400px] py-16 lg:py-[60px] flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* Contact Info */}
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

        {/* Social Icons */}
        <div className="flex items-center gap-8 pt-4">
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

      {/* Main Contact Form */}
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
  );
};
