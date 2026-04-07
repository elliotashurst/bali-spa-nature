import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import MobileStickyCTA from "@/components/MobileStickyCTA";

/* -----------------------------------------
   SEO METADATA (SERVER ONLY)
----------------------------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = slug
    ? await client.fetch(
        `*[_type=="product" && slug.current==$slug][0]{ name, description }`,
        { slug }
      )
    : null;

  if (!product) {
    return {
      title: "Product | Bali Spa Nature",
      description: "Premium spa and wellness products manufactured in Bali.",
    };
  }

  return {
    title: `${product.name} | Bali Spa Nature`,
    description: product.description?.slice(0, 155),
  };
}

/* -----------------------------------------
   PRODUCT PAGE
----------------------------------------- */
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = slug
    ? await client.fetch(
        `*[_type=="product" && slug.current==$slug][0]{
          _id,
          name,
          description,
          price,
          "imageUrl": image.asset->url,
          specs{
            moq,
            leadTime,
            export,
            compliance
          }
        }`,
        { slug }
      )
    : null;

  if (!product) {
    return <div className="p-20 text-center">Product not found.</div>;
  }

  // Keep schema "safe" for B2B: no public offers/pricing by default
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.imageUrl ? [product.imageUrl] : undefined,
    brand: { "@type": "Organization", name: "Bali Spa Nature" },
  };

  const complianceValue =
    (Array.isArray(product?.specs?.compliance)
      ? product.specs.compliance.join(", ")
      : product?.specs?.compliance) || "On request";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--page-bg)] pt-28 pb-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/products"
            className="text-sm text-black/60 hover:text-black"
          >
            ← Back to products
          </Link>

          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-olive">
            {product.name}
          </h1>

          {product.description ? (
            <p className="mt-4 max-w-2xl text-lg text-text-light leading-relaxed">
              {product.description}
            </p>
          ) : null}
        </div>
      </section>

      <TrustStrip
        items={[
          { label: "MOQ", value: product?.specs?.moq || "On request" },
          { label: "Lead time", value: product?.specs?.leadTime || "On request" },
          { label: "Export", value: product?.specs?.export || "Global B2B" },
          { label: "Compliance", value: complianceValue },
        ]}
      />

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image / gallery area */}
          <div className="rounded-3xl border border-black/10 bg-white p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : null}
            </div>
          </div>

          {/* Spec panel */}
          <div>
            <div className="rounded-3xl border border-black/10 bg-white p-6">
              <h2 className="text-lg font-semibold tracking-tight">
                Private label details
              </h2>
              <p className="mt-2 text-sm text-black/70">
                Request MOQ, lead time, packaging options, and customization.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-black/10 p-4">
                  <div className="text-black/60">MOQ</div>
                  <div className="mt-1 font-medium">
                    {product?.specs?.moq || "On request"}
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 p-4">
                  <div className="text-black/60">Lead time</div>
                  <div className="mt-1 font-medium">
                    {product?.specs?.leadTime || "On request"}
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 p-4">
                  <div className="text-black/60">Packaging</div>
                  <div className="mt-1 font-medium">Available</div>
                </div>

                <div className="rounded-2xl border border-black/10 p-4">
                  <div className="text-black/60">Customization</div>
                  <div className="mt-1 font-medium">Available</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Request Catalogue
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Debug only */}
            {process.env.NODE_ENV !== "production" && product.price ? (
              <p className="mt-6 text-xs text-black/50">
                Internal reference price: ${product.price}
              </p>
            ) : null}
          </div>
        </div>
      </main>

      <MobileStickyCTA
        primaryHref="/contact"
        primaryLabel="Request Catalogue"
        secondaryHref="/contact"
        secondaryLabel="Book a Call"
      />
    </>
  );
}
