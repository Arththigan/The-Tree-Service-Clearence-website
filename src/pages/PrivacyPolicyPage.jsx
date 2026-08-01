import React from 'react';
import LegalPage from '../components/LegalPage';

const sections = [
  { heading: 'Information We Collect', paragraphs: ['We collect information you voluntarily provide when requesting an inspection, estimate, emergency response, or other tree-care service.'], items: ['Name, email address, phone number, and property address', 'Details about your trees, property conditions, and requested services', 'Messages, photographs, or documents submitted through our forms', 'Basic technical information such as device, browser, and website usage data'] },
  { heading: 'How We Use Information', paragraphs: ['We use collected information to respond to inquiries, prepare estimates, schedule crews, provide services, communicate updates, improve our website, and maintain appropriate business records.'] },
  { heading: 'Forms and Service Providers', paragraphs: ['Our contact form is provided through KD Lead. Information submitted through the embedded form may be processed by that provider to deliver your request to our team. Their processing is also governed by their applicable privacy practices.'] },
  { heading: 'Information Sharing', paragraphs: ['We do not sell your personal information. We may share information with service providers that support scheduling, communications, hosting, analytics, insurance coordination, or legal compliance when reasonably necessary.'] },
  { heading: 'Data Security and Retention', paragraphs: ['We use reasonable administrative and technical safeguards. Information is retained only as long as needed for service delivery, recordkeeping, dispute resolution, and legal obligations. No internet transmission or storage system can be guaranteed completely secure.'] },
  { heading: 'Your Choices', paragraphs: ['You may request access, correction, or deletion of personal information, or ask us to stop non-essential communications, subject to applicable legal and operational requirements.'] },
  { heading: 'Contact Us', paragraphs: ['For privacy questions or requests, contact service@pulsecx.com or call (800) 555-TREE.'] },
];

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Legal" title="Privacy Policy" updated="July 31, 2026" sections={sections} />;
}
