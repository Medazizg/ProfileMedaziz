# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables
Edit the `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

## 6. Test the Contact Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check if the email is received at Gtariaziz4@gmail.com

## Template Variables Used:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_email}}` - Your email (Gtariaziz4@gmail.com)
- `{{reply_to}}` - Visitor's email for replies

## Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher limits, consider upgrading to a paid plan.
