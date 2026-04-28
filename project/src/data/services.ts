import {
  Building2,
  FileCheck,
  Receipt,
  Globe,
  Rocket,
  RefreshCw,
  Scale,
  Shield,
} from 'lucide-react';

export interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    id: 'business-setup',
    title: 'Business Setup & Incorporation',
    icon: Building2,
    shortDesc: 'End-to-end support for starting your business entity.',
    items: [
      'Private Limited Company Incorporation',
      'One Person Company (OPC) Registration',
      'Limited Liability Partnership (LLP) Formation',
      'Partnership Firm Registration',
      'Sole Proprietorship Registration',
      'Section 8 Company Registration',
      'Nidhi Company Registration',
      'Trust & Society Registration',
    ],
  },
  {
    id: 'corporate-secretarial',
    title: 'Corporate Secretarial & ROC Compliance',
    icon: FileCheck,
    shortDesc: 'Ensuring your business stays compliant with statutory requirements.',
    items: [
      'Annual ROC Filing & Compliance',
      'Director KYC (DIR-3 KYC)',
      'Change in Directors / Designated Partners',
      'Registered Office Change',
      'Alteration of MOA & AOA',
      'Share Transfer & Allotment',
      'Charge Creation & Satisfaction',
      'Strike Off / Closure of Company',
      'Conversion of Company Type',
    ],
  },
  {
    id: 'gst-services',
    title: 'GST Services',
    icon: Receipt,
    shortDesc: 'Complete GST registration, filing, and advisory.',
    items: [
      'GST Registration',
      'Monthly / Quarterly GST Return Filing',
      'Annual Return (GSTR-9) Filing',
      'GST Audit & Reconciliation',
      'GST Refund Application',
      'GST Cancellation & Revocation',
      'E-Way Bill & E-Invoice Assistance',
      'Input Tax Credit Optimization',
    ],
  },
  {
    id: 'digital-services',
    title: 'Digital Services',
    icon: Globe,
    shortDesc: 'Digital compliance and online presence solutions.',
    items: [
      'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)',
      'MSME / Udyam Registration',
      'FSSAI License Registration',
      'Import Export Code (IEC) Registration',
      'PAN & TAN Application',
      'TDS Return Filing',
      'Professional Tax Registration',
    ],
  },
  {
    id: 'startup-funding',
    title: 'Startup & Funding Support',
    icon: Rocket,
    shortDesc: 'Helping startups navigate registration and fundraising.',
    items: [
      'Startup India Registration',
      'DPIIT Recognition',
      'Pitch Deck & Business Plan Assistance',
      'Funding Compliance & Documentation',
      'ESOP & Equity Structuring',
      'Investor Due Diligence Support',
      'Term Sheet & SHA Review',
      'MCA & RBI Filings for FDI',
    ],
  },
  {
    id: 'restructuring-closure',
    title: 'Business Restructuring & Closure',
    icon: RefreshCw,
    shortDesc: 'Smooth transitions for mergers, acquisitions, and closures.',
    items: [
      'Merger & Amalgamation',
      'Demerger & Spin-off',
      'Acquisition Due Diligence',
      'Voluntary Winding Up',
      'Strike Off of Company / LLP',
      'Insolvency & Bankruptcy Proceedings',
      'Asset & Share Deal Structuring',
      'NCLT Filings & Representation',
    ],
  },
  {
    id: 'advisory-services',
    title: 'Advisory & Professional Services',
    icon: Scale,
    shortDesc: 'Expert guidance for governance, compliance, and strategy.',
    items: [
      'Corporate Governance Advisory',
      'Board Meeting & AGM Management',
      'Statutory Audit Coordination',
      'Internal Audit Support',
      'Compliance Health Check',
      'Regulatory Liaison & Representation',
      'Legal Drafting & Vetting',
      'Risk Assessment & Mitigation',
    ],
  },
  {
    id: 'ipr',
    title: 'Intellectual Property (IPR)',
    icon: Shield,
    shortDesc: 'Protecting your brand, ideas, and innovations.',
    items: [
      'Trademark Registration',
      'Trademark Renewal & Assignment',
      'Copyright Registration',
      'Patent Filing & Prosecution',
      'Design Registration',
      'IP Portfolio Management',
      'Trademark Opposition & Reply',
      'Brand Protection Strategy',
    ],
  },
];

export const servicePreview = services.map(({ id, title, icon, shortDesc }) => ({
  id,
  title,
  icon,
  shortDesc,
}));
