import { ShoppingCart, BarChart3, Wrench, Users } from "lucide-react";
import { skillGroups } from "../data/mock";

const iconMap = { ShoppingCart, BarChart3, Wrench, Users };

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 section-tint border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12 reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
            Skills &amp; Tools
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
            The full toolkit for{" "}
            <span className="text-emerald-600">Amazon execution.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From Seller Central to Helium 10, here&apos;s the practical stack I use
            day-to-day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g, idx) => {
            const Icon = iconMap[g.icon] || ShoppingCart;
            return (
              <div
                key={g.title}
                className="surface surface-hover rounded-2xl p-6 sm:p-7 reveal"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {g.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 hover:border-emerald-500/40 hover:bg-white hover:text-emerald-700 px-3 py-1.5 text-xs text-slate-700 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools marquee */}
        <div className="mt-12 overflow-hidden border-y border-slate-200 py-4 reveal">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[
              "Helium 10",
              "Jungle Scout",
              "Keepa",
              "Amazon Ads",
              "Seller Central",
              "Canva Pro",
              "Figma",
              "WordPress",
              "Google Sheets",
              "Google Analytics",
              "Shopify",
              "Etsy",
              "KDP",
              "A+ Content",
              "Brand Registry",
            ]
              .concat([
                "Helium 10",
                "Jungle Scout",
                "Keepa",
                "Amazon Ads",
                "Seller Central",
                "Canva Pro",
                "Figma",
                "WordPress",
                "Google Sheets",
                "Google Analytics",
                "Shopify",
                "Etsy",
                "KDP",
                "A+ Content",
                "Brand Registry",
              ])
              .map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="text-sm uppercase tracking-[0.2em] text-slate-400 font-medium"
                >
                  {t}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
