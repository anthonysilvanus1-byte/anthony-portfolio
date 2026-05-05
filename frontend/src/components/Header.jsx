import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { navLinks, profile } from "../data/mock";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 ring-1 ring-slate-200">
            <span className="font-display font-bold text-slate-900 text-base">
              A
            </span>
          </span>
          <span className="font-display font-semibold text-slate-900 text-base tracking-tight">
            {profile.name.split(" ")[0]}
            <span className="text-slate-400 mx-1">/</span>
            <span className="text-emerald-600">Amazon</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? "text-emerald-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-500" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex"
            aria-label="Contact"
          >
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full px-5 transition-colors"
            >
              Let&apos;s Talk
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Open menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white border-l border-slate-200 text-slate-900 w-[88%] sm:w-[420px]"
            >
              <div className="flex flex-col h-full pt-6">
                <div className="font-display text-lg font-semibold mb-8">
                  Navigate
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const id = link.href.replace("#", "");
                    const active = activeId === id;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`py-3 px-3 text-base rounded-md transition-colors flex items-center justify-between ${
                          active
                            ? "text-emerald-700 bg-emerald-50/60"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          className={`h-4 w-4 ${
                            active ? "text-emerald-600" : "text-slate-400"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-auto pb-4">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-colors">
                      Let&apos;s Talk
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                  <p className="mt-4 text-xs text-slate-500">
                    {profile.email}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
