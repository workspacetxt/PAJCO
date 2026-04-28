import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, Users, ShieldCheck, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { servicePreview } from '../data/services';

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: ShieldCheck, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '100%', label: 'Compliance Rate' },
  { icon: CalendarCheck, value: '24hr', label: 'Response Time' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Welcome
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Welcome to P.A.J & Co. &ndash; Company Secretaries
              </h2>
              <p className="mt-5 text-navy-600 leading-relaxed">
                We are a professionally managed Company Secretaries firm offering
                comprehensive corporate compliance, governance, and advisory services.
                With deep expertise in corporate law and regulatory frameworks, we help
                businesses of all sizes stay compliant and grow with confidence.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                From incorporation to ongoing compliance, from GST to intellectual
                property &mdash; we serve as your trusted partner through every stage of
                your business journey.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors shadow-md"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Professional team"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white rounded-xl p-5 shadow-xl hidden sm:block">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-navy-200">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon size={28} className="mx-auto text-navy-300 mb-3" />
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-sm text-navy-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive corporate solutions tailored to your business needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePreview.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-navy-500 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-400 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
            Whether you are starting a new business or need help with compliance,
            our team is here to guide you every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors shadow-lg"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+91XXXXXXXXXX"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
