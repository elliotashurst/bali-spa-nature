"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    // replace with your API endpoint or Netlify form, etc.
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input name="name" className="input" placeholder="Your name" required />
      <input name="email" type="email" className="input" placeholder="Email" required />
      <input name="company" className="input" placeholder="Company (optional)" />
      <textarea name="message" rows={6} className="input" placeholder="Message" required />
      <div>
        <button type="submit" className="bg-olive text-white px-6 py-3 rounded-full shadow">
          Send Message
        </button>
        <span className="ml-4 text-sm text-text-light">
          {status === "sending" ? "Sending..." : status === "sent" ? "Message sent!" : status === "error" ? "Error, try again" : ""}
        </span>
      </div>
    </form>
  );
}
