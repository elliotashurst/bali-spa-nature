"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, FlaskConical, ClipboardCheck, Factory } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Concept & Product Brief",
    text: "Review of product intent, professional use case, volumes, and regulatory considerations.",
    icon: FileText,
    image: "/hero-rice.jpg",
  },
  {
    number: "02",
    title: "Formulation & Sampling",
    text: "Structured formulation development and refinement through sampling.",
    icon: FlaskConical,
    image: "/hero-rice.jpg",
  },
  {
    number: "03",
    title: "Production Planning & Compliance",
    text: "Final specifications, documentation, and timelines confirmed prior to manufacture.",
    icon: ClipboardCheck,
    image: "/hero-rice.jpg",
  },
  {
    number: "04",
    title: "Manufacturing & Ongoing Supply",
    text: "Batch-based production with defined quality controls and repeat supply planning.",
    icon: Factory,
    image: "/hero-rice.jpg",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const items = section.querySelectorAll(".timeline-item");
    const dots = section.querySelectorAll(".timeline-dot");
    const pulses = section.querySelectorAll(".timeline-pulse");

    const ctx = gsap.context(() => {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(items, { opacity: 0, y: 36 });
      gsap.set(dots, { scale: 0.6, opacity: 0 });
      gsap.set(pulses, { scale: 0.8, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        })
        .to(line, { scaleY: 1, duration: 1.4, ease: "power3.out" })
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.18,
          },
          "-=1.05"
        )
        .to(
          dots,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(1.8)",
            stagger: 0.16,
          },
          "-=0.9"
        )
        .to(
          pulses,
          {
            opacity: 0.28,
            duration: 0.4,
            stagger: 0.12,
            onComplete: () => {
              if (window.innerWidth > 768) {
                gsap.to(pulses, {
                  scale: 1.55,
                  opacity: 0,
                  duration: 1.8,
                  ease: "power2.out",
                  stagger: {
                    each: 0.35,
                    repeat: -1,
                    repeatDelay: 1.4,
                  },
                });
              }
            },
          },
          "-=0.4"
        );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-spacing px-6 md:px-10 bg-[var(--page-bg)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="heading-section">
            How Projects Move From Concept to Production
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--line-soft)]">
            <div ref={lineRef} className="h-full w-px bg-[var(--olive)]" />
          </div>

          <div className="space-y-10 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.title}
                  className={`timeline-item relative grid md:grid-cols-2 md:gap-16 items-center ${
                    !isLast ? "md:pb-16" : ""
                  }`}
                >
                  <div className="timeline-dot hidden md:flex absolute left-1/2 top-7 h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--page-bg)] border border-[var(--olive)] z-10">
                    <span className="timeline-pulse absolute h-11 w-11 rounded-full border border-[var(--olive)]" />
                    <span className="relative h-3 w-3 rounded-full bg-[var(--olive)]" />
                  </div>

                  <div className={isLeft ? "md:text-right" : "md:col-start-2"}>
                    <div className="group rounded-3xl bg-white/70 border border-black/5 p-7 md:p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]">
                      <div
                        className={`mb-5 flex ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        } justify-start`}
                      >
                        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[var(--sand)] bg-[var(--surface)] shadow-sm">
                          <img
                            src={step.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-25"
                          />
                          <div className="absolute inset-0 bg-[var(--surface)]/55" />
                          <div className="relative flex h-full w-full items-center justify-center">
                            <Icon
                              size={30}
                              strokeWidth={1.7}
                              className="text-[var(--olive)] transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      </div>

                      <span className="text-small-ui text-[var(--bronze)] transition-colors duration-300 group-hover:text-[var(--gold-deep)]">
                        {step.number}
                      </span>

                      <h3 className="heading-card mt-3 transition-colors duration-300 group-hover:text-[var(--olive)]">
                        {step.title}
                      </h3>

                      <p className="text-body mt-4">{step.text}</p>
                    </div>
                  </div>

                  <div className={isLeft ? "hidden md:block" : "hidden"} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}