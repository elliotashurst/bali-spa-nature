module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ Existing SPA product brand colors — KEEP THESE
        spa: {
          green: "#3E7A47",
          light: "#E9F4EC",
          gold: "#E7C775",
        },

        // ✅ Add Bali Spa Nature website brand colors — NEW
        cream: "#F5F3EF",
        beige: "#E8E4DA",
        olive: "#6B7A5C",
        sage: "#8A9A7B",
        bronze: "#A0826D",
        gold: "#B8956A",        // A richer bronze-gold for accents
        "text-dark": "#3A3A3A",
        "text-light": "#666666",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
