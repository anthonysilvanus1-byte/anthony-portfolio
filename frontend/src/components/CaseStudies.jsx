import { useState } from "react";
import {
  ArrowUpRight,
  Target,
  FileText,
  Wrench,
  Compass,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { caseStudies } from "../data/mock";

const categoryIcon = {
  PPC: Target,
  Listing: FileText,
  Account: Wrench,
  Strategy: Compass,
};

const CaseStudyCard = ({ cs }) => {
  const Icon = categoryIcon[cs.category] || Target;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-left w-full surface surface-hover rounded-2xl p-6 group relative overflow-hidden">
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
                <Icon className="h-3.5 w-3.5 text-emerald-600" />
                {cs.category}
              </div>
              <span className="text-[11px] text-slate-400">{cs.clientType}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-slate-900 leading-snug">
              {cs.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
              {cs.challenge}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {cs.tools.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
                {cs.tools.length > 2 && (
                  <span className="text-[11px] rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-600">
                    +{cs.tools.length - 2} more
                  </span>
                )}
              </div>
              <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-medium group-hover:text-emerald-800">
                Read case
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-white border border-slate-200 text-slate-900 max-h-[88vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5" />
              {cs.category}
            </Badge>
            <span className="text-xs text-slate-500">{cs.clientType}</span>
          </div>
          <DialogTitle className="font-display text-2xl text-slate-900 leading-tight">
            {cs.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Case study details for {cs.title}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-6">
          <Block icon={AlertCircle} label="Challenge" tone="amber">
            <p className="text-sm text-slate-700 leading-relaxed">
              {cs.challenge}
            </p>
          </Block>

          <Block icon={Lightbulb} label="What I did" tone="emerald">
            <ul className="space-y-2">
              {cs.actions.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </Block>

          <Block icon={CheckCircle2} label="Outcome" tone="emerald">
            <ul className="space-y-2">
              {cs.outcome.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </Block>

          <div className="grid grid-cols-3 gap-2">
            {cs.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  {m.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Tools / Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cs.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Block = ({ icon: Icon, label, children, tone = "emerald" }) => {
  const tones = {
    emerald: "bg-slate-100 text-emerald-600 border-slate-200",
    amber: "bg-slate-100 text-amber-600 border-slate-200",
  };
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border ${tones[tone]}`}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
          {label}
        </span>
      </div>
      <div className="pl-9">{children}</div>
    </div>
  );
};

const CaseStudies = () => {
  const [tab, setTab] = useState("all");
  const filtered =
    tab === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category.toLowerCase() === tab);

  return (
    <section
      id="case-studies"
      className="relative py-20 md:py-28 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Case Studies
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              Real Amazon work,{" "}
              <span className="text-emerald-600">anonymized for clients.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Some client details and metrics are anonymized for
              confidentiality. Full project context can be discussed privately
              where appropriate.
            </p>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="reveal">
          <TabsList className="bg-white border border-slate-200 p-1 rounded-full h-auto">
            {[
              { v: "all", l: "All" },
              { v: "ppc", l: "PPC" },
              { v: "listing", l: "Listing" },
              { v: "account", l: "Account" },
              { v: "strategy", l: "Strategy" },
            ].map((t) => (
              <TabsTrigger
                key={t.v}
                value={t.v}
                className="rounded-full px-4 py-1.5 text-sm text-slate-600 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:font-semibold transition-colors"
              >
                {t.l}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={tab} className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {filtered.map((cs) => (
                <CaseStudyCard key={cs.id} cs={cs} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex justify-center reveal">
          <a href="#contact">
            <Button
              variant="outline"
              className="rounded-full px-6 h-11 bg-white hover:bg-slate-50 text-slate-900 border-slate-300 hover:border-slate-400 transition-colors"
            >
              Request a private case discussion
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
