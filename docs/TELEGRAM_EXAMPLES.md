# Telegram Message Examples

This document shows examples of how form submissions will appear in your Telegram group.

## Contact Reach Out Form

When someone submits the "Contact Reach Out" form, you'll receive a message like this:

```
🔔 New Contact Form Submission

📋 Form Type: Contact Reach Out
⏰ Time: Feb 9, 2026, 4:30 PM

👤 Name: John Smith
📧 Email: john.smith@example.com
📱 Phone: +1 (555) 123-4567

---
Sent from Lynx Permits Website
```

## Services Contact Form

When someone submits the Services contact form, you'll receive:

```
🔔 New Service Request

⏰ Time: Feb 9, 2026, 4:35 PM

👤 Name: Jane Doe
📧 Email: jane.doe@example.com
📱 Phone: +1 (555) 987-6543
🛠️ Service: Permit Acquisition

💬 Message:
I need assistance with obtaining permits for oversized load transportation across multiple states. Please contact me at your earliest convenience.

---
Sent from Lynx Permits Website
```

## Benefits of Telegram Notifications

### ✅ Instant Alerts

- Get notified immediately when a form is submitted
- No need to constantly check email
- Push notifications on your phone

### ✅ Team Collaboration

- Everyone in the group sees the notification
- Quick discussion about how to respond
- Assign team members to follow up

### ✅ Message History

- All submissions are saved in the chat
- Easy to search and reference later
- No risk of emails getting lost in spam

### ✅ Rich Formatting

- Emojis make messages easy to scan
- Clear structure with labeled fields
- Timestamps for tracking

## Customization

You can customize the message format by editing the utility functions in `src/utils/telegram.ts`:

- Change emojis
- Add/remove fields
- Modify the layout
- Add custom branding

## Privacy Note

Remember that all messages sent to the Telegram group will be visible to all group members. Ensure your team understands they're handling customer contact information responsibly.
