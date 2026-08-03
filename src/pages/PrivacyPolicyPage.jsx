import React from 'react';
import LegalPage from '../components/LegalPage';

const sections = [
  {
    heading: '1. Information We Collect',
    paragraphs: ['We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:'],
    items: [
      'Full name',
      'Mailing or service address',
      'Email address',
      'Mobile phone number',
      'Service request details and project descriptions',
      'Communication history and preferences',
    ],
  },
  {
    heading: '2. SMS / Text Message Communications',
  },
  {
    heading: '3. How We Collect Your Mobile Number',
    paragraphs: ['We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from Tree Services Clarence.'],
  },
  {
    heading: '4. Types of Messages We Send',
    paragraphs: ['By opting in, you may receive recurring automated text messages from Tree Services Clarence, including:'],
    items: [
      'Free estimate confirmations and appointment reminders',
      'Project status updates and scheduling notifications',
      'Customer support and follow-up communications',
      'Promotional offers and seasonal service announcements related to our tree care services',
    ],
  },
  {
    heading: '5. Message Frequency',
    paragraphs: ['Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.'],
  },
  {
    heading: '6. Message & Data Rates',
    paragraphs: ['Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. Tree Services Clarence is not responsible for any charges incurred from your mobile carrier.'],
  },
  {
    heading: '7. How to Opt Out (STOP)',
    paragraphs: ['You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from Tree Services Clarence unless you re-enroll.'],
  },
  {
    heading: '8. How to Get Help (HELP)',
    paragraphs: ['For help with our SMS program, reply HELP to any message, or contact us directly at +1 716-589-2600 or service@pulsecx.com.'],
  },
  {
    heading: '9. Mobile Information & SMS Consent — No Third-Party Sharing',
    paragraphs: [
      'No mobile information, including your mobile phone number and SMS opt-in consent data, will be shared with third parties or affiliates for marketing or promotional purposes.',
      'All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.',
    ],
  },
  {
    heading: '10. How We Use Your Information',
    paragraphs: ['We use the personal information we collect to:'],
    items: [
      'Provide and manage tree care services',
      'Respond to inquiries and service requests',
      'Schedule appointments and send reminders',
      'Send promotional communications with your consent',
      'Improve our website and service quality',
      'Comply with applicable laws and regulations',
    ],
  },
  {
    heading: '11. Cookies and Tracking Technologies',
    paragraphs: ['We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.'],
  },
  {
    heading: '12. Data Security',
    paragraphs: ['We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.'],
  },
  {
    heading: '13. Data Retention',
    paragraphs: ['We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.'],
  },
  {
    heading: '14. Your Privacy Rights',
    paragraphs: ['Depending on your location, you may have the following rights regarding your personal data:'],
    items: [
      'Access: Request a copy of the personal data we hold about you',
      'Correction: Request correction of inaccurate personal data',
      'Deletion: Request deletion of your personal data, including your mobile number and SMS consent record',
      'Opt-Out of SMS: Reply STOP to any text message at any time',
      'Opt-Out of Marketing: Contact us directly to be removed from marketing lists',
    ],
  },
  {
    heading: '15. Exercising Your Rights',
    paragraphs: ['To exercise any of these rights, contact us at service@pulsecx.com or call +1 716-589-2600.'],
  },
  {
    heading: '16. Changes to This Privacy Policy',
    paragraphs: ['We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised “Last Updated” date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.'],
  },
  {
    heading: '17. Contact Information',
    items: [
      'Company: Tree Services Clarence',
      'Address: 9950 County Rd, Clarence Center, NY 14032',
      'Phone: +1 716-589-2600',
      'Email: service@pulsecx.com',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effective="January 19, 2025"
      updated="July 9, 2026"
      intro="Tree Services Clarence (“we,” “our,” or “us”) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable."
      sections={sections}
    />
  );
}
