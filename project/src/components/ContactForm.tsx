import { useState, type FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <CheckCircle size={48} className="mx-auto text-emerald-500 mb-4" />
        <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-navy-500 text-sm">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', message: '' });
          }}
          className="mt-6 text-sm text-navy-700 font-medium hover:text-navy-900 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
    >
      <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">
        Get in Touch
      </h3>
      <p className="text-sm text-navy-500 mb-4">
        Fill out the form and our team will respond within 24 hours.
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-1.5">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
          placeholder="+91-XXXXXXXXXX"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors shadow-md hover:shadow-lg"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
