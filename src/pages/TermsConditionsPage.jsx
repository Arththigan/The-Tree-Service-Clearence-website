import React from 'react';
import LegalPage from '../components/LegalPage';

const sections = [
  {
    heading: '1. Business Identity',
    paragraphs: ['These Terms and Conditions govern your use of the services provided by Tree Services Clarence, located at 9950 County Rd, Clarence Center, NY 14032. Contact: +1 716-589-2600 | service@pulsecx.com.'],
  },
  {
    heading: '2. Age Requirement (18+)',
    paragraphs: ['By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.'],
  },
  {
    heading: '3. Terminology',
    paragraphs: ['“Client,” “You,” and “Your” refer to the user of this website. “The Company,” “We,” “Our,” and “Us” refer to Tree Services Clarence.'],
  },
  {
    heading: '4. SMS Messaging Terms of Service',
    paragraphs: ['By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from Tree Services Clarence.'],
  },
  {
    heading: '5. Program Description & Message Types',
    items: [
      'Free estimate confirmations and scheduling notifications',
      'Appointment reminders and project status updates',
      'Customer support and service follow-up communications',
      'Promotional offers and seasonal announcements related to our tree care services',
    ],
  },
  {
    heading: '6. Message Frequency',
    paragraphs: ['Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.'],
  },
  {
    heading: '7. Message & Data Rates',
    paragraphs: ['Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. Tree Services Clarence is not responsible for any carrier charges.'],
  },
  {
    heading: '8. How to Opt Out (STOP)',
    paragraphs: ['You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.'],
  },
  {
    heading: '9. How to Get Help (HELP)',
    paragraphs: ['For help with our SMS program, reply HELP to any message or contact us directly at +1 716-589-2600 or service@pulsecx.com.'],
  },
  {
    heading: '10. Carrier Liability Disclaimer',
    paragraphs: ['Mobile carriers are not liable for delayed or undelivered messages. Tree Services Clarence cannot guarantee delivery of SMS messages. Delivery of information through SMS may be subject to your mobile carrier’s capability and coverage area.'],
  },
  {
    heading: '11. Supported Carriers',
    paragraphs: ['Our SMS program is supported by all major U.S. wireless carriers, including AT&T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.'],
  },
  {
    heading: '12. Cookies',
    paragraphs: ['We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.'],
  },
  {
    heading: '13. Intellectual Property & License',
    paragraphs: ['Unless otherwise stated, Tree Services Clarence owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.'],
  },
  {
    heading: '14. Comments & User Content',
    paragraphs: ['Tree Services Clarence reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.'],
  },
  {
    heading: '15. Content Liability',
    paragraphs: ['We are not responsible for content that appears on external websites linking to us. You agree to defend and protect Tree Services Clarence against any claims arising from your website or digital properties.'],
  },
  {
    heading: '16. Disclaimer',
    paragraphs: ['To the maximum extent permitted by applicable law, Tree Services Clarence excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage, including, without limitation, damage for loss of business, profits, or revenue, arising from the use of our website or services.'],
  },
  {
    heading: '17. Changes to These Terms',
    paragraphs: ['We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised “Last Updated” date. Continued use of our website or services constitutes acceptance of the updated terms.'],
  },
  {
    heading: '18. Contact Information',
    items: [
      'Company: Tree Services Clarence',
      'Address: 9950 County Rd, Clarence Center, NY 14032',
      'Phone: +1 716-589-2600',
      'Email: service@pulsecx.com',
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      effective="January 19, 2025"
      updated="July 9, 2026"
      intro="Welcome to Tree Services Clarence. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services."
      sections={sections}
    />
  );
}
