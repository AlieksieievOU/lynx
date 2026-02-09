import jsPDF from "jspdf";

// Brand colors from theme.css
const brandBlack: [number, number, number] = [13, 13, 14]; // #0d0d0e
const brandWhite: [number, number, number] = [255, 255, 255]; // #ffffff
const siteBg: [number, number, number] = [252, 252, 252]; // #fcfcfc
const brandMuted: [number, number, number] = [113, 113, 130]; // Muted text color

export interface PermitData {
  // Company Information
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  federalId?: string;
  ifta?: string;
  usdot?: string;
  date: string;
  
  // Permit Type
  permitType: string;
  dispatchRef?: string;
  
  // Addresses
  startingAddress: string;
  startingCity: string;
  startingState: string;
  startingZip?: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryState: string;
  deliveryZip?: string;
  
  // Truck Information
  truckNumber: string;
  truckYear: string;
  truckMake: string;
  truckPlate: string;
  truckState: string;
  truckVin: string;
  
  // Trailer Information
  trailerNumber?: string;
  trailerYear?: string;
  trailerSize?: string;
  trailerMake?: string;
  trailerPlate?: string;
  trailerState?: string;
  trailerVin?: string;
  trailerType?: string;
  
  // Load Information
  loadDescription: string;
  machineryMake?: string;
  machineryModel?: string;
  machinerySn?: string;
  numberOfPieces?: string;
  
  // Dimensions
  loadWeight: string;
  loadHeight: string;
  loadWidth: string;
  loadLength: string;
  totalWeight: string;
  totalHeight: string;
  totalWidth: string;
  totalLength: string;
  overhangFront?: string;
  overhangRear?: string;
  loadingType: string;
  truckAxles?: string;
  trailerAxles?: string;
  totalAxles: string;
  
  // Route Information
  routeInfo: string;
  additionalInfo?: string;
}

/**
 * Generate a professional PDF for permit application
 */
export function generatePermitPDF(data: PermitData): Blob {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - 2 * margin;
  let yPos = margin;

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Header
  doc.setFillColor(...brandBlack);
  doc.rect(0, 0, pageWidth, 80, "F");
  doc.setTextColor(...brandWhite);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("LYNX PERMITS", margin, 35);
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Permit Application Form", margin, 55);

  yPos = 100;

  // Document metadata
  doc.setTextColor(...brandMuted);
  doc.setFontSize(10);
  doc.text(`Application Date: ${data.date}`, margin, yPos);
  doc.text(`Permit Type: ${data.permitType.toUpperCase()}`, pageWidth - margin, yPos, { align: "right" });
  yPos += 30;

  // Section helper function
  const addSection = (title: string) => {
    checkPageBreak(40);
    doc.setFillColor(...brandBlack);
    doc.rect(margin, yPos - 5, contentWidth, 25, "F");
    doc.setTextColor(...brandWhite);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin + 10, yPos + 10);
    yPos += 35;
    doc.setTextColor(...brandBlack);
  };

  // Field helper function
  const addField = (label: string, value: string | undefined, width: number = contentWidth) => {
    if (checkPageBreak(25)) {
      // If new page, don't add extra space
    }
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...brandMuted);
    doc.text(label, margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...brandBlack);
    doc.setFontSize(10);
    const displayValue = value || "N/A";
    doc.text(displayValue, margin, yPos + 12, { maxWidth: width - 10 });
    yPos += 25;
  };

  // Two-column field helper
  const addFieldRow = (label1: string, value1: string | undefined, label2: string, value2: string | undefined) => {
    checkPageBreak(25);
    const col2X = margin + contentWidth / 2;
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...brandMuted);
    doc.text(label1, margin, yPos);
    doc.text(label2, col2X, yPos);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...brandBlack);
    doc.setFontSize(10);
    doc.text(value1 || "N/A", margin, yPos + 12, { maxWidth: contentWidth / 2 - 20 });
    doc.text(value2 || "N/A", col2X, yPos + 12, { maxWidth: contentWidth / 2 - 20 });
    yPos += 25;
  };

  // Company Information
  addSection("COMPANY INFORMATION");
  addFieldRow("Company Name", data.companyName, "Contact Name", data.contactName);
  addFieldRow("Phone", data.phone, "Email", data.email);
  addFieldRow("Federal ID / EIN", data.federalId, "USDOT #", data.usdot);
  addFieldRow("IFTA #", data.ifta, "Dispatch Reference", data.dispatchRef);
  yPos += 10;

  // Route Information
  addSection("ROUTE INFORMATION");
  
  // Starting Address
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Starting Address:", margin, yPos);
  yPos += 15;
  doc.setFont("helvetica", "normal");
  doc.text(`${data.startingAddress}`, margin + 10, yPos);
  yPos += 12;
  doc.text(`${data.startingCity}, ${data.startingState} ${data.startingZip || ""}`, margin + 10, yPos);
  yPos += 20;

  // Delivery Address
  doc.setFont("helvetica", "bold");
  doc.text("Delivery Address:", margin, yPos);
  yPos += 15;
  doc.setFont("helvetica", "normal");
  doc.text(`${data.deliveryAddress}`, margin + 10, yPos);
  yPos += 12;
  doc.text(`${data.deliveryCity}, ${data.deliveryState} ${data.deliveryZip || ""}`, margin + 10, yPos);
  yPos += 25;

  // Truck Information
  addSection("TRUCK INFORMATION");
  addFieldRow("Truck #", data.truckNumber, "Year", data.truckYear);
  addFieldRow("Make", data.truckMake, "Plate #", data.truckPlate);
  addFieldRow("State", data.truckState, "VIN", data.truckVin);
  yPos += 10;

  // Trailer Information
  addSection("TRAILER INFORMATION");
  addFieldRow("Trailer #", data.trailerNumber, "Year", data.trailerYear);
  addFieldRow("Make", data.trailerMake, "Size", data.trailerSize);
  addFieldRow("Plate #", data.trailerPlate, "State", data.trailerState);
  addFieldRow("VIN", data.trailerVin, "Type", data.trailerType);
  yPos += 10;

  // Load Information
  addSection("LOAD INFORMATION");
  addField("Load Description", data.loadDescription);
  addFieldRow("Machinery Make", data.machineryMake, "Model", data.machineryModel);
  addFieldRow("S/N (BOL#)", data.machinerySn, "Number of Pieces", data.numberOfPieces);
  yPos += 10;

  // Dimensions & Weight
  addSection("DIMENSIONS & WEIGHT");
  
  // Load Only
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Load Only:", margin, yPos);
  yPos += 15;
  addFieldRow("Weight (lbs)", data.loadWeight, "Height (ft)", data.loadHeight);
  addFieldRow("Width (ft)", data.loadWidth, "Length (ft)", data.loadLength);
  yPos += 10;

  // Total
  doc.setFont("helvetica", "bold");
  doc.text("Total (Load + Truck/Trailer):", margin, yPos);
  yPos += 15;
  addFieldRow("Weight (lbs)", data.totalWeight, "Height (ft)", data.totalHeight);
  addFieldRow("Width (ft)", data.totalWidth, "Length (ft)", data.totalLength);
  yPos += 10;

  // Additional Dimensions
  addFieldRow("Overhang Front", data.overhangFront, "Overhang Rear", data.overhangRear);
  addFieldRow("Loading Type", data.loadingType, "Total Axles", data.totalAxles);
  addFieldRow("Truck Axles", data.truckAxles, "Trailer Axles", data.trailerAxles);
  yPos += 10;

  // Route Details
  addSection("ROUTE DETAILS");
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...brandMuted);
  doc.text("States of Travel, Route by Highway, and Start Date:", margin, yPos);
  yPos += 15;
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...brandBlack);
  doc.setFontSize(10);
  const routeLines = doc.splitTextToSize(data.routeInfo, contentWidth);
  routeLines.forEach((line: string) => {
    checkPageBreak(15);
    doc.text(line, margin, yPos);
    yPos += 15;
  });
  yPos += 10;

  if (data.additionalInfo) {
    checkPageBreak(40);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...brandMuted);
    doc.text("Additional Information:", margin, yPos);
    yPos += 15;
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...brandBlack);
    doc.setFontSize(10);
    const additionalLines = doc.splitTextToSize(data.additionalInfo, contentWidth);
    additionalLines.forEach((line: string) => {
      checkPageBreak(15);
      doc.text(line, margin, yPos);
      yPos += 15;
    });
  }

  // Footer on every page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(...siteBg);
    doc.rect(0, pageHeight - 40, pageWidth, 40, "F");
    doc.setTextColor(...brandMuted);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Generated by Lynx Permits Application System",
      pageWidth / 2,
      pageHeight - 20,
      { align: "center" }
    );
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 20, {
      align: "right",
    });
  }

  return doc.output("blob");
}

/**
 * Generate a standardized filename for the permit PDF
 */
export function generatePermitFilename(data: PermitData): string {
  const companySlug = data.companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
  
  const dateStr = new Date().toISOString().split("T")[0];
  
  return `permit_${companySlug}_${dateStr}.pdf`;
}

/**
 * Download the permit PDF locally (for testing)
 */
export function downloadPermitPDF(data: PermitData): void {
  const pdfBlob = generatePermitPDF(data);
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = generatePermitFilename(data);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
