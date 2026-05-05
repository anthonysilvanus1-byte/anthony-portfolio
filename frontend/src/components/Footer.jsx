import { Mail, Linkedin, ArrowUpRight, Heart } from "lucide-react";
import { profile, navLinks } from "../data/mock";

const UpworkIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.213 2.703 2.704-.001 1.489-1.212 2.701-2.704 2.701zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 ring-1 ring-slate-200">
                <span className="font-display font-bold text-slate-900">A</span>
              </span>
              <span className="font-display font-semibold text-slate-900">
                {profile.name.split(" ")[0]}
                <span className="text-slate-400 mx-1">/</span>
                <span className="text-emerald-600">Amazon</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm text-slate-600 leading-relaxed">
              Amazon PPC &amp; eCommerce Growth Specialist supporting brands
              with optimization, listings, and clearer growth systems.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={profile.links.email}
                aria-label="Email"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-slate-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-slate-300 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-slate-300 transition-colors"
              >
                <UpworkIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4 font-semibold">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4 font-semibold">
              More
            </p>
            <ul className="space-y-2.5">
              {navLinks.slice(4).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-4 font-semibold">
              Get in touch
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <p className="mt-3 text-xs text-slate-500 break-all">
              {profile.email}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with
            <Heart className="h-3 w-3 fill-emerald-600 text-emerald-600" />
            for Amazon brands.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
