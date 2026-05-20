"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SearchCheck,
  FlaskConical,
  PackageCheck,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Project Brief & Feasibility",
    text: "We review property type, intended product use, estimated volume, packaging direction, timeline, and regulatory considerations before confirming development fit.",
    icon: SearchCheck,
    image: "/hero-rice.jpg",
  },
  {
    number: "02",
    title: "Formulation & Sampling",
    text: "Formulations are refined through structured sampling. Revisions are documented so that approved samples can be repeated accurately in batch production.",
    icon: FlaskConical,
    image: "/hero-rice.jpg",
  },
  {
    number: "03",
    title: "Specification & Production Planning",
    text: "Final formulation, scent direction, packaging format, labelling requirements, and production schedule are confirmed before manufacturing begins.",
    icon: PackageCheck,
    image: "/hero-rice.jpg",
  },
  {
    number: "04",
    title: "Manufacturing & Ongoing Supply",
    text: "Production operates in defined batch cycles with quality checks, documentation, and repeat supply planning.",
    icon: RefreshCw,
    image: "/hero-rice.jpg",
  },
];

export default function PrivateLabelTimeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".timeline-card");
    const dots = section.querySelectorAll(".timeline-dot");

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        opacity: 0,
        x: -30,
      });

      gsap.set(dots, {
        scale: 0.7,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      tl.to(
        cards,
        {
          opacity: 1,
          x: 0,
          stagger: 0.16,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      );

      tl.to(
        dots,
        {
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.45,
          ease: "back.out(1.8)",
        },
        "-=0.7"
      );

      if (window.innerWidth > 768) {
        gsap.to(dots, {
          y: -5,
          duration: 2,
          ease: "sine.inOut",
          stagger: 0.15,
          repeat: -1,
          yoyo: true,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="eyebrow mb-4">Private Label Process</p>

          <h2 className="heading-section">
            Private Label Development Pathway
          </h2>

          <p className="text-body-lg mt-5 max-w-2xl mx-auto">
            Private label work begins from Bali Spa Nature’s proven formulation
            foundations and is refined to suit the client’s use case, scent
            direction, ingredient emphasis, packaging needs, and operational
            environment.
          </p>

          <p className="text-body-lg mt-5 max-w-2xl mx-auto">
            Where deeper custom development is required, feasibility is reviewed
            before the project proceeds.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop line */}
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-[var(--line-soft)]">
            <div
              ref={lineRef}
              className="h-px bg-[var(--olive)] w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="timeline-card relative">
                  {/* Dot */}
                  <div className="timeline-dot hidden lg:flex absolute left-1/2 -top-1 -translate-x-1/2 h-5 w-5 rounded-full bg-[var(--olive)] border-4 border-[var(--page-bg)] z-10" />

                  {/* Card */}
                  <div className="group rounded-[2rem] bg-white/70 border border-black/5 p-7 md:p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/85 hover:shadow-[0_22px_55px_rgba(74,93,82,0.16)]">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[var(--sand)] bg-[var(--surface)] shadow-sm">
                        <img
                          src={step.image}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-20"
                        />

                        <div className="absolute inset-0 bg-[var(--surface)]/55" />

                        <div className="relative flex h-full w-full items-center justify-center">
                          <Icon
                            size={30}
                            strokeWidth={1.7}
                            className="text-[var(--olive)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Number */}
                    <span className="text-small-ui text-[var(--bronze)] transition-colors duration-300 group-hover:text-[var(--gold-deep)]">
                      {step.number}
                    </span>

                    {/* Title */}
                    <h3 className="heading-card mt-3 transition-colors duration-300 group-hover:text-[var(--olive)]">
                      {step.title}
                    </h3>

                    {/* Copy */}
                    <p className="text-body mt-4">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}