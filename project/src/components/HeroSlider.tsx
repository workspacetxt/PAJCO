import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    heading: 'Trusted Company Secretarial Services',
    sub: 'Ensuring compliance, governance, and peace of mind for your business.',
  },
  {
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    heading: 'From Incorporation to Growth',
    sub: 'Complete business setup and compliance solutions under one roof.',
  },
  {
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    heading: 'Your Compliance Partner',
    sub: 'Expert advisory for startups, corporates, and growing enterprises.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/40" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight animate-fade-in">
              {slides[current].heading}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-navy-200 leading-relaxed animate-slide-up">
              {slides[current].sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up">
              <a
                href="/contact"
                className="px-7 py-3.5 bg-white text-navy-900 font-semibold rounded-lg hover:bg-navy-50 transition-colors shadow-lg"
              >
                Book a Consultation
              </a>
              <a
                href="/services"
                className="px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
  
  {/* Up Arrow */}
  <button
    onClick={prev}
    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
    aria-label="Previous slide"
  >
    <ChevronLeft className="rotate-90 text-white" size={20} />
  </button>

  {/* Down Arrow */}
  <button
    onClick={next}
    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
    aria-label="Next slide"
  >
    <ChevronRight className="rotate-90 text-white" size={20} />
  </button>

</div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
