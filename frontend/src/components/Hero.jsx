import { useEffect, useState } from "react";
import { ArrowUpRight, TrendingUp, BarChart3, ShoppingCart, Target } from "lucide-react";
import { Button } from "./ui/button";
import { profile, trustBadges, heroStats } from "../data/mock";

const Counter = ({ value }) => {
  const numericMatch = value.match(/(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = value.replace(/\d+/, "");
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return <span>{n}{suffix}</span>;
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden grain mesh-bg"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new Amazon projects
            </div>

            <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold text-slate-900">
              Amazon PPC &amp; eCommerce{" "}
              <span className="relative inline-block">
                <span className="text-emerald-600">Growth Specialist</span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-emerald-500/40" />
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#case-studies">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full px-6 h-12 transition-colors shadow-[0_8px_24px_-8px_rgba(5,150,105,0.4)]"
                >
                  View Case Studies
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 h-12 bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-slate-400 transition-colors"
                >
                  Let&apos;s Collaborate
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-900 font-medium">{b.label}</span>
                  <span className="text-slate-400">{b.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo + floating cards */}
          <div className="lg:col-span-5 relative reveal">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="relative rounded-[28px] overflow-hidden photo-glow border border-slate-200">
                <div className="aspect-[4/5] bg-slate-100">
                  <img
                    src={profile.photo}
                    alt={profile.fullName}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to work
                  </span>
                </div>
              </div>

              {/* Floating ACoS card */}
              <div className="absolute -left-6 sm:-left-10 top-10 glass-card rounded-2xl p-3.5 w-[180px] animate-float-soft hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <Target className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      ACoS
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Optimized
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="text-[11px] text-slate-500">Trend</div>
                  <svg width="60" height="22" viewBox="0 0 60 22">
                    <polyline
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="0,18 10,15 20,17 30,10 40,12 50,6 60,4"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating CTR card */}
              <div className="absolute -right-4 sm:-right-8 top-32 glass-card rounded-2xl p-3.5 w-[170px] animate-float-soft-2 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      CTR
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Improved
                    </p>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-1">
                  {[3, 5, 4, 7, 9].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-emerald-500"
                      style={{ height: `${h * 2 + 4}px`, opacity: 0.55 + i * 0.09 }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating SKU card */}
              <div className="absolute -right-3 sm:-right-6 -bottom-4 glass-card rounded-2xl p-3.5 w-[200px] animate-float-soft hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Marketplaces
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      US &amp; Canada
                    </p>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 leading-relaxed">
                  Listings, PPC, A+ content & catalog support across multiple
                  brands.
                </div>
              </div>

              {/* Decorative ring — neutral */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[36px] border border-slate-200"
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 reveal">
          {heroStats.map((s, idx) => (
            <div
              key={s.label}
              className="surface rounded-2xl px-5 py-5 sm:py-6 group surface-hover"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                <BarChart3 className="h-3.5 w-3.5 text-emerald-600" />
                Stat {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-slate-900">
                <Counter value={s.value} />
              </div>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
