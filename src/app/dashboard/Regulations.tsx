import React, { useState } from "react";
import USAMap from "react-usa-map";
import svgPaths from "@/imports/svg-gpkcetsu42";

interface WeightInfo {
  gross: string;
  single: string;
  tandem: string;
  tridem: string;
}

interface StateDetails {
  fullName: string;
  phone: string;
  email: string;
  fax: string;
  hours: string;
  operatingTime: string;
  legalDimensions: {
    length: string;
    width: string;
    height: string;
    overhang: string;
    weight: WeightInfo;
  };
  weightLimits: {
    gross: string;
    single: string;
    tandem: string;
    tridem: string;
    notes: string;
  };
  escortConditions: {
    length: string;
    single: string;
    height: string;
    notes: string;
  };
}

const mockStatesData: Record<string, StateDetails> = {
  OR: {
    fullName: "Oregon",
    phone: "503-373-0000",
    email: "N/A",
    fax: "503-378-2873",
    hours: "8:00am-5:00pm Mon-Fr",
    operatingTime: "One-half hour before sunrise to one-half hour after sunset seven days a week from Labor Day to Memorial Day. Memorial Day to Labor Day, Saturday travel only until noon and none on Sunday, except not exceeding 14 feet wide can travel weekend, daytime hours only on Interstate highways west of the summit of the Cascade Mountains, and on any authorized highway east of the summit of the Cascade Mountains. Up to 10 feet wide on “green” routes and up to 12 feet wide on Interstates are allowed night travel.",
    legalDimensions: {
      length: "53' trailer",
      width: "8'6",
      height: "14'",
      overhang: "front: 4 (from the bumper) | rear: varies depending on the route",
      weight: {
        gross: "80.000",
        single: "20.000",
        tandem: "20.000",
        tridem: "20.000"
      }
    },
    weightLimits: {
      gross: "5 axles: 98,000 | 6 axles: 120,500",
      single: "21.500",
      tandem: "43.000",
      tridem: "57.000 - 58.000 | depends on spacing",
      notes: "Gross weight depends on spacings"
    },
    escortConditions: {
      length: "Over 120' - one escort",
      single: "Over 14′ – 1 escort | over 12 - one escort on 2 lane HW",
      height: "Over 14'6 - one escort",
      notes: "Might require escorts for 'Red Routes' roads (see attachments)"
    }
  }
};

const LabelValue = ({ label, value, labelWidth = "100px", vertical = false }: { label: string, value: React.ReactNode, labelWidth?: string, vertical?: boolean }) => (
  <div className={`flex ${vertical ? 'flex-col gap-4' : 'items-start gap-5'} w-full`}>
    <p className={`font-semibold text-brand-black text-[18px] shrink-0 ${!vertical ? `w-[${labelWidth}]` : ''}`}>{label}</p>
    <div className="flex-1 font-normal text-brand-black text-[18px]">
      {value}
    </div>
  </div>
);

const SectionCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="card-site w-full">
    <div className="flex flex-col gap-8">
      <p className="capitalize font-semibold text-brand-black text-[28px] w-full">{title}</p>
      <div className="flex flex-col gap-5">
        {children}
      </div>
    </div>
  </div>
);

export const Regulations = () => {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);

  const mapHandler = (event: any) => {
    const stateCode = event.target.dataset.name;
    setSelectedStateCode(stateCode);
  };

  const stateDetails = selectedStateCode ? mockStatesData[selectedStateCode] : null;

  return (
    <div className="animate-in fade-in duration-500 font-['Hind',sans-serif] h-full">
      <div className="flex flex-col lg:flex-row gap-10 h-full items-stretch">
        {/* Map Section */}
        <div className={`flex-1 transition-all duration-500 py-10 ${selectedStateCode ? 'lg:w-1/2' : 'w-full'}`}>
          <div className="flex items-center gap-4 mb-10">
            <h1 className="heading-h1">Regulations</h1>
          </div>
          
          <div className="usa-map-container">
            <USAMap 
              onClick={mapHandler} 
              defaultFill="#B0B0B0" 
              customize={selectedStateCode ? {
                [selectedStateCode]: {
                  fill: "#8E8E8E"
                }
              } : {}}
            />
          </div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            .usa-map-container svg {
              width: 100%;
              height: auto;
            }
            path {
              cursor: pointer;
              transition: fill 0.2s ease;
            }
            path:hover {
              fill: #8E8E8E;
            }
          `}} />
        </div>

        {/* Detail Panel */}
        {selectedStateCode && (
          <div className="w-full lg:w-[480px] bg-brand-white rounded-l-[32px] shadow-site flex flex-col h-[calc(100vh-40px)] animate-in slide-in-from-right duration-500 overflow-hidden sticky top-0 border-l border-gray-100">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-10 py-[60px] flex flex-col gap-8 custom-scrollbar">
              {/* Header */}
              <div className="flex items-center justify-between w-full mb-2">
                <p className="capitalize font-semibold text-brand-black text-[40px] leading-tight">{stateDetails?.fullName || selectedStateCode}</p>
                <button 
                  onClick={() => setSelectedStateCode(null)}
                  className="btn-secondary !w-auto !py-2 !px-6"
                >
                  Back
                </button>
              </div>

              {stateDetails ? (
                <>
                  {/* DOT Info */}
                  <SectionCard title={`${stateDetails.fullName} DOT`}>
                    <LabelValue label="Phone#:" value={stateDetails.phone} />
                    <LabelValue label="Email:" value={stateDetails.email} />
                    <LabelValue label="Fax#" value={stateDetails.fax} />
                    <LabelValue label="Hours:" value={stateDetails.hours} />
                    <LabelValue 
                      label="Link:" 
                      value={
                        <div className="flex items-center gap-1 cursor-pointer group">
                          <div className="size-4">
                            <svg viewBox="0 0 16 16" fill="none">
                              <path d={svgPaths.p2cf99a40} fill="#1C1B1F" />
                            </svg>
                          </div>
                          <span className="group-hover:underline">Permit Page</span>
                        </div>
                      } 
                    />
                  </SectionCard>

                  {/* Operating Time */}
                  <div className="flex flex-col gap-5 text-[#0d0d0e]">
                    <p className="capitalize font-semibold text-[28px]">Operating Time</p>
                    <p className="font-normal text-[18px] leading-relaxed">
                      {stateDetails.operatingTime}
                    </p>
                  </div>

                  {/* Legal Dimensions */}
                  <SectionCard title="Legal dimensions">
                    <LabelValue label="Length:" value={stateDetails.legalDimensions.length} />
                    <LabelValue label="Width:" value={stateDetails.legalDimensions.width} />
                    <LabelValue label="Height:" value={stateDetails.legalDimensions.height} />
                    <LabelValue label="Overhang:" value={stateDetails.legalDimensions.overhang} />
                    <LabelValue 
                      label="Weight:" 
                      value={
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-1 items-center">
                            <span className="w-20 font-normal">Gross:</span>
                            <span className="font-normal">{stateDetails.legalDimensions.weight.gross}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="w-20 font-normal">Single:</span>
                            <span className="font-normal">{stateDetails.legalDimensions.weight.single}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="w-20 font-normal">Tandem:</span>
                            <span className="font-normal">{stateDetails.legalDimensions.weight.tandem}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="w-20 font-normal">Tridem:</span>
                            <span className="font-normal">{stateDetails.legalDimensions.weight.tridem}</span>
                          </div>
                        </div>
                      } 
                    />
                  </SectionCard>

                  {/* Weight Limits */}
                  <SectionCard title="Weight Limits">
                    <LabelValue label="Gross:" value={stateDetails.weightLimits.gross} />
                    <LabelValue label="Single:" value={stateDetails.weightLimits.single} />
                    <LabelValue label="Tandem:" value={stateDetails.weightLimits.tandem} />
                    <LabelValue label="Tridem:" value={stateDetails.weightLimits.tridem} />
                    <LabelValue label="Notes:" value={stateDetails.weightLimits.notes} />
                  </SectionCard>

                  {/* Escort Conditions */}
                  <SectionCard title="Escort Conditions">
                    <LabelValue label="Length:" value={stateDetails.escortConditions.length} />
                    <LabelValue label="Single:" value={stateDetails.escortConditions.single} />
                    <LabelValue label="Height:" value={stateDetails.escortConditions.height} />
                    <LabelValue label="Notes:" value={stateDetails.escortConditions.notes} />
                  </SectionCard>
                </>
              ) : (
                <div className="py-20 text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-400">Data Coming Soon</h3>
                  <p className="text-gray-400">We are currently updating the regulations for {selectedStateCode}.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(13, 13, 14, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(13, 13, 14, 0.2);
        }
      `}} />
    </div>
  );
};
