import {
  Calendar,
  GitBranch,
  Handshake,
  BookOpen,
  Search,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { collaborationCards, profile } from "../data/mock";

const iconMap = { Calendar, GitBranch, Handshake, BookOpen, Search };

const Collaboration = () => {
  return (
    <section
      id="collaboration"
      className="relative py-20 md:py-28 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="surface rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-50 blur-3xl opacity-70"
          />

          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 reveal">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
                Collaboration / Network
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-semibold leading-tight">
                Open to serious{" "}
                <span className="text-emerald-600">eCommerce collaboration.</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] sm:text-base leading-relaxed">
                I&apos;m currently building a small network of Amazon and eCommerce
                operators who are open to sharing ideas, collaborating on
                projects, and supporting each other with specialist tasks. I&apos;m
                especially interested in connecting with PPC specialists,
                listing experts, designers, data analysts, and marketplace
                consultants.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full px-6 h-12 transition-colors shadow-[0_8px_24px_-8px_rgba(5,150,105,0.4)]"
                  >
                    <Linkedin className="mr-1.5 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-6 h-12 bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-slate-400 transition-colors"
                  >
                    Send a message
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 reveal">
              <div className="grid sm:grid-cols-2 gap-3">
                {collaborationCards.map((c, idx) => {
                  const Icon = iconMap[c.icon] || Handshake;
                  return (
                    <div
                      key={c.title}
                      className={`group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-slate-300 hover:bg-white transition-colors ${
                        idx === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-emerald-200 transition-colors">
                          <Icon className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-semibold text-slate-900">
                            {c.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                            {c.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
