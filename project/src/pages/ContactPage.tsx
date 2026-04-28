import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Faridabad, Haryana, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-XXXXXXXXXX',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@pajco.in',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 10:00 AM - 7:00 PM',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-56 h-56 bg-white rounded-full" />
          <div className="absolute bottom-0 left-10 w-36 h-36 bg-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch with our team for consultations, queries, or service requests."
            light
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-navy-700" />
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 uppercase tracking-wider font-medium">
                          {label}
                        </p>
                        <p className="text-sm text-navy-800 mt-0.5">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-navy-400 uppercase tracking-wider font-medium mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center hover:bg-navy-100 transition-colors"
                      >
                        <Icon size={18} className="text-navy-700" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schedule Meeting */}
              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  Schedule a Meeting
                </h3>
                <p className="text-sm text-navy-300 mb-5">
                  Prefer a face-to-face discussion? Book a time slot with our team.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors shadow-md"
                >
                  <ExternalLink size={16} />
                  Book a Slot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full h-64 sm:h-80 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin size={32} className="mx-auto text-navy-300 mb-2" />
              <p className="text-navy-400 text-sm">Faridabad, Haryana, India</p>
              <p className="text-navy-300 text-xs mt-1">Map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
