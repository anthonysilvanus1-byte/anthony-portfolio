import {
  ClipboardCheck,
  Stethoscope,
  Map,
  Rocket,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { processSteps } from "../data/mock";

const iconMap = { ClipboardCheck, Stethoscope, Map, Rocket, LineChart };

const Process = () => {
  return (
    <section className="relative py-20 md:py-28 section-tint border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12 reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
            Work Process
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
            Five steps,{" "}
            <span className="text-emerald-600">no fluff.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A simple, repeatable process to move from problem to result.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal connection line on desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[36px] left-0 right-0 h-px bg-slate-200"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] || ClipboardCheck;
              return (
                <div
                  key={step.number}
                  className="relative reveal"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="surface surface-hover rounded-2xl p-5 h-full">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-display text-2xl font-semibold text-slate-300">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden lg:flex absolute top-[36px] -right-3 z-10 items-center justify-center h-6 w-6 rounded-full bg-white border border-slate-200 text-emerald-600 shadow-sm"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
