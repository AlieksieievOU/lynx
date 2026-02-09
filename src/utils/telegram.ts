/**
 * Telegram Bot API Utility
 * Sends messages to a Telegram group/chat using the Bot API
 */

interface TelegramMessageOptions {
  parseMode?: 'HTML' | 'Markdown' | 'MarkdownV2';
  disableWebPagePreview?: boolean;
  disableNotification?: boolean;
}

interface TelegramResponse {
  ok: boolean;
  result?: any;
  description?: string;
  error_code?: number;
}

/**
 * Sends a message to a Telegram chat
 * @param message - The message text to send
 * @param options - Optional message formatting options
 * @returns Promise that resolves when message is sent
 */
export async function sendTelegramMessage(
  message: string,
  options: TelegramMessageOptions = {}
): Promise<void> {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Telegram configuration missing. Please set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID');
    throw new Error('Telegram configuration is incomplete');
  }

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: options.parseMode || 'HTML',
    disable_web_page_preview: options.disableWebPagePreview ?? true,
    disable_notification: options.disableNotification ?? false,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data: TelegramResponse = await response.json();

    if (!data.ok) {
      throw new Error(`Telegram API Error: ${data.description || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    throw error;
  }
}

/**
 * Formats contact form data into a nicely formatted Telegram message
 * @param data - Contact form data
 * @returns Formatted HTML message
 */
export function formatContactMessage(data: {
  name: string;
  email: string;
  phone: string;
  formType?: string;
}): string {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
🔔 <b>New Contact Form Submission</b>

📋 <b>Form Type:</b> ${data.formType || 'Contact Reach Out'}
⏰ <b>Time:</b> ${timestamp}

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📱 <b>Phone:</b> ${data.phone}

---
<i>Sent from Lynx Permits Website</i>
  `.trim();
}

/**
 * Formats service request data into a Telegram message
 * @param data - Service request form data
 * @returns Formatted HTML message
 */
export function formatServiceMessage(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}): string {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
🔔 <b>New Service Request</b>

⏰ <b>Time:</b> ${timestamp}

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📱 <b>Phone:</b> ${data.phone}
🛠️ <b>Service:</b> ${data.service}

${data.message ? `💬 <b>Message:</b>\n${data.message}` : ''}

---
<i>Sent from Lynx Permits Website</i>
  `.trim();
}

/**
 * Sends a PDF document to a Telegram chat
 * @param pdfBlob - The PDF file as a Blob
 * @param filename - The filename for the PDF
 * @param caption - Optional caption for the document
 * @returns Promise that resolves when document is sent
 */
export async function sendTelegramDocument(
  pdfBlob: Blob,
  filename: string,
  caption?: string
): Promise<void> {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Telegram configuration missing. Please set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID');
    throw new Error('Telegram configuration is incomplete');
  }

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

  // Create FormData for file upload
  const formData = new FormData();
  formData.append('chat_id', CHAT_ID);
  formData.append('document', pdfBlob, filename);
  
  if (caption) {
    formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const data: TelegramResponse = await response.json();

    if (!data.ok) {
      throw new Error(`Telegram API Error: ${data.description || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Failed to send Telegram document:', error);
    throw error;
  }
}
