interface Document {
  id: number;
  content: string;
  instructions: string;
  category: string;
}

export const documents: Document[] = [
  {
    id: 1,
    content: "How to reset your password in our platform",
    category: "Account Management",
    instructions: `🔐 Password Reset Instructions:
1. Go to the login page
2. Click on "Forgot Password?" link
3. Enter your email address
4. Check your email for a reset link
5. Click the link and create a new password
6. Make sure your new password is at least 8 characters long with numbers and symbols`
  },
  {
    id: 2,
    content: "Shipping times may vary depending on your location",
    category: "Shipping & Delivery",
    instructions: `📦 Shipping Information:
1. Standard shipping: 3-5 business days
2. Express shipping: 1-2 business days
3. International shipping: 7-14 business days
4. Track your order using the tracking number in your confirmation email
5. Contact support if your package is delayed beyond expected time`
  },
  {
    id: 3,
    content: "How to contact customer support",
    category: "Support",
    instructions: `📞 Contact Customer Support:
1. Email: support@company.com
2. Phone: 1-800-SUPPORT (Mon-Fri, 9AM-6PM EST)
3. Live Chat: Available on our website
4. Include your order number or account details when contacting
5. Response time: Within 24 hours for email, immediate for phone/chat`
  },
  {
    id: 4,
    content: "How to change your email address",
    category: "Account Management",
    instructions: `📧 Change Email Address:
1. Log into your account
2. Go to Account Settings
3. Click on "Email Preferences"
4. Enter your new email address
5. Verify the new email by clicking the confirmation link
6. Your old email will be updated after verification`
  },
  {
    id: 5,
    content: "Understanding your invoice and billing cycle",
    category: "Billing",
    instructions: `💰 Invoice & Billing Guide:
1. Invoices are generated monthly on the same date
2. Payment is due within 30 days of invoice date
3. You can view invoices in your account dashboard
4. Set up automatic payments to avoid late fees
5. Contact billing department for payment plan options`
  },
  {
    id: 6,
    content: "How to update your payment method",
    category: "Billing",
    instructions: `💳 Update Payment Method:
1. Log into your account
2. Go to Billing & Payments
3. Click "Update Payment Method"
4. Enter your new card details or bank information
5. Save the new payment method
6. Remove old payment methods if no longer needed`
  },
  {
    id: 7,
    content: "How to cancel your subscription",
    category: "Account Management",
    instructions: `❌ Cancel Subscription:
1. Log into your account
2. Go to Subscription Management
3. Click "Cancel Subscription"
4. Choose cancellation reason
5. Confirm cancellation
6. Your service will continue until the end of current billing period
7. You can reactivate anytime before the end date`
  },
  {
    id: 8,
    content: "How to download your data and export information",
    category: "Data Management",
    instructions: `📊 Export Your Data:
1. Go to Account Settings
2. Click on "Data & Privacy"
3. Select "Export My Data"
4. Choose data types to export (profile, orders, etc.)
5. Click "Request Export"
6. You'll receive an email with download link within 24 hours
7. Download and save your data securely`
  },
  {
    id: 9,
    content: "How to enable two-factor authentication",
    category: "Security",
    instructions: `🔒 Enable 2FA:
1. Go to Account Settings > Security
2. Click "Enable Two-Factor Authentication"
3. Choose your preferred method (SMS or authenticator app)
4. Follow the setup instructions
5. Enter the verification code
6. Save backup codes in a secure location
7. 2FA is now active for your account`
  },
  {
    id: 10,
    content: "How to report a bug or technical issue",
    category: "Support",
    instructions: `🐛 Report Technical Issues:
1. Go to Help & Support section
2. Click "Report a Bug"
3. Describe the issue in detail
4. Include screenshots if possible
5. Mention your browser and device information
6. Provide steps to reproduce the issue
7. Submit the report and wait for response`
  },
  {
    id: 11,
    content: "How to request a refund",
    category: "Billing",
    instructions: `💸 Request Refund:
1. Go to Order History in your account
2. Find the order you want to refund
3. Click "Request Refund"
4. Select refund reason from dropdown
5. Provide additional details if needed
6. Submit request
7. Refund will be processed within 5-7 business days
8. You'll receive email confirmation`
  },
  {
    id: 12,
    content: "How to change your account language and region settings",
    category: "Account Management",
    instructions: `🌍 Change Language & Region:
1. Go to Account Settings
2. Click on "Preferences"
3. Select "Language & Region"
4. Choose your preferred language
5. Select your region/country
6. Save changes
7. Page will refresh with new language
8. Some content may take time to translate`
  },
  {
    id: 13,
    content: "How to set up email notifications and alerts",
    category: "Notifications",
    instructions: `📧 Email Notifications Setup:
1. Go to Account Settings > Notifications
2. Choose notification types you want to receive
3. Set frequency (immediate, daily, weekly)
4. Add or update email addresses
5. Test notification by clicking "Send Test Email"
6. Save your preferences
7. You can change these settings anytime`
  },
  {
    id: 14,
    content: "How to connect your social media accounts",
    category: "Account Management",
    instructions: `🔗 Connect Social Media:
1. Go to Account Settings > Connected Accounts
2. Choose the social media platform
3. Click "Connect Account"
4. Authorize the connection in popup window
5. Grant necessary permissions
6. Your account is now connected
7. You can disconnect anytime from same page`
  },
  {
    id: 15,
    content: "How to manage your privacy settings and data sharing",
    category: "Privacy",
    instructions: `🔒 Privacy Settings Management:
1. Go to Account Settings > Privacy
2. Review current privacy settings
3. Adjust data sharing preferences
4. Control who can see your profile
5. Manage third-party app permissions
6. Set data retention preferences
7. Save changes to apply new settings`
  }
];
