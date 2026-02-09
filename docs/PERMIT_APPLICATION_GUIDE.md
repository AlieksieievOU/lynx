# Permit Application System

## Overview

The Permit Application System allows users to submit comprehensive oversize/overweight permit applications through a web form. Upon submission, the system:

1. **Validates** all form data
2. **Generates** a professional PDF with all application details
3. **Sends** the PDF and a summary message to Telegram
4. **Provides** immediate feedback to the user

## Features

### Comprehensive Form Fields

The application form includes all fields from the Lynx Permits PDF form:

#### Company Information

- Company Name
- Contact Name
- Phone & Email
- Federal ID / EIN
- IFTA #
- USDOT #
- Application Date

#### Permit Type

- Oversize
- Overweight
- OS/OW (Oversize/Overweight)
- Dispatch Reference (optional)

#### Route Information

- Starting Address (Street, City, State, Zip)
- Delivery Address (Street, City, State, Zip)

#### Truck Information

- Truck Number
- Year, Make
- Plate #, State
- VIN (17 digits)

#### Trailer Information

- Trailer Number
- Year, Size, Make
- Plate #, State
- VIN (17 digits)
- Trailer Type

#### Load Information

- Load Description
- Machinery Make, Model, S/N
- Number of Pieces

#### Dimensions & Weight

**Load Only:**

- Weight (lbs)
- Height, Width, Length (ft)

**Total (Load + Truck/Trailer):**

- Weight (lbs)
- Height, Width, Length (ft)

**Additional:**

- Overhang Front/Rear
- Loading Type (End-to-End, Single Item, Stacked, Side-by-Side)
- Truck Axles, Trailer Axles, Total Axles

#### Route Details

- States of Travel with Routes and Start Dates
- Additional Information (including map links)

## PDF Generation

### Professional Format

The generated PDF includes:

- **Header**: Lynx Permits branding with black background
- **Metadata**: Application date and permit type
- **Organized Sections**: All information grouped logically
- **Brand Colors**: Consistent with theme.css
- **Multi-page Support**: Automatic page breaks
- **Footer**: Page numbers and branding

### Filename Format

```
permit_[company_name]_YYYY-MM-DD.pdf
```

Example: `permit_amex_transport_inc_2026-02-09.pdf`

## Telegram Integration

### Message Format

```
🔔 New Permit Application

📋 Company: Amex Transport INC
👤 Contact: John Doe
📧 Email: contact@company.com
📱 Phone: 937-528-9614

🚛 Permit Type: OVERWEIGHT
📦 Load: Volvo Hoist carbody

📍 Route:
From: Atlanta, GA
To: Newark, CA

⏰ Date: 2026-01-29

---
Sent from Lynx Permits Application System
```

### PDF Document

- Sent as a document attachment
- Caption: `📄 Permit Application - [Company Name]`
- Full application details in professional format

## Navigation

The permit application page is accessible from:

### Desktop Navigation

- **"Apply for Permit"** link in main navigation bar
- Located between "Our Services" and "Contact Us"

### Mobile Navigation

- **"Apply for Permit"** link in mobile menu
- Same position as desktop

### Direct URL

```
/permit-application
```

## User Experience

### Form Submission Flow

1. User fills out the comprehensive form
2. Client-side validation ensures all required fields are complete
3. On submit:
   - Form data is validated with Zod
   - PDF is generated
   - Telegram message and PDF are sent in parallel
   - Success message is displayed

### Success State

After successful submission:

- ✅ Green checkmark icon
- Success message: "Application submitted successfully! We'll contact you soon."
- Option to submit another application

### Error Handling

- Field-level validation errors shown in red
- Form-level error messages
- Graceful degradation if Telegram fails
- Console logging for debugging

## Technical Implementation

### Files Created

1. **`src/app/pages/PermitApplicationPage.tsx`**
   - Main form component
   - Form validation with Zod
   - Submission handling
   - Success/error states

2. **`src/utils/permitPdfGenerator.ts`**
   - PDF generation logic
   - Professional formatting
   - Multi-page support
   - Brand consistency

### Files Modified

1. **`src/app/App.tsx`**
   - Added route: `/permit-application`

2. **`src/app/components/Navbar.tsx`**
   - Added "Apply for Permit" link (desktop & mobile)
   - Removed old "Permit order form" link

## Configuration

### Environment Variables

Required (same as contact forms):

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id
```

### Dependencies

Uses existing dependencies:

- `jspdf` - PDF generation
- `zod` - Form validation
- `react-router-dom` - Routing

## Testing

### Test the Form

1. Navigate to `/permit-application`
2. Fill out all required fields (marked with \*)
3. Submit the form
4. Check Telegram for:
   - Text message with summary
   - PDF document with full details

### Test PDF Generation Locally

Add a test button to download PDF without submitting:

```tsx
import { downloadPermitPDF } from "@/utils/permitPdfGenerator";

<button
  onClick={() =>
    downloadPermitPDF({
      companyName: "Test Company",
      contactName: "John Doe",
      // ... other required fields
    })
  }
>
  Download Test PDF
</button>;
```

## Customization

### Modify Form Fields

Edit `src/app/pages/PermitApplicationPage.tsx`:

1. Update the Zod schema (`permitSchema`)
2. Add/remove form fields in the JSX
3. Update the PDF generator if needed

### Modify PDF Layout

Edit `src/utils/permitPdfGenerator.ts`:

- Change colors in the constants
- Modify section headers
- Adjust spacing and layout
- Add/remove fields

### Modify Telegram Message

Edit the `telegramMessage` template in `PermitApplicationPage.tsx`:

```tsx
const telegramMessage = `
🔔 <b>New Permit Application</b>
// ... customize message format
`;
```

## Security

### Data Validation

- All fields validated with Zod
- Type-safe form handling
- XSS protection through React

### Sensitive Data

- Form data sent only to configured Telegram group
- No data stored in browser
- Environment variables for API credentials

## Future Enhancements

Potential improvements:

- [ ] Save applications to database
- [ ] Email confirmation to applicant
- [ ] Admin dashboard to view applications
- [ ] Application status tracking
- [ ] Multiple permit types with different forms
- [ ] File upload for supporting documents
- [ ] Integration with permit processing systems
- [ ] Automated permit cost calculation
- [ ] Payment integration

## Support

For assistance:

- **Email**: permits@lynxpermits.com
- **Phone**: 847-595-0652

## Related Documentation

- `docs/PDF_TELEGRAM_GUIDE.md` - General PDF & Telegram integration
- `docs/QUICK_REFERENCE_PDF.md` - Quick reference for PDF features
- `docs/TELEGRAM_SETUP.md` - Telegram bot setup guide
