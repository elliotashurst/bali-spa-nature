// components/AltImageText.jsx
"use client";
import Image from "next/image";

export default function AltImageText({ title, text, imageUrl, reverse = false }) {
  return (
    <section className={`py-16 ${reverse ? "bg-cream" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className={`order-2 md:order-${reverse ? "1" : "2"} text-center md:text-left`}>
          <h3 className="text-2xl font-bold text-olive mb-4">{title}</h3>
          <p className="text-text-light leading-relaxed">{text}</p>
        </div>
        <div className={`order-1 md:order-${reverse ? "2" : "1"} flex justify-center`}>
          <div className="w-[360px] h-[320px] relative rounded-xl overflow-hidden shadow-lg">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
