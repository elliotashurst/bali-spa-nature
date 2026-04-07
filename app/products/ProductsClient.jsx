"use client";

import { useEffect, useMemo, useState } from "react";
import { client } from "@/lib/sanity";
import ProductsList from "@/components/ProductsList";
import MiniHero from "@/components/MiniHero";
import TrustStrip from "@/components/TrustStrip";

const CATEGORY_LABELS = {
  amenities: "Hotel & Villa Amenities",
  skincare: "Boutique Skincare",
  "body-care": "Natural Body Care",
  "spa-professional": "Professional Spa Treatments",
  "home-fragrance": "Aromatherapy & Home Fragrance",
  "hair-care": "Natural Hair Care",
  specialty: "Specialty Items",
};

function prettyType(value) {
  if (!value || value === "all") return "All";
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function normalize(str) {
  return (str || "").toString().toLowerCase().trim();
}

function Chip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/70">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="rounded-full px-2 py-0.5 text-black/50 hover:text-black/80 transition"
        aria-label={`Remove ${label}`}
      >
        ×
      </button>
    </span>
  );
}

export default function ProductsClient() {
  const [products, setProducts] = useState([]);

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest"); // newest | az | za

  useEffect(() => {
    client
      .fetch(
        `*[_type=="product" && defined(slug.current)] | order(_createdAt desc){
          _id,
          _createdAt,
          name,
          description,
          category,
          productType,
          "imageUrl": image.asset->url,
          "slug": slug.current
        }`
      )
      .then(setProducts)
      .catch((err) => {
        console.error("Products fetch error", err);
        setProducts([]);
      });
  }, []);

  const resetAll = () => {
    setActiveCategory("all");
    setActiveType("all");
    setSearch("");
    setSort("newest");
  };

  const isFiltered =
    activeCategory !== "all" ||
    activeType !== "all" ||
    normalize(search).length > 0 ||
    sort !== "newest";

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    const arr = Array.from(set);
    arr.sort((a, b) =>
      (CATEGORY_LABELS[a] || a).localeCompare(CATEGORY_LABELS[b] || b)
    );
    return ["all", ...arr];
  }, [products]);

  const types = useMemo(() => {
    const set = new Set(
      products
        .filter((p) => activeCategory === "all" || p.category === activeCategory)
        .map((p) => p.productType)
        .filter(Boolean)
    );
    const arr = Array.from(set);
    arr.sort((a, b) => prettyType(a).localeCompare(prettyType(b)));
    return ["all", ...arr];
  }, [products, activeCategory]);

  const filtered = useMemo(() => {
    const q = normalize(search);

    // 1) Filter
    let result = products.filter((p) => {
      const catOk = activeCategory === "all" || p.category === activeCategory;
      const typeOk = activeType === "all" || p.productType === activeType;

      const text = normalize(`${p.name || ""} ${p.description || ""}`);
      const searchOk = !q || text.includes(q);

      return catOk && typeOk && searchOk;
    });

    // 2) Sort
    if (sort === "az") {
      result = [...result].sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );
    } else if (sort === "za") {
      result = [...result].sort((a, b) =>
        (b.name || "").localeCompare(a.name || "")
      );
    } else {
      // newest
      result = [...result].sort((a, b) =>
        (b._createdAt || "").localeCompare(a._createdAt || "")
      );
    }

    return result;
  }, [products, activeCategory, activeType, search, sort]);

  const activeChips = useMemo(() => {
    const chips = [];

    if (activeCategory !== "all") {
      const label = CATEGORY_LABELS[activeCategory] || activeCategory;
      chips.push({
        key: "cat",
        label,
        onRemove: () => {
          setActiveCategory("all");
          setActiveType("all");
        },
      });
    }

    if (activeType !== "all") {
      chips.push({
        key: "type",
        label: prettyType(activeType),
        onRemove: () => setActiveType("all"),
      });
    }

    const q = normalize(search);
    if (q) {
      chips.push({
        key: "search",
        label: `Search: "${search}"`,
        onRemove: () => setSearch(""),
      });
    }

    if (sort !== "newest") {
      chips.push({
        key: "sort",
        label: `Sort: ${sort === "az" ? "A–Z" : "Z–A"}`,
        onRemove: () => setSort("newest"),
      });
    }

    return chips;
  }, [activeCategory, activeType, search, sort]);

  return (
    <>
      <MiniHero
        title="Our Products"
        subtitle="Browse private label-ready formulations across amenities, skincare, body care, spa treatments, and home fragrance."
        align="center"
        ctaPrimary={{ label: "Request Catalogue", href: "/contact" }}
        ctaSecondary={{ label: "Private Label", href: "/private-label" }}
      />

      <TrustStrip />

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-4 md:p-5">
          {/* Row 1: Search + Sort + Reset */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="relative">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products (e.g. shampoo, serum, reed diffuser...)"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/25"
                />
                {search ? (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-black/50 hover:text-black/70 transition"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-black/60 whitespace-nowrap">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm"
              >
                <option value="newest">Newest</option>
                <option value="az">A–Z</option>
                <option value="za">Z–A</option>
              </select>

              {isFiltered ? (
                <button
                  type="button"
                  onClick={resetAll}
                  className="rounded-full border border-black/15 bg-white px-4 py-3 text-sm text-black/70 hover:border-black/25 hover:text-black transition"
                >
                  Reset
                </button>
              ) : null}
            </div>
          </div>

          {/* Row 2: Category pills + Type */}
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                const label =
                  cat === "all" ? "All" : CATEGORY_LABELS[cat] || cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveType("all");
                    }}
                    className={[
                      "rounded-full px-4 py-2 text-sm border transition",
                      isActive
                        ? "bg-black text-white border-black"
                        : "bg-white text-black/70 border-black/10 hover:border-black/20",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-black/60">Type</label>
              <select
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
                className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {prettyType(t)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active chips */}
          {activeChips.length ? (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-black/50 mr-1">Active:</span>
              {activeChips.map((c) => (
                <Chip key={c.key} label={c.label} onRemove={c.onRemove} />
              ))}
            </div>
          ) : null}

          {/* Results count */}
          <div className="mt-4 text-xs text-black/55">
            Showing{" "}
            <span className="font-medium text-black/80">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {search ? (
              <>
                {" "}
                for <span className="font-medium text-black/80">“{search}”</span>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
  {filtered.length === 0 ? (
    <div className="rounded-3xl border border-black/10 bg-white p-10 text-center">
      <h3 className="text-xl font-semibold tracking-tight text-black/85">
        No products match your filters
      </h3>

      <p className="mt-3 text-sm text-black/60 max-w-xl mx-auto">
        Try a different category or product type, broaden your search term, or reset filters to view the full catalogue.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={resetAll}
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Reset filters
        </button>

        <button
          type="button"
          onClick={() => setSearch("")}
          className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black/75 hover:border-black/25 hover:text-black transition"
        >
          Clear search
        </button>
      </div>
    </div>
  ) : (
    <ProductsList products={filtered} />
  )}
</section>

    </>
  );
}
