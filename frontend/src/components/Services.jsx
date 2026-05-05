import {
  Target,
  FileText,
  TrendingUp,
  Wrench,
  ShoppingBag,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../data/mock";

const iconMap = {
  Target,
  FileText,
  TrendingUp,
  Wrench,
  ShoppingBag,
  BarChart3,
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 section-tint border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Services
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              How I help Amazon brands{" "}
              <span className="text-emerald-600">grow profitably.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Six focus areas — from PPC and listings to catalog troubleshooting
              and broader eCommerce support.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Discuss a custom scope
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, idx) => {
            const Icon = iconMap[svc.icon] || Target;
            return (
              <article
                key={svc.id}
                className="surface surface-hover rounded-2xl p-6 group relative overflow-hidden reveal"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {svc.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {svc.points.slice(0, 4).map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
