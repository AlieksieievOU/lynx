# GitHub Secrets Setup for Telegram Integration

To deploy your application with Telegram integration, you need to add the Telegram environment variables as GitHub Secrets.

## 📋 Required GitHub Secrets

You need to add these secrets to your GitHub repository:

### Existing Secrets (EmailJS)

- ✅ `VITE_EMAILJS_SERVICE_ID`
- ✅ `VITE_EMAILJS_TEMPLATE_ID`
- ✅ `VITE_EMAILJS_PUBLIC_KEY`

### New Secrets (Telegram) - **ACTION REQUIRED**

- ⚠️ `VITE_TELEGRAM_BOT_TOKEN`
- ⚠️ `VITE_TELEGRAM_CHAT_ID`

## 🚀 How to Add GitHub Secrets

### Step 1: Go to Repository Settings

1. Open your GitHub repository: `https://github.com/AlieksieievOU/lynx`
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add New Repository Secrets

Click the **New repository secret** button for each secret:

#### Secret 1: VITE_TELEGRAM_BOT_TOKEN

- **Name**: `VITE_TELEGRAM_BOT_TOKEN`
- **Value**: `8365971717:AAGMeu-g2_5FxMxLtYahfCUjfrNwLSkHtTk`
- Click **Add secret**

#### Secret 2: VITE_TELEGRAM_CHAT_ID

- **Name**: `VITE_TELEGRAM_CHAT_ID`
- **Value**: `-1003821640226`
- Click **Add secret**

### Step 3: Verify Secrets

After adding both secrets, you should see them listed under "Repository secrets":

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_TELEGRAM_BOT_TOKEN      ← New
VITE_TELEGRAM_CHAT_ID        ← New
```

## 🔄 Deploy Workflow Updated

The `deploy.yml` workflow has been updated to include these variables:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
    VITE_TELEGRAM_BOT_TOKEN: ${{ secrets.VITE_TELEGRAM_BOT_TOKEN }}    ← New
    VITE_TELEGRAM_CHAT_ID: ${{ secrets.VITE_TELEGRAM_CHAT_ID }}        ← New
```

## ✅ Testing the Deployment

After adding the secrets:

1. **Commit and push** your changes to the `main` branch
2. **GitHub Actions** will automatically trigger the deployment
3. **Check the workflow** at: `https://github.com/AlieksieievOU/lynx/actions`
4. **Verify the build** completes successfully
5. **Test the deployed site** by submitting a contact form
6. **Check your Telegram group** for the notification

## 🔐 Security Notes

- ✅ GitHub Secrets are encrypted and only exposed during workflow runs
- ✅ Secret values are masked in workflow logs
- ✅ Only repository collaborators with write access can add/edit secrets
- ✅ Secrets are not passed to workflows triggered by pull requests from forks

## 🐛 Troubleshooting

### Build fails with "undefined" errors

**Problem**: Environment variables are not being loaded during build

**Solution**:

1. Verify all secrets are added correctly in GitHub
2. Check secret names match exactly (case-sensitive)
3. Re-run the workflow

### Telegram messages not working on deployed site

**Problem**: Secrets might not be set correctly

**Solution**:

1. Check browser console for errors
2. Verify the Chat ID includes the `-100` prefix
3. Test the bot token manually using Telegram API

### How to verify secrets are loaded

Add this temporary step to your workflow (remove after testing):

```yaml
- name: Debug Environment Variables
  run: |
    echo "EmailJS Service ID exists: ${{ secrets.VITE_EMAILJS_SERVICE_ID != '' }}"
    echo "Telegram Bot Token exists: ${{ secrets.VITE_TELEGRAM_BOT_TOKEN != '' }}"
    echo "Telegram Chat ID exists: ${{ secrets.VITE_TELEGRAM_CHAT_ID != '' }}"
```

## 📚 Additional Resources

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Telegram Bot API](https://core.telegram.org/bots/api)

## ⚠️ Important Reminders

1. **Never commit secrets** to your repository
2. **Keep `.env` in `.gitignore`**
3. **Rotate tokens** if they are ever exposed
4. **Use different tokens** for development and production if needed

---

**Next Step**: Add the two Telegram secrets to your GitHub repository, then push your code to trigger a deployment! 🚀
