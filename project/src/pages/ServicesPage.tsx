import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive corporate secretarial, compliance, and advisory solutions for businesses at every stage."
            light
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900">
            Need a Service Not Listed Here?
          </h2>
          <p className="mt-3 text-navy-500">
            We offer many more specialized services. Reach out and let us know how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-7 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
