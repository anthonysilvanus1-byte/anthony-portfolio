import { useState } from "react";
import { Briefcase, Calendar, ArrowDownToLine, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { experience } from "../data/mock";

const Experience = () => {
  const [, setReq] = useState(false);
  const handleRequestCV = () => {
    setReq(true);
    toast.success("CV request noted", {
      description: "Reach out via the contact section and I'll share my CV.",
    });
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Experience
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              A timeline of{" "}
              <span className="text-emerald-600">real client work.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Selected freelance and contract roles supporting Amazon &amp; eCommerce
              brands.
            </p>
          </div>
          <Button
            onClick={handleRequestCV}
            variant="outline"
            className="rounded-full px-5 h-11 bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-slate-400 transition-colors"
          >
            <ArrowDownToLine className="mr-1.5 h-4 w-4 text-emerald-600" />
            Request CV
          </Button>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200"
          />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${idx}`}
                  className="relative reveal sm:grid sm:grid-cols-2 sm:gap-10"
                >
                  {/* Dot */}
                  <div
                    aria-hidden
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 z-10"
                  >
                    <span className="relative flex h-3 w-3">
                      {exp.current && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                      )}
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#F8FAFC]" />
                    </span>
                  </div>

                  <div
                    className={`pl-12 sm:pl-0 ${
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"
                    }`}
                  >
                    <div className="surface surface-hover rounded-2xl p-5 sm:p-6 inline-block w-full">
                      <div
                        className={`flex items-center gap-2 text-xs text-slate-500 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="font-medium">{exp.period}</span>
                        {exp.current && (
                          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 leading-snug">
                        {exp.role}
                      </h3>
                      <div
                        className={`mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                        {exp.company}
                      </div>
                      <p
                        className={`mt-3 text-sm text-slate-600 leading-relaxed ${
                          isLeft ? "sm:text-right" : ""
                        }`}
                      >
                        {exp.description}
                      </p>
                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center text-xs text-slate-500 reveal">
          <FileText className="h-3.5 w-3.5 mr-1.5 text-emerald-600" />
          A condensed CV is available on request.
        </div>
      </div>
    </section>
  );
};

export default Experience;
