import { Link } from 'react-router-dom';
import type { ServiceCategory } from '../data/services';

interface Props {
  service: Pick<ServiceCategory, 'id' | 'title' | 'icon' | 'shortDesc'>;
  variant?: 'preview' | 'full';
}

export default function ServiceCard({ service, variant = 'preview' }: Props) {
  const Icon = service.icon;

  if (variant === 'full') {
    return (
      <div id={service.id} className="scroll-mt-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
            <Icon size={24} className="text-navy-700" />
          </div>
          <h3 className="text-xl font-heading font-bold text-navy-900">
            {service.title}
          </h3>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
              <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <Link
      to={`/services#${service.id}`}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
        <Icon size={24} className="text-navy-700" />
      </div>
      <h3 className="font-heading font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-navy-500 leading-relaxed">{service.shortDesc}</p>
    </Link>
  );
}
