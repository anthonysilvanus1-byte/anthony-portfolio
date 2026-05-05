import { useState } from "react";
import {
  Mail,
  Linkedin,
  Send,
  ArrowUpRight,
  Globe,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { profile } from "../data/mock";

const UpworkIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.213 2.703 2.704-.001 1.489-1.212 2.701-2.704 2.701zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    const subject = encodeURIComponent(
      `New inquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${
        form.company || "—"
      }\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast.success("Email draft opened", {
      description: "Send it from your mail client and I'll get back shortly.",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Contact
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              Let&apos;s talk about your{" "}
              <span className="text-emerald-600">Amazon growth.</span>
            </h2>
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              If you need support with Amazon PPC, listing optimization,
              marketplace troubleshooting, or eCommerce growth strategy, feel
              free to reach out.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={profile.links.email}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_4px_12px_-4px_rgba(15,23,42,0.08)] px-4 py-4 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Email
                    </p>
                    <p className="text-sm text-slate-900 truncate">
                      {profile.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 shrink-0 transition-colors" />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_4px_12px_-4px_rgba(15,23,42,0.08)] px-4 py-4 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Linkedin className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      LinkedIn
                    </p>
                    <p className="text-sm text-slate-900 truncate">
                      adeyemi-ifeoluwa-anthony
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 shrink-0 transition-colors" />
              </a>

              <a
                href={profile.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_4px_12px_-4px_rgba(15,23,42,0.08)] px-4 py-4 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <UpworkIcon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Upwork
                    </p>
                    <p className="text-sm text-slate-900 truncate">
                      View Upwork profile
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 shrink-0 transition-colors" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <Globe className="h-4 w-4 text-emerald-600" />
              {profile.location}
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              className="surface rounded-3xl p-6 sm:p-8 lg:p-10"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 font-semibold">
                  Send a message
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs text-slate-600">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/50 h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs text-slate-600">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@brand.com"
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/50 h-11"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="company" className="text-xs text-slate-600">
                    Company / Brand{" "}
                    <span className="text-slate-400">(optional)</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Brand name or marketplace"
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/50 h-11"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="message" className="text-xs text-slate-600">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product, marketplace, current performance, and what you're hoping to improve."
                    rows={6}
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/50 resize-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <p className="text-xs text-slate-500">
                  This form opens your email client with a draft addressed to me.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full px-6 h-12 transition-colors shadow-[0_8px_24px_-8px_rgba(5,150,105,0.4)]"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="mr-1.5 h-4 w-4" />
                      Draft opened
                    </>
                  ) : (
                    <>
                      <Send className="mr-1.5 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
