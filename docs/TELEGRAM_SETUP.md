# Telegram Integration Setup Guide

This project uses Telegram Bot API to send form submissions directly to a Telegram group for instant notifications.

## 📋 Features

- ✅ Instant notifications to Telegram group when forms are submitted
- ✅ Dual notification system (EmailJS + Telegram)
- ✅ Graceful fallback (if one service fails, the other still works)
- ✅ Formatted messages with emojis for better readability
- ✅ Reusable utility functions for all forms

Done! Congratulations on your new bot. You will find it at t.me/lynx_permits_notifier_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
8365971717:AAGMeu-g2_5FxMxLtYahfCUjfrNwLSkHtTk
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api

## 🚀 Setup Instructions

### Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send the command `/newbot`
3. Follow the instructions:
   - Choose a name for your bot (e.g., "Lynx Permits Notifier")
   - Choose a username (must end in 'bot', e.g., "lynx_permits_notifier_bot")
4. **Save the Bot Token** you receive (format: `8365971717:AAGMeu-g2_5FxMxLtYahfCUjfrNwLSkHtTk`)

### Step 2: Create or Use a Telegram Group

1. Create a new Telegram group or use an existing one
2. Add your bot to the group:
   - Click on the group name → "Add Members"
   - Search for your bot's username and add it
3. **(Optional but recommended)** Make the bot an admin:
   - Click on the group name → "Administrators" → "Add Administrator"
   - Select your bot and grant necessary permissions

### Step 3: Get the Chat ID

There are two methods to get your group's Chat ID:

#### Method A: Using @RawDataBot (Easiest)

1. Add `@RawDataBot` to your group
2. The bot will immediately send a message showing the **Chat ID** (e.g., `-1001234567890`)
3. Copy the Chat ID
4. Remove `@RawDataBot` from the group (you don't need it anymore)

#### Method B: Using Telegram API

1. Send a message in your group (mention your bot with `@your_bot_name`)
2. Open this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
3. Look for `"chat":{"id":-1001234567890}` in the JSON response
4. Copy the Chat ID (the negative number)

### Step 4: Configure Environment Variables

Add these variables to your `.env` file:

```env
# Telegram Bot Configuration
VITE_TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIjKlmNoPqRsTuVwXyZ
VITE_TELEGRAM_CHAT_ID=-1001234567890
```

**Important Notes:**

- The Chat ID for groups is usually a **negative number** starting with `-100`
- Keep your Bot Token secret! Never commit it to version control
- Make sure `.env` is in your `.gitignore`

### Step 5: Restart Your Development Server

After updating the `.env` file, restart your dev server:

```bash
npm run dev
```

## 📝 Usage

### Using the Telegram Utility in Your Forms

The Telegram utility is already integrated into:

- `ContactReachOut.tsx` - Contact reach out form
- `ServicesPage.tsx` - Services contact form

To add Telegram notifications to other forms:

```tsx
import { sendTelegramMessage, formatContactMessage } from "@/utils/telegram";

// In your form action:
const telegramPromise = sendTelegramMessage(
  formatContactMessage({
    name: "John Doe",
    email: "john@example.com",
    phone: "555-1234",
    formType: "Custom Form",
  }),
);

// Or for service requests:
import { formatServiceMessage } from "@/utils/telegram";

const telegramPromise = sendTelegramMessage(
  formatServiceMessage({
    name: "John Doe",
    email: "john@example.com",
    phone: "555-1234",
    service: "Permit Acquisition",
    message: "I need help with...",
  }),
);
```

### Custom Message Formatting

You can also send custom formatted messages:

```tsx
import { sendTelegramMessage } from "@/utils/telegram";

const customMessage = `
🔔 <b>Custom Notification</b>

📋 <b>Type:</b> Order Update
👤 <b>User:</b> John Doe
📦 <b>Order ID:</b> #12345

---
<i>Sent from Lynx Permits</i>
`;

await sendTelegramMessage(customMessage, {
  parseMode: "HTML",
  disableNotification: false,
});
```

## 🎨 Message Formatting

Telegram supports HTML formatting. Available tags:

- `<b>bold</b>` - **Bold text**
- `<i>italic</i>` - _Italic text_
- `<code>code</code>` - `Monospace code`
- `<a href="url">link</a>` - [Hyperlink](url)

Emojis are fully supported! 🎉

## 🔧 Troubleshooting

### Bot not receiving messages?

- Make sure the bot is added to the group
- Verify the Chat ID is correct (should be negative for groups)
- Check that the Bot Token is valid

### Getting "Forbidden: bot was blocked by the user"?

- The bot needs to be added to the group
- Make sure you're using the group Chat ID, not a user Chat ID

### Messages not formatted correctly?

- Ensure you're using valid HTML tags
- Check that `parseMode` is set to `'HTML'`

### Environment variables not loading?

- Restart your development server after changing `.env`
- Verify the variable names start with `VITE_`
- Check that `.env` is in the project root

## 📊 How It Works

1. User submits a form
2. Form data is validated using Zod schema
3. Two parallel requests are made:
   - EmailJS sends an email notification
   - Telegram Bot API sends a message to the group
4. Both requests use `Promise.allSettled()` to ensure:
   - If one fails, the other still completes
   - User sees success if at least one notification is sent
5. Errors are logged to console for debugging

## 🔐 Security Best Practices

- ✅ Never commit `.env` to version control
- ✅ Use environment variables for sensitive data
- ✅ Validate all form inputs before sending
- ✅ Keep your Bot Token secret
- ✅ Regularly rotate your Bot Token if exposed

## 📚 API Reference

### `sendTelegramMessage(message, options?)`

Sends a message to the configured Telegram chat.

**Parameters:**

- `message` (string): The message text to send
- `options` (object, optional):
  - `parseMode`: `'HTML'` | `'Markdown'` | `'MarkdownV2'` (default: `'HTML'`)
  - `disableWebPagePreview`: boolean (default: `true`)
  - `disableNotification`: boolean (default: `false`)

**Returns:** `Promise<void>`

### `formatContactMessage(data)`

Formats contact form data into a Telegram message.

**Parameters:**

- `data.name` (string): Contact name
- `data.email` (string): Contact email
- `data.phone` (string): Contact phone
- `data.formType` (string, optional): Type of form (default: "Contact Reach Out")

**Returns:** Formatted HTML string

### `formatServiceMessage(data)`

Formats service request data into a Telegram message.

**Parameters:**

- `data.name` (string): Contact name
- `data.email` (string): Contact email
- `data.phone` (string): Contact phone
- `data.service` (string): Service type
- `data.message` (string, optional): Additional message

**Returns:** Formatted HTML string

## 📞 Support

If you encounter any issues, check:

1. Console logs for error messages
2. Telegram Bot API status
3. Environment variable configuration

For more information, visit the [Telegram Bot API Documentation](https://core.telegram.org/bots/api).
