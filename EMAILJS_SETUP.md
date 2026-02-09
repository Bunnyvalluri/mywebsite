# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your Google account or email

## Step 2: Add Email Service

1. After logging in, go to **Email Services**
2. Click **"Add New Service"**
3. Select **Gmail** (or your preferred email provider)
4. Click **"Connect Account"**
5. Sign in with your Gmail: **codewithrahul23@gmail.com**
6. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: New Portfolio Inquiry from {{from_name}}

### Email Template Content:
```
New message from your portfolio!

From: {{from_name}}
Email: {{from_email}}
Service: {{service}}
Budget: {{budget}}

Message:
{{message}}

---
Sent from your portfolio website
Reply to: {{from_email}}
```

### Template Settings (Important!):
- **To Email**: codewithrahul23@gmail.com
- **From Name**: {{from_name}}
- **From Email**: {{from_email}}
- **Reply To**: {{from_email}}

4. Click **Save** and copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxx`)
3. Copy it

## Step 5: Update Your Code

Open the file: `src/components/Contact.jsx`

Replace these values at the top of the file:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
```

With your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';  // From Step 2
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // From Step 3
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxx';      // From Step 4
```

## Step 6: Test Your Form

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email: **codewithrahul23@gmail.com**

## Email Template Variables

The form sends these variables to EmailJS:
- `from_name` - Visitor's name
- `from_email` - Visitor's email
- `service` - Selected service
- `budget` - Selected budget
- `message` - Project details

## Troubleshooting

### Not receiving emails?
1. Check your EmailJS dashboard for sent emails
2. Check your Gmail spam folder
3. Verify the template "To Email" is set to: codewithrahul23@gmail.com
4. Make sure you've verified your email in EmailJS

### Form not submitting?
1. Check browser console for errors
2. Verify all three IDs are correct
3. Make sure you're connected to the internet

### Rate limit exceeded?
- Free plan: 200 emails/month
- Upgrade to paid plan if needed

## Security Notes

✅ Your EmailJS keys are safe to expose in frontend code
✅ EmailJS has built-in spam protection
✅ Rate limiting prevents abuse
✅ All emails are logged in your EmailJS dashboard

## Alternative: Web3Forms (Backup Option)

If you prefer not to use EmailJS, you can use Web3Forms:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: codewithrahul23@gmail.com
3. Get your Access Key
4. Update the form endpoint in Contact.jsx

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Video Tutorial: https://www.youtube.com/watch?v=dgcYOm8n8ME

---

**Remember**: After setting up, commit and push to GitHub, then deploy to Vercel!
