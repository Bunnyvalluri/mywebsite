#!/bin/bash

# EmailJS Quick Setup Script
# This script helps you configure EmailJS for your portfolio contact form

echo "================================================"
echo "  EmailJS Configuration Helper"
echo "================================================"
echo ""
echo "This script will help you set up EmailJS to receive"
echo "contact form submissions at: codewithrahul23@gmail.com"
echo ""
echo "Before running this script, please:"
echo "1. Sign up at https://www.emailjs.com/ (FREE)"
echo "2. Add Gmail service and connect codewithrahul23@gmail.com"
echo "3. Create an email template"
echo "4. Get your Service ID, Template ID, and Public Key"
echo ""
echo "================================================"
echo ""

read -p "Do you have your EmailJS credentials ready? (y/n): " ready

if [ "$ready" != "y" ]; then
    echo ""
    echo "No problem! Follow these steps:"
    echo ""
    echo "1. Go to: https://www.emailjs.com/"
    echo "2. Sign up (it's free - 200 emails/month)"
    echo "3. Add Email Service → Choose Gmail"
    echo "4. Create Email Template (see EMAILJS_SETUP.md for template)"
    echo "5. Get your credentials from the dashboard"
    echo ""
    echo "Then run this script again!"
    echo ""
    exit 0
fi

echo ""
echo "Great! Let's configure your contact form."
echo ""

read -p "Enter your Service ID (e.g., service_abc123): " service_id
read -p "Enter your Template ID (e.g., template_xyz789): " template_id
read -p "Enter your Public Key (e.g., abcdefghijk123): " public_key

echo ""
echo "Updating Contact.jsx with your credentials..."

# Update the Contact.jsx file
sed -i "s/const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'/const EMAILJS_SERVICE_ID = '$service_id'/g" src/components/Contact.jsx
sed -i "s/const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'/const EMAILJS_TEMPLATE_ID = '$template_id'/g" src/components/Contact.jsx
sed -i "s/const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'/const EMAILJS_PUBLIC_KEY = '$public_key'/g" src/components/Contact.jsx

echo ""
echo "✅ Configuration complete!"
echo ""
echo "Your contact form is now configured to send emails to:"
echo "   📧 codewithrahul23@gmail.com"
echo ""
echo "Next steps:"
echo "1. Test the form: npm run dev"
echo "2. Fill out the contact form on your site"
echo "3. Check your email inbox"
echo "4. If it works, commit and deploy:"
echo "   git add ."
echo "   git commit -m \"Configure EmailJS for contact form\""
echo "   git push"
echo "   vercel --prod"
echo ""
echo "================================================"
echo "  Setup Complete! 🎉"
echo "================================================"
