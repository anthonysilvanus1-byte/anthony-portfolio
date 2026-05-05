import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/mock";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5500);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="relative py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Testimonials
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              Client feedback{" "}
              <span className="text-emerald-600">excerpts.</span>
            </h2>
            <p className="mt-3 text-xs text-slate-500 italic">
              Sample placeholder excerpts — actual client identifiers withheld.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-slate-300 transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-slate-300 transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="reveal">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_75%] lg:flex-[0_0_50%]"
                >
                  <div className="surface rounded-2xl p-7 sm:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <Quote className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed flex-1">
                      “{t.quote}”
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-display font-semibold text-slate-700 text-sm">
                        {t.author
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {t.author}
                        </p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-8 bg-emerald-500"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
