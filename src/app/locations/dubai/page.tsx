import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Agency in Dubai, UAE — DUCKYOURBRAND",
  description:
    "DUCKYOURBRAND is Dubai's viral marketing agency. 5M+ organic views, zero ad spend. We build attention machines that turn views into revenue. Best results-based marketing agency in UAE.",
  keywords: [
    "marketing agency Dubai",
    "marketing agency UAE",
    "best marketing agency Dubai",
    "viral marketing agency Dubai",
    "social media marketing agency Dubai",
    "digital marketing agency Dubai",
    "TikTok marketing agency Dubai",
    "Instagram marketing Dubai",
    "content marketing agency UAE",
    "organic marketing Dubai",
    "DUCKYOURBRAND Dubai",
    "Duck Your Brand Dubai",
    "top marketing agency UAE",
    "advertising agency Dubai",
    "marketing companies in Dubai",
  ],
  alternates: {
    canonical: "https://duckyourbrand.com/locations/dubai",
  },
  openGraph: {
    title: "Marketing Agency in Dubai, UAE | DUCKYOURBRAND",
    description:
      "Dubai's viral marketing agency. 5M+ organic views, zero ad spend. The only UAE agency with a proven, repeatable virality system.",
    url: "https://duckyourbrand.com/locations/dubai",
  },
};

const dubaiSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "DUCKYOURBRAND Dubai",
  url: "https://duckyourbrand.com/locations/dubai",
  description:
    "Viral marketing agency serving Dubai, UAE. We engineer organic virality for brands across all industries.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  priceRange: "AED 12,000–55,000/month",
};

const DUBAI_FAQS = [
  {
    q: "Do you have a viral marketing agency in Dubai?",
    a: "Yes. DUCKYOURBRAND operates in Dubai and serves brands across the UAE. We have delivered organic viral campaigns for Dubai-based F&B, retail, real estate, and hospitality clients.",
  },
  {
    q: "How much does a viral marketing campaign cost in Dubai?",
    a: "Our Dubai engagements start at AED 12,000/month for a 90-day Virality Sprint. Full Growth Systems run AED 22,000–40,000/month. One-time Attention Audits are AED 4,000–6,000.",
  },
  {
    q: "Do Dubai-based brands need paid ads to go viral?",
    a: "No. DYB's entire model is organic — zero paid promotion. We engineer content that spreads through platform algorithms and audience psychology specific to the UAE market.",
  },
  {
    q: "Which Dubai neighborhoods and areas do you serve?",
    a: "We serve all of Dubai — Business Bay, Downtown, DIFC, JBR, Marina, Jumeirah, Silicon Oasis, and beyond. We also serve the wider UAE: Abu Dhabi, Sharjah, Ajman, and RAK.",
  },
  {
    q: "What industries do you serve in Dubai?",
    a: "F&B, retail, e-commerce, real estate, hospitality, health and wellness, and consumer products. Dubai's competitive market makes organic virality especially high-leverage.",
  },
];

export default function DubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: DUBAI_FAQS.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-[#0D0D0D] text-[#F7F7F7] pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] text-[#6B6560] uppercase tracking-[0.3em] font-black mb-12">
            <Link href="/" className="hover:text-[#C62B1E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#6B6560]">Locations</span>
            <span>/</span>
            <span className="text-[#C62B1E]">Dubai</span>
          </nav>

          {/* Hero */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C62B1E]" />
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">Dubai · UAE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
              Marketing Agency<br />
              <span className="text-[#C62B1E]">in Dubai.</span>
            </h1>
            <p className="text-[#A8A49E] text-lg font-light max-w-2xl leading-relaxed">
              Dubai has over 1,500 marketing agencies. None of them have a documented, repeatable system for organic virality. DUCKYOURBRAND does. We are the UAE&apos;s only viral marketing agency with proven results — 5M+ organic views, zero ad spend. We build attention machines for Dubai brands that turn views into real revenue.
            </p>
          </div>

          {/* Why Dubai needs this */}
          <section className="mb-16 border-l-2 border-[#C62B1E]/30 pl-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#F7F7F7] mb-4">
              Why most Dubai marketing agencies fail you.
            </h2>
            <p className="text-[#A8A49E] font-light leading-relaxed mb-4">
              Dubai is one of the most competitive social media markets in the world. Brands spend six figures monthly on paid campaigns and influencers — and still see declining organic reach. The average UAE brand reaches less than 1.4% of its own followers organically.
            </p>
            <p className="text-[#A8A49E] font-light leading-relaxed">
              DYB exists to fix this. We engineer the conditions for content to spread — across TikTok, Instagram Reels, and YouTube Shorts — using platform mechanics, cultural triggers, and psychological frameworks specific to the UAE audience.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">Services in Dubai</h2>
            <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]">
              {[
                { name: "Attention Audit", price: "AED 4,000–6,000", desc: "One-time diagnostic. We identify your viral potential and build the roadmap." },
                { name: "Virality Sprint", price: "AED 12,000–20,000/mo", desc: "90-day system. Engineered organic reach, documented process, zero ad spend." },
                { name: "Full Growth System", price: "AED 22,000–40,000/mo", desc: "Ongoing viral + revenue engine. Monthly retainer with measurable output." },
                { name: "Enterprise Program", price: "From AED 55,000/mo", desc: "Multi-platform, multi-market. Custom viral architecture for large brands." },
              ].map(({ name, price, desc }) => (
                <div key={name} className="bg-[#0D0D0D] p-7 hover:bg-[#111] transition-colors duration-200">
                  <div className="text-[10px] font-black text-[#C62B1E] uppercase tracking-[0.3em] mb-2">{price}</div>
                  <div className="text-lg font-black text-[#F7F7F7] uppercase mb-2">{name}</div>
                  <div className="text-[#6B6560] text-sm font-light">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">Dubai FAQ</h2>
            <div className="space-y-px">
              {DUBAI_FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-[#1A1A1A] py-5">
                  <div className="text-[#C8C4BE] font-medium text-sm mb-2">{q}</div>
                  <div className="text-[#6B6560] text-sm font-light leading-relaxed">{a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-8 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] transition-colors duration-200"
            >
              Work With Us in Dubai
            </Link>
            <Link href="/" className="text-[10px] font-black text-[#6B6560] hover:text-[#F7F7F7] uppercase tracking-[0.3em] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
