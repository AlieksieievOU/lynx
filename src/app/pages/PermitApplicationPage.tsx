import React, { useActionState } from "react";
import * as z from "zod";
import { sendTelegramMessage, sendTelegramDocument } from "@/utils/telegram";
import { generatePermitPDF, generatePermitFilename } from "../../utils/permitPdfGenerator";

// Validation schema for permit application - Only company info required
const permitSchema = z.object({
  // Company Information (Required)
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  federalId: z.string().optional(),
  ifta: z.string().optional(),
  usdot: z.string().optional(),
  date: z.string().min(1, "Date is required"),
});

type FormState = {
  errors?: z.ZodFormattedError<z.infer<typeof permitSchema>>;
  success?: boolean;
  message?: string;
};

export const PermitApplicationPage = () => {
  async function submitPermitAction(
    prevState: FormState | null,
    formData: FormData
  ): Promise<FormState> {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = permitSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.format(),
        message: "Please check the fields below.",
      };
    }

    try {
      // Collect all form data (including optional fields from hidden sections)
      const allFormData = Object.fromEntries(formData.entries());
      
      // Generate PDF from all form data
      const pdfBlob = generatePermitPDF(allFormData as any);
      const pdfFilename = generatePermitFilename(validatedFields.data);

      // Format Telegram message with only validated company info
      const telegramMessage = `
🔔 <b>New Permit Order Form</b>

📋 <b>Company:</b> ${validatedFields.data.companyName}
👤 <b>Contact:</b> ${validatedFields.data.contactName}
📧 <b>Email:</b> ${validatedFields.data.email}
📱 <b>Phone:</b> ${validatedFields.data.phone}
${validatedFields.data.federalId ? `🆔 <b>Federal ID:</b> ${validatedFields.data.federalId}` : ''}
${validatedFields.data.usdot ? `🚛 <b>USDOT:</b> ${validatedFields.data.usdot}` : ''}
${validatedFields.data.ifta ? `📄 <b>IFTA:</b> ${validatedFields.data.ifta}` : ''}

⏰ <b>Date:</b> ${validatedFields.data.date}

---
<i>Sent from Lynx Permits Order Form</i>
      `.trim();

      // Send to Telegram (message + PDF)
      const telegramMessagePromise = sendTelegramMessage(telegramMessage);
      const telegramPDFPromise = sendTelegramDocument(
        pdfBlob,
        pdfFilename,
        `📄 Permit Order - ${validatedFields.data.companyName}`
      );

      // Wait for both to complete
      const results = await Promise.allSettled([
        telegramMessagePromise,
        telegramPDFPromise,
      ]);

      const messageSuccess = results[0].status === "fulfilled";
      const pdfSuccess = results[1].status === "fulfilled";

      if (!messageSuccess && results[0].status === "rejected") {
        console.error("Telegram Message Error:", results[0].reason);
      }
      if (!pdfSuccess && results[1].status === "rejected") {
        console.error("Telegram PDF Error:", results[1].reason);
      }

      if (messageSuccess || pdfSuccess) {
        return {
          success: true,
          message: "Order submitted successfully! We'll contact you soon.",
        };
      } else {
        return {
          message: "Error submitting order. Please try again or contact us directly.",
        };
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { message: "Error submitting order. Please try again." };
    }
  }

  const [state, formAction, isPending] = useActionState(submitPermitAction, null);

  return (
    <div className="bg-site-bg font-hind min-h-screen">
      {/* Form Section */}
      <section className="section-container py-16 lg:py-20 mt-16">
        <div className="mx-auto">
          {state?.success ? (
            <div className="card-site p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-brand-black">
                Order Submitted!
              </h2>
              <p className="body-text">{state.message}</p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary mx-auto"
              >
                Submit Another Order
              </button>
            </div>
          ) : (
            <form action={formAction} className="card-site space-y-10">
              {/* Company Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Company Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-site">Company Name *</label>
                    <input
                      name="companyName"
                      type="text"
                      className="input-site"
                      placeholder="Amex Transport INC"
                    />
                    {state?.errors?.companyName && (
                      <p className="text-destructive text-sm">{state.errors.companyName._errors[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">Contact Name *</label>
                    <input
                      name="contactName"
                      type="text"
                      className="input-site"
                      placeholder="John Doe"
                    />
                    {state?.errors?.contactName && (
                      <p className="text-destructive text-sm">{state.errors.contactName._errors[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">Phone *</label>
                    <input
                      name="phone"
                      type="tel"
                      className="input-site"
                      placeholder="937-528-9614"
                    />
                    {state?.errors?.phone && (
                      <p className="text-destructive text-sm">{state.errors.phone._errors[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">Email *</label>
                    <input
                      name="email"
                      type="email"
                      className="input-site"
                      placeholder="contact@company.com"
                    />
                    {state?.errors?.email && (
                      <p className="text-destructive text-sm">{state.errors.email._errors[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">Federal ID / EIN</label>
                    <input
                      name="federalId"
                      type="text"
                      className="input-site"
                      placeholder="46-5112616"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">IFTA #</label>
                    <input
                      name="ifta"
                      type="text"
                      className="input-site"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">USDOT #</label>
                    <input
                      name="usdot"
                      type="text"
                      className="input-site"
                      placeholder="2488612"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">Date *</label>
                    <input
                      name="date"
                      type="date"
                      className="input-site"
                      defaultValue={new Date().toISOString().split('T')[0]}
                    />
                    {state?.errors?.date && (
                      <p className="text-destructive text-sm">{state.errors.date._errors[0]}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden">
              {/* Permit Type */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Permit Type
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="permitType"
                        value="oversize"
                        className="w-5 h-5"
                      />
                      <span className="text-lg font-medium">Oversize</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="permitType"
                        value="overweight"
                        className="w-5 h-5"
                        defaultChecked
                      />
                      <span className="text-lg font-medium">Overweight</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="permitType"
                        value="os-ow"
                        className="w-5 h-5"
                      />
                      <span className="text-lg font-medium">OS/OW</span>
                    </label>
                  </div>
                  {state?.errors?.permitType && (
                    <p className="text-destructive text-sm">{state.errors.permitType._errors[0]}</p>
                  )}

                  <div className="space-y-2">
                    <label className="label-site">Dispatch Load/Reference# (Optional)</label>
                    <input
                      name="dispatchRef"
                      type="text"
                      className="input-site"
                      placeholder="266"
                    />
                  </div>
                </div>
              </div>

              {/* Route Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Route Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Starting Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <label className="label-site">Street Address *</label>
                        <input
                          name="startingAddress"
                          type="text"
                          className="input-site"
                          placeholder="303 Parkway Dr NE"
                        />
                        {state?.errors?.startingAddress && (
                          <p className="text-destructive text-sm">{state.errors.startingAddress._errors[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="label-site">City *</label>
                        <input
                          name="startingCity"
                          type="text"
                          className="input-site"
                          placeholder="Atlanta"
                        />
                        {state?.errors?.startingCity && (
                          <p className="text-destructive text-sm">{state.errors.startingCity._errors[0]}</p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="label-site">State *</label>
                          <input
                            name="startingState"
                            type="text"
                            className="input-site"
                            placeholder="GA"
                            maxLength={2}
                          />
                          {state?.errors?.startingState && (
                            <p className="text-destructive text-sm">{state.errors.startingState._errors[0]}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="label-site">Zip</label>
                          <input
                            name="startingZip"
                            type="text"
                            className="input-site"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Delivery Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <label className="label-site">Street Address *</label>
                        <input
                          name="deliveryAddress"
                          type="text"
                          className="input-site"
                          placeholder="6639 Smith Ave"
                        />
                        {state?.errors?.deliveryAddress && (
                          <p className="text-destructive text-sm">{state.errors.deliveryAddress._errors[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="label-site">City *</label>
                        <input
                          name="deliveryCity"
                          type="text"
                          className="input-site"
                          placeholder="Newark"
                        />
                        {state?.errors?.deliveryCity && (
                          <p className="text-destructive text-sm">{state.errors.deliveryCity._errors[0]}</p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="label-site">State *</label>
                          <input
                            name="deliveryState"
                            type="text"
                            className="input-site"
                            placeholder="CA"
                            maxLength={2}
                          />
                          {state?.errors?.deliveryState && (
                            <p className="text-destructive text-sm">{state.errors.deliveryState._errors[0]}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="label-site">Zip</label>
                          <input
                            name="deliveryZip"
                            type="text"
                            className="input-site"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truck Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Truck Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="label-site">Truck # *</label>
                    <input
                      name="truckNumber"
                      type="text"
                      className="input-site"
                      placeholder="19"
                    />
                    {state?.errors?.truckNumber && (
                      <p className="text-destructive text-sm">{state.errors.truckNumber._errors[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Year *</label>
                    <input
                      name="truckYear"
                      type="text"
                      className="input-site"
                      placeholder="2025"
                    />
                    {state?.errors?.truckYear && (
                      <p className="text-destructive text-sm">{state.errors.truckYear._errors[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Make *</label>
                    <input
                      name="truckMake"
                      type="text"
                      className="input-site"
                      placeholder="Peterbilt"
                    />
                    {state?.errors?.truckMake && (
                      <p className="text-destructive text-sm">{state.errors.truckMake._errors[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Plate# *</label>
                    <input
                      name="truckPlate"
                      type="text"
                      className="input-site"
                      placeholder="PXB5997"
                    />
                    {state?.errors?.truckPlate && (
                      <p className="text-destructive text-sm">{state.errors.truckPlate._errors[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">State *</label>
                    <input
                      name="truckState"
                      type="text"
                      className="input-site"
                      placeholder="OH"
                      maxLength={2}
                    />
                    {state?.errors?.truckState && (
                      <p className="text-destructive text-sm">{state.errors.truckState._errors[0]}</p>
                    )}
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="label-site">Truck VIN (17 digits) *</label>
                    <input
                      name="truckVin"
                      type="text"
                      className="input-site"
                      placeholder="1XPCP4EX5SD75399"
                      maxLength={17}
                    />
                    {state?.errors?.truckVin && (
                      <p className="text-destructive text-sm">{state.errors.truckVin._errors[0]}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Trailer Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Trailer Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="label-site">Trailer #</label>
                    <input
                      name="trailerNumber"
                      type="text"
                      className="input-site"
                      placeholder="10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Year</label>
                    <input
                      name="trailerYear"
                      type="text"
                      className="input-site"
                      placeholder="2007"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Size (ft.)</label>
                    <input
                      name="trailerSize"
                      type="text"
                      className="input-site"
                      placeholder="53"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Make</label>
                    <input
                      name="trailerMake"
                      type="text"
                      className="input-site"
                      placeholder="TRLK"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Plate#</label>
                    <input
                      name="trailerPlate"
                      type="text"
                      className="input-site"
                      placeholder="TUA1582"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">State</label>
                    <input
                      name="trailerState"
                      type="text"
                      className="input-site"
                      placeholder="OH"
                      maxLength={2}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="label-site">Trailer VIN (17 digits)</label>
                    <input
                      name="trailerVin"
                      type="text"
                      className="input-site"
                      placeholder="1TKJ053237M108008"
                      maxLength={17}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Trailer Type</label>
                    <input
                      name="trailerType"
                      type="text"
                      className="input-site"
                      placeholder="TL"
                    />
                  </div>
                </div>
              </div>

              {/* Load Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Load Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="label-site">Load Description *</label>
                    <input
                      name="loadDescription"
                      type="text"
                      className="input-site"
                      placeholder="Volvo Hoist carbody"
                    />
                    {state?.errors?.loadDescription && (
                      <p className="text-destructive text-sm">{state.errors.loadDescription._errors[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Machinery Make</label>
                    <input
                      name="machineryMake"
                      type="text"
                      className="input-site"
                      placeholder="HITACHI"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Model</label>
                    <input
                      name="machineryModel"
                      type="text"
                      className="input-site"
                      placeholder="ZX490"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">S/N (BOL#)</label>
                    <input
                      name="machinerySn"
                      type="text"
                      className="input-site"
                      placeholder="232343"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Number of Pieces</label>
                    <input
                      name="numberOfPieces"
                      type="text"
                      className="input-site"
                      placeholder="1"
                    />
                  </div>
                </div>
              </div>

              {/* Dimensions & Weight */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Dimensions & Weight
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Load Dimensions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Load Only</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="label-site">Weight (lbs) *</label>
                        <input
                          name="loadWeight"
                          type="text"
                          className="input-site"
                          placeholder="105000"
                        />
                        {state?.errors?.loadWeight && (
                          <p className="text-destructive text-sm">{state.errors.loadWeight._errors[0]}</p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label className="label-site">Height (ft) *</label>
                          <input
                            name="loadHeight"
                            type="text"
                            className="input-site"
                            placeholder="12"
                          />
                          {state?.errors?.loadHeight && (
                            <p className="text-destructive text-sm">{state.errors.loadHeight._errors[0]}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="label-site">Width (ft) *</label>
                          <input
                            name="loadWidth"
                            type="text"
                            className="input-site"
                            placeholder="12"
                          />
                          {state?.errors?.loadWidth && (
                            <p className="text-destructive text-sm">{state.errors.loadWidth._errors[0]}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="label-site">Length (ft) *</label>
                        <input
                          name="loadLength"
                          type="text"
                          className="input-site"
                          placeholder="21"
                        />
                        {state?.errors?.loadLength && (
                          <p className="text-destructive text-sm">{state.errors.loadLength._errors[0]}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Total Dimensions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Total (Load + Truck/Trailer)</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="label-site">Weight (lbs) *</label>
                        <input
                          name="totalWeight"
                          type="text"
                          className="input-site"
                          placeholder="160000"
                        />
                        {state?.errors?.totalWeight && (
                          <p className="text-destructive text-sm">{state.errors.totalWeight._errors[0]}</p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label className="label-site">Height (ft) *</label>
                          <input
                            name="totalHeight"
                            type="text"
                            className="input-site"
                            placeholder="13"
                          />
                          {state?.errors?.totalHeight && (
                            <p className="text-destructive text-sm">{state.errors.totalHeight._errors[0]}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="label-site">Width (ft) *</label>
                          <input
                            name="totalWidth"
                            type="text"
                            className="input-site"
                            placeholder="12"
                          />
                          {state?.errors?.totalWidth && (
                            <p className="text-destructive text-sm">{state.errors.totalWidth._errors[0]}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="label-site">Length (ft) *</label>
                        <input
                          name="totalLength"
                          type="text"
                          className="input-site"
                          placeholder="87"
                        />
                        {state?.errors?.totalLength && (
                          <p className="text-destructive text-sm">{state.errors.totalLength._errors[0]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overhang & Loading Type */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="label-site">Overhang Front (ft, in)</label>
                    <input
                      name="overhangFront"
                      type="text"
                      className="input-site"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Overhang Rear (ft, in)</label>
                    <input
                      name="overhangRear"
                      type="text"
                      className="input-site"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">How Is It Loaded *</label>
                    <select name="loadingType" className="input-site">
                      <option value="end-to-end">End-to-End</option>
                      <option value="single-item">Single Item</option>
                      <option value="stacked">Stacked</option>
                      <option value="side-by-side">Side-by-Side</option>
                    </select>
                    {state?.errors?.loadingType && (
                      <p className="text-destructive text-sm">{state.errors.loadingType._errors[0]}</p>
                    )}
                  </div>
                </div>

                {/* Axle Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="label-site">Truck Axles</label>
                    <input
                      name="truckAxles"
                      type="text"
                      className="input-site"
                      placeholder="2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Trailer Axles</label>
                    <input
                      name="trailerAxles"
                      type="text"
                      className="input-site"
                      placeholder="6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-site">Total Axles *</label>
                    <input
                      name="totalAxles"
                      type="text"
                      className="input-site"
                      placeholder="8"
                    />
                    {state?.errors?.totalAxles && (
                      <p className="text-destructive text-sm">{state.errors.totalAxles._errors[0]}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Route Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-black border-b-2 border-brand-black pb-3">
                  Route Details
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="label-site">
                      States of Travel, Route by Highway, and Start Date for EACH State *
                    </label>
                    <textarea
                      name="routeInfo"
                      className="textarea-site h-32"
                      placeholder="Example:&#10;GA - I-75 - 01/29/2026&#10;TN - I-40 - 01/30/2026&#10;CA - I-5 - 01/31/2026"
                    />
                    {state?.errors?.routeInfo && (
                      <p className="text-destructive text-sm">{state.errors.routeInfo._errors[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="label-site">
                      Additional Information (including map link if applicable)
                    </label>
                    <textarea
                      name="additionalInfo"
                      className="textarea-site h-24"
                      placeholder="Any additional details about the route, special requirements, or Google Maps link..."
                    />
                  </div>
                </div>
              </div>
</div>
              {/* Error Message */}
              {state?.message && !state.success && (
                <div className="p-6 bg-red-50 text-red-700 rounded-2xl border border-red-100">
                  {state.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-primary !px-16 !py-5 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? "Submitting Application..." : "Submit Application"}
                </button>
              </div>

              {/* Contact Info */}
              <div className="text-center pt-6 border-t-2 border-gray-200">
                <p className="body-text text-brand-muted">
                  Need assistance? Email{" "}
                  <a href="mailto:permits@lynxpermits.com" className="text-brand-black font-semibold hover:underline">
                    permits@lynxpermits.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:847-595-0652" className="text-brand-black font-semibold hover:underline">
                    847-595-0652
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
