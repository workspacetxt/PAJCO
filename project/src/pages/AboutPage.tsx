import { ShieldCheck, Users, Target, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity & Trust',
    desc: 'We uphold the highest standards of professional ethics and transparency in every engagement.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    desc: 'Every solution is tailored to the unique needs and goals of each client we serve.',
  },
  {
    icon: Target,
    title: 'Precision & Accuracy',
    desc: 'Meticulous attention to detail ensures your compliance and filings are always on point.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'We stay current with evolving regulations to provide you the most relevant advice.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full" />
          <div className="absolute bottom-5 right-10 w-40 h-40 bg-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Us"
            subtitle="Learn about our firm, our mission, and the values that drive us."
            light
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Your Trusted Partner in Corporate Compliance
              </h2>
              <p className="mt-5 text-navy-600 leading-relaxed">
                P.A.J & Co. is a distinguished Company Secretaries firm based in
                Faridabad, Haryana, providing a full spectrum of corporate secretarial,
                compliance, and advisory services. Founded with a vision to simplify the
                complex landscape of corporate governance, we have been serving businesses
                across India with dedication and expertise.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Our team of qualified Company Secretaries and professionals brings
                together deep domain knowledge, practical experience, and a commitment
                to excellence. We work closely with startups, SMEs, and large corporations
                to ensure they meet their statutory obligations while focusing on growth.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Whether it is company incorporation, ROC compliance, GST services, or
                intellectual property protection &mdash; we handle it all with precision
                and care, so you can focus on what matters most: building your business.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Our office"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Our Mission
              </h3>
              <p className="text-navy-600 leading-relaxed">
                To empower businesses with seamless compliance solutions and strategic
                advisory, enabling them to operate with confidence in an ever-evolving
                regulatory environment. We strive to be the most reliable partner for
                companies seeking excellence in corporate governance.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Our Vision
              </h3>
              <p className="text-navy-600 leading-relaxed">
                To be recognized as the leading Company Secretaries firm known for
                integrity, innovation, and client satisfaction. We envision a future
                where every business, regardless of size, has access to world-class
                compliance and governance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-navy-700" />
                </div>
                <h4 className="font-heading font-bold text-navy-900 mb-2">{title}</h4>
                <p className="text-sm text-navy-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose P.A.J & Co.?"
            subtitle="What sets us apart from the rest."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Qualified & Experienced Team',
              'End-to-End Service Coverage',
              'Timely & Accurate Filings',
              'Personalized Client Attention',
              'Affordable & Transparent Pricing',
              'Pan-India Service Capability',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4"
              >
                <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
