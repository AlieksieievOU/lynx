# PDF Generation and Telegram Integration Guide

This guide explains how to generate PDFs from contact form data and send them to Telegram.

## 📋 Overview

The system now supports:

- ✅ **PDF Generation** - Automatically creates professional PDFs from form submissions
- ✅ **Telegram Document Upload** - Sends PDFs directly to your Telegram group
- ✅ **Dual Notification** - Sends both a formatted text message AND a PDF document
- ✅ **Triple Redundancy** - EmailJS, Telegram message, and Telegram PDF (if one fails, others still work)

## 🚀 How It Works

### Workflow

1. **User submits contact form** → Form data is validated
2. **PDF is generated** → Professional PDF created with branding and formatting
3. **Three parallel operations**:
   - Email sent via EmailJS
   - Formatted message sent to Telegram
   - PDF document sent to Telegram
4. **Success if any one succeeds** → Graceful degradation

### What Gets Sent to Telegram

#### 1. Text Message (Instant Notification)

```
🔔 New Contact Form Submission

📋 Form Type: Contact Reach Out
⏰ Time: Feb 9, 2026, 6:30 PM

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +1-555-0123

---
Sent from Lynx Permits Website
```

#### 2. PDF Document (Detailed Record)

A professionally formatted PDF containing:

- **Header** with Lynx Permits branding
- **Form metadata** (type, timestamp)
- **Contact information** in styled boxes
- **Service details** (if applicable)
- **Message content** (if provided)
- **Footer** with generation info

## 📦 Installation

The required dependencies are already installed:

```bash
npm install jspdf --legacy-peer-deps
```

## 🔧 Configuration

### Environment Variables

Make sure your `.env` file contains:

```env
# Telegram Bot Configuration
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here

# EmailJS Configuration (optional but recommended)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `TELEGRAM_SETUP.md` for detailed setup instructions.

## 💻 Usage

### Basic Implementation (Already Done in ContactReachOut.tsx)

```tsx
import {
  sendTelegramMessage,
  sendTelegramDocument,
  formatContactMessage,
} from "@/utils/telegram";
import { generateContactPDF, generatePDFFilename } from "@/utils/pdfGenerator";

// In your form action:
async function handleSubmit(formData: FormData) {
  // Validate data...

  // Generate PDF
  const pdfBlob = generateContactPDF({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-555-0123",
    formType: "Contact Form",
  });

  const pdfFilename = generatePDFFilename({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-555-0123",
  });

  // Send to Telegram
  const messagePromise = sendTelegramMessage(
    formatContactMessage({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1-555-0123",
      formType: "Contact Form",
    }),
  );

  const pdfPromise = sendTelegramDocument(
    pdfBlob,
    pdfFilename,
    `📄 Contact Form Submission - John Doe`,
  );

  // Wait for both
  await Promise.allSettled([messagePromise, pdfPromise]);
}
```

### Adding to Other Forms

To add PDF generation to other forms (e.g., `ServicesPage.tsx`, `ContactDetails.tsx`):

```tsx
import { sendTelegramDocument, formatServiceMessage } from "@/utils/telegram";
import { generateContactPDF, generatePDFFilename } from "@/utils/pdfGenerator";

// In your form action:
const pdfBlob = generateContactPDF({
  name: validatedFields.data.name,
  email: validatedFields.data.email,
  phone: validatedFields.data.phone,
  service: validatedFields.data.service, // For service forms
  message: validatedFields.data.message, // Optional message
  formType: "Service Request",
});

const pdfFilename = generatePDFFilename({
  name: validatedFields.data.name,
  email: validatedFields.data.email,
  phone: validatedFields.data.phone,
});

await sendTelegramDocument(
  pdfBlob,
  pdfFilename,
  `📄 Service Request - ${validatedFields.data.name}`,
);
```

## 🎨 PDF Customization

### Customizing PDF Appearance

Edit `src/utils/pdfGenerator.ts` to customize:

#### Colors (Currently Using Brand Colors from theme.css)

```typescript
// Brand Colors from theme.css
const brandBlack: [number, number, number] = [13, 13, 14]; // #0d0d0e
const brandWhite: [number, number, number] = [255, 255, 255]; // #ffffff
const siteBg: [number, number, number] = [252, 252, 252]; // #fcfcfc
const brandMuted: [number, number, number] = [113, 113, 130]; // Muted text color
```

#### Branding

```typescript
doc.text("LYNX PERMITS", margin, 20); // Change company name (uppercase)
doc.text("Contact Form Submission", margin, 30); // Change subtitle
```

#### Layout

```typescript
const margin = 20; // Page margins in mm
const pageWidth = doc.internal.pageSize.getWidth();
const contentWidth = pageWidth - 2 * margin;
```

### Adding Custom Fields

To add custom fields to the PDF:

```typescript
// In generateContactPDF function, after phone number:
if (data.customField) {
  yPos += 10;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...primaryColor);
  doc.text("🏷️ Custom:", margin + 5, yPos);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textColor);
  doc.text(data.customField, margin + 30, yPos);
}
```

## 📊 API Reference

### PDF Generator Functions

#### `generateContactPDF(data: ContactFormData): Blob`

Generates a PDF from contact form data.

**Parameters:**

- `data.name` (string, required) - Contact name
- `data.email` (string, required) - Contact email
- `data.phone` (string, required) - Contact phone
- `data.formType` (string, optional) - Type of form (default: "Contact Reach Out")
- `data.message` (string, optional) - Additional message
- `data.service` (string, optional) - Service type

**Returns:** PDF as Blob

#### `generatePDFFilename(data: ContactFormData): string`

Generates a filename for the PDF.

**Format:** `contact_John_Doe_2026-02-09.pdf`

**Parameters:**

- `data.name` (string, required) - Used in filename
- `data.email` (string, required) - Required for interface
- `data.phone` (string, required) - Required for interface

**Returns:** Filename string

#### `downloadContactPDF(data: ContactFormData): void`

Downloads the PDF to the user's device (client-side only).

### Telegram Functions

#### `sendTelegramDocument(pdfBlob: Blob, filename: string, caption?: string): Promise<void>`

Sends a PDF document to Telegram.

**Parameters:**

- `pdfBlob` (Blob, required) - The PDF file
- `filename` (string, required) - Filename for the document
- `caption` (string, optional) - Caption with HTML formatting

**Returns:** Promise that resolves when sent

## 🔍 Testing

### Test PDF Generation Locally

Add a download button to test PDF generation:

```tsx
import { downloadContactPDF } from "@/utils/pdfGenerator";

<button
  onClick={() =>
    downloadContactPDF({
      name: "Test User",
      email: "test@example.com",
      phone: "+1-555-0123",
      formType: "Test Form",
    })
  }
>
  Download Test PDF
</button>;
```

### Test Telegram Upload

1. Submit the contact form
2. Check your Telegram group for:
   - Formatted text message
   - PDF document attachment
3. Check browser console for any errors

## 🐛 Troubleshooting

### PDF Not Generating

**Issue:** PDF generation fails or produces blank PDFs

**Solutions:**

- Check browser console for errors
- Verify jsPDF is installed: `npm list jspdf`
- Ensure all required data fields are provided
- Test with simple data first

### PDF Not Sending to Telegram

**Issue:** PDF generates but doesn't send to Telegram

**Solutions:**

- Verify Telegram bot token and chat ID are correct
- Check that bot has permission to send files in the group
- Verify file size is under Telegram's 50MB limit
- Check browser console for API errors

### Telegram API Errors

Common errors and solutions:

| Error                         | Cause             | Solution                   |
| ----------------------------- | ----------------- | -------------------------- |
| `Forbidden: bot was blocked`  | Bot not in group  | Add bot to Telegram group  |
| `Bad Request: chat not found` | Wrong chat ID     | Verify chat ID is correct  |
| `Request Entity Too Large`    | File too big      | Reduce PDF size or content |
| `Unauthorized`                | Invalid bot token | Check bot token in `.env`  |

### Environment Variables Not Loading

**Issue:** Configuration errors about missing variables

**Solutions:**

- Restart dev server after changing `.env`
- Verify variables start with `VITE_`
- Check `.env` is in project root
- Ensure `.env` is not in `.gitignore` (it should be!)

## 🔐 Security Considerations

### Best Practices

- ✅ **Never commit `.env`** to version control
- ✅ **Validate all form inputs** before generating PDFs
- ✅ **Sanitize user data** to prevent XSS in PDFs
- ✅ **Limit file sizes** to prevent abuse
- ✅ **Rate limit submissions** to prevent spam

### Data Privacy

- PDFs contain sensitive contact information
- Ensure Telegram group is private
- Consider adding password protection for PDFs (advanced)
- Implement data retention policies

## 📈 Advanced Features

### Adding Password Protection to PDFs

jsPDF doesn't natively support password protection. For this feature, consider:

1. Using a backend service to encrypt PDFs
2. Using `pdf-lib` library for more advanced features
3. Implementing server-side PDF generation

### Adding Images/Logos to PDFs

```typescript
// In generateContactPDF function:
const imgData = "data:image/png;base64,..."; // Your logo as base64
doc.addImage(imgData, "PNG", margin, 10, 30, 15);
```

### Custom PDF Templates

Create multiple PDF templates for different form types:

```typescript
export function generateServiceRequestPDF(data: ServiceFormData): Blob {
  // Custom template for service requests
}

export function generateQuotePDF(data: QuoteFormData): Blob {
  // Custom template for quotes
}
```

## 📞 Support

If you encounter issues:

1. Check browser console for errors
2. Verify all environment variables are set
3. Test with minimal data first
4. Review Telegram Bot API logs
5. Check jsPDF documentation: https://github.com/parallax/jsPDF

## 🎯 Next Steps

Consider implementing:

- [ ] PDF templates for different form types
- [ ] Email attachments (send PDF via EmailJS)
- [ ] Database storage of submissions
- [ ] Admin dashboard to view submissions
- [ ] Automated responses with PDF receipts
- [ ] Multi-language PDF support

## 📚 Related Documentation

- [Telegram Setup Guide](./TELEGRAM_SETUP.md)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [Telegram Bot API](https://core.telegram.org/bots/api)
