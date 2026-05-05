import { Check, Award, Globe2, Briefcase } from "lucide-react";
import { profile, aboutCopy, aboutHighlights } from "../data/mock";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="lg:w-1/3 reveal">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              About
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              Practical Amazon expertise,{" "}
              <span className="text-emerald-600">earned the hard way.</span>
            </h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Briefcase className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    4+ years freelance
                  </p>
                  <p className="text-sm text-slate-500">
                    Hands-on with sellers and brands.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Globe2 className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    US & Canada marketplaces
                  </p>
                  <p className="text-sm text-slate-500">
                    Confident across international Amazon.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Data-led decisions
                  </p>
                  <p className="text-sm text-slate-500">
                    PPC, SEO, listings & catalog — backed by real numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 reveal">
            <div className="surface rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl overflow-hidden ring-1 ring-slate-200">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-slate-900">
                    {profile.fullName}
                  </p>
                  <p className="text-sm text-slate-500">
                    {profile.title}
                  </p>
                </div>
              </div>

              {aboutCopy.split("\n\n").map((para, idx) => (
                <p
                  key={idx}
                  className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}

              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4 font-semibold">
                  What I focus on
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {aboutHighlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2.5 rounded-lg px-3 py-2 bg-slate-50 border border-slate-200"
                    >
                      <Check className="h-4 w-4 mt-0.5 text-emerald-600 shrink-0" />
                      <span className="text-sm text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
