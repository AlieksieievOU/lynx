import React, { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, Truck, Ruler, MapPin, Calculator } from "lucide-react";

const steps = [
  { id: 1, name: "Vehicle Info", icon: Truck },
  { id: 2, name: "Dimensions", icon: Ruler },
  { id: 3, name: "Route", icon: MapPin },
  { id: 4, name: "Review", icon: Calculator },
];

export const OrderOversize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    truckNo: "",
    pickupState: "Illinois",
    deliveryState: "Indiana",
    length: "",
    width: "",
    height: "",
    weight: "",
  });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold">Vehicle Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Select Truck</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5">
                  <option>LP-101 (Semi-Truck)</option>
                  <option>LP-105 (Flatbed)</option>
                  <option>LP-110 (Lowboy)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Pickup State</label>
                <input type="text" placeholder="e.g. Illinois" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Delivery State</label>
                <input type="text" placeholder="e.g. Indiana" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Travel Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold">Load Dimensions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Overall Length</label>
                <div className="relative">
                  <input type="text" placeholder={"0' 0\""} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Overall Width</label>
                <input type="text" placeholder={"0' 0\""} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Overall Height</label>
                <input type="text" placeholder={"0' 0\""} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Gross Weight</label>
                <input type="text" placeholder="Lbs" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
              <CheckCircle2 className="text-blue-500 shrink-0" />
              <p className="text-sm text-blue-700">Dimensions will be verified against state maximums automatically in the next step.</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={40} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold">Routing Details</h3>
            <p className="text-gray-500 max-w-md mx-auto">Please enter your specific origin and destination addresses for route verification.</p>
            <div className="max-w-xl mx-auto space-y-4 text-left">
              <input type="text" placeholder="Origin Address" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              <input type="text" placeholder="Destination Address" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <h3 className="text-xl font-bold">Review Application</h3>
            <div className="bg-gray-50 rounded-2xl p-6 divide-y divide-gray-200 space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Vehicle</span>
                <span className="font-semibold text-[#0d0d0e]">LP-101 (Semi-Truck)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Route</span>
                <span className="font-semibold text-[#0d0d0e]">Illinois → Indiana</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Dimensions</span>
                <span className="font-semibold text-[#0d0d0e]">85' L x 12' W x 14' H</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Est. Permit Fee</span>
                <span className="font-bold text-green-600 text-lg">$145.00</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 font-hind animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="heading-h1">Order Oversize Permit</h1>
        <p className="text-brand-muted">Complete the steps below to apply for a new oversize permit.</p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-10" />
        <div className="flex justify-between">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-4 ${
                  currentStep === step.id 
                    ? "bg-brand-black border-brand-white text-brand-white shadow-xl scale-110" 
                    : currentStep > step.id
                    ? "bg-green-500 border-brand-white text-brand-white"
                    : "bg-brand-white border-gray-100 text-brand-muted"
                }`}
              >
                {currentStep > step.id ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
              </div>
              <span className={`text-sm font-bold ${currentStep === step.id ? "text-brand-black" : "text-brand-muted"}`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-site min-h-[400px] flex flex-col">
        <div className="flex-1">
          {renderStepContent()}
        </div>

        <div className="flex justify-between pt-10 border-t border-gray-50 mt-10">
          <button 
            onClick={handleBack}
            disabled={currentStep === 1}
            className="btn-secondary !flex-1 !max-w-[160px] flex items-center justify-center gap-2 !px-6 !py-3 disabled:opacity-30"
          >
            <ChevronLeft size={20} />
            Back
          </button>
          <button 
            onClick={handleNext}
            className="btn-primary !flex-1 !max-w-[240px] flex items-center justify-center gap-2 !px-8 !py-3"
          >
            {currentStep === steps.length ? "Submit Application" : "Next Step"}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
