# Quick Reference: PDF Generation & Telegram Integration

## ✅ What's Implemented

### Files Created

- `src/utils/pdfGenerator.ts` - PDF generation utility
- `docs/PDF_TELEGRAM_GUIDE.md` - Comprehensive documentation

### Files Updated

- `src/utils/telegram.ts` - Added `sendTelegramDocument()` function
- `src/app/components/ContactReachOut.tsx` - Generates & sends PDFs
- `src/app/pages/ServicesPage.tsx` - Generates & sends PDFs

### Dependencies Installed

- `jspdf` - PDF generation library

## 🚀 How It Works

When a user submits a contact form:

1. **Form data is validated** using Zod schema
2. **PDF is generated** with professional formatting
3. **Three parallel operations** execute:
   - ✉️ Email sent via EmailJS
   - 💬 Text message sent to Telegram
   - 📄 PDF document sent to Telegram
4. **Success if any one succeeds** (graceful degradation)

## 📦 What Gets Sent to Telegram

### Text Message

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

### PDF Document

Professional PDF with:

- Lynx Permits branding header
- Form metadata (type, timestamp)
- Contact information in styled boxes
- Service details (if applicable)
- Message content (if provided)
- Footer with generation info

## 🔧 Configuration Required

Add to your `.env` file:

```env
# Telegram Bot Configuration
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here

# EmailJS Configuration (optional)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `docs/TELEGRAM_SETUP.md` for detailed setup instructions.

## 💻 Usage Example

```tsx
import {
  sendTelegramMessage,
  sendTelegramDocument,
  formatContactMessage,
} from "@/utils/telegram";
import { generateContactPDF, generatePDFFilename } from "@/utils/pdfGenerator";

// Generate PDF
const pdfBlob = generateContactPDF({
  name: "John Doe",
  email: "john@example.com",
  phone: "+1-555-0123",
  formType: "Contact Form",
  message: "Optional message",
  service: "Optional service",
});

const pdfFilename = generatePDFFilename({
  name: "John Doe",
  email: "john@example.com",
  phone: "+1-555-0123",
});

// Send to Telegram
await sendTelegramMessage(
  formatContactMessage({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-555-0123",
    formType: "Contact Form",
  }),
);

await sendTelegramDocument(
  pdfBlob,
  pdfFilename,
  `📄 Contact Form Submission - John Doe`,
);
```

## 🎨 Customization

### Change PDF Colors

Edit `src/utils/pdfGenerator.ts`:

```typescript
// Brand Colors from theme.css
const brandBlack: [number, number, number] = [13, 13, 14]; // #0d0d0e
const brandWhite: [number, number, number] = [255, 255, 255]; // #ffffff
const siteBg: [number, number, number] = [252, 252, 252]; // #fcfcfc
const brandMuted: [number, number, number] = [113, 113, 130]; // Muted text
```

### Change Branding

Edit `src/utils/pdfGenerator.ts`:

```typescript
doc.text("LYNX PERMITS", margin, 20); // Change company name (uppercase)
doc.text("Contact Form Submission", margin, 30); // Change subtitle
```

### Add Custom Fields

Edit `src/utils/pdfGenerator.ts` in the `generateContactPDF` function:

```typescript
if (data.customField) {
  yPos += 10;
  doc.text("🏷️ Custom:", margin + 5, yPos);
  doc.text(data.customField, margin + 30, yPos);
}
```

## 🧪 Testing

### Test PDF Generation

1. Submit a contact form on your site
2. Check browser console for any errors
3. Check Telegram group for:
   - Formatted text message
   - PDF document attachment

### Test Locally

Add a test button:

```tsx
import { downloadContactPDF } from "@/utils/pdfGenerator";

<button
  onClick={() =>
    downloadContactPDF({
      name: "Test User",
      email: "test@example.com",
      phone: "+1-555-0123",
      formType: "Test",
    })
  }
>
  Download Test PDF
</button>;
```

## 🐛 Common Issues

### PDF Not Generating

- Check browser console for errors
- Verify jsPDF is installed: `npm list jspdf`
- Ensure all required data fields are provided

### PDF Not Sending to Telegram

- Verify bot token and chat ID in `.env`
- Check bot has permission to send files
- Verify file size is under 50MB
- Check browser console for API errors

### Environment Variables Not Loading

- Restart dev server after changing `.env`
- Verify variables start with `VITE_`
- Check `.env` is in project root

## 📚 Documentation

- **Full Guide**: `docs/PDF_TELEGRAM_GUIDE.md`
- **Telegram Setup**: `docs/TELEGRAM_SETUP.md`
- **jsPDF Docs**: https://github.com/parallax/jsPDF
- **Telegram Bot API**: https://core.telegram.org/bots/api

## 🎯 Next Steps

Consider implementing:

- [ ] Different PDF templates for different form types
- [ ] Email PDF attachments via EmailJS
- [ ] Database storage of submissions
- [ ] Admin dashboard to view submissions
- [ ] Automated responses with PDF receipts
- [ ] Multi-language PDF support
- [ ] Password-protected PDFs

## 🔐 Security Notes

- ✅ Never commit `.env` to version control
- ✅ Validate all form inputs before generating PDFs
- ✅ Sanitize user data to prevent XSS
- ✅ Limit file sizes to prevent abuse
- ✅ Ensure Telegram group is private
