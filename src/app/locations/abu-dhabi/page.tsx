import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Agency in Abu Dhabi, UAE — DUCKYOURBRAND",
  description:
    "DUCKYOURBRAND — Abu Dhabi's viral marketing agency. Organic content systems that turn views into revenue. Zero ad spend. Proven results across UAE.",
  keywords: [
    "marketing agency Abu Dhabi",
    "marketing agency UAE",
    "viral marketing agency Abu Dhabi",
    "social media agency Abu Dhabi",
    "digital marketing Abu Dhabi",
    "TikTok marketing Abu Dhabi",
    "Instagram marketing Abu Dhabi",
    "content marketing Abu Dhabi",
    "organic marketing UAE",
    "best marketing agency Abu Dhabi",
    "DUCKYOURBRAND Abu Dhabi",
  ],
  alternates: { canonical: "https://duckyourbrand.com/locations/abu-dhabi" },
  openGraph: {
    title: "Marketing Agency in Abu Dhabi, UAE | DUCKYOURBRAND",
    description: "Abu Dhabi's viral marketing agency. Organic content systems, zero ad spend, proven UAE results.",
    url: "https://duckyourbrand.com/locations/abu-dhabi",
  },
};

const abuDhabiSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "DUCKYOURBRAND Abu Dhabi",
  url: "https://duckyourbrand.com/locations/abu-dhabi",
  description: "Viral marketing agency serving Abu Dhabi and UAE capital region brands.",
  address: { "@type": "PostalAddress", addressLocality: "Abu Dhabi", addressCountry: "AE" },
  areaServed: { "@type": "City", name: "Abu Dhabi" },
  priceRange: "AED 12,000–55,000/month",
};

const ABU_DHABI_FAQS = [
  {
    q: "Do you work with brands in Abu Dhabi?",
    a: "Yes. DYB serves brands across the UAE including Abu Dhabi, Al Ain, and the broader capital region. All delivery is remote after onboarding, so location is not a barrier.",
  },
  {
    q: "What types of Abu Dhabi brands do you work with?",
    a: "Hospitality, real estate, government-adjacent consumer brands, F&B, retail, and luxury goods. Abu Dhabi's market skews toward premium positioning which makes organic authority especially valuable.",
  },
  {
    q: "How is the Abu Dhabi market different from Dubai?",
    a: "Abu Dhabi audiences respond differently to content — more trust-based, less hype-driven. Our system adapts cultural triggers and content frameworks to match. Same system, market-specific execution.",
  },
  {
    q: "How much does DYB charge for Abu Dhabi brands?",
    a: "Pricing is the same as UAE-wide: Virality Sprint from AED 12,000/month, Full Growth System from AED 22,000/month. Attention Audit at AED 4,000–6,000.",
  },
];

export default function AbuDhabiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(abuDhabiSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ABU_DHABI_FAQS.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-[#0D0D0D] text-[#F7F7F7] pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] text-[#6B6560] uppercase tracking-[0.3em] font-black mb-12">
            <Link href="/" className="hover:text-[#C62B1E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#6B6560]">Locations</span>
            <span>/</span>
            <span className="text-[#C62B1E]">Abu Dhabi</span>
          </nav>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C62B1E]" />
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">Abu Dhabi · UAE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
              Marketing Agency<br />
              <span className="text-[#C62B1E]">Abu Dhabi.</span>
            </h1>
            <p className="text-[#A8A49E] text-lg font-light max-w-2xl leading-relaxed">
              Abu Dhabi brands operate in one of the world&apos;s most premium, trust-driven markets. DUCKYOURBRAND builds organic virality systems calibrated to Abu Dhabi audience behavior — not generic templates, not paid boosts. Content that earns attention by being worth sharing.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]">
              {[
                { name: "Attention Audit", price: "AED 4,000–6,000", desc: "One-time viral diagnostic. Full roadmap included." },
                { name: "Virality Sprint", price: "AED 12,000–20,000/mo", desc: "90-day organic reach system." },
                { name: "Full Growth System", price: "AED 22,000–40,000/mo", desc: "Ongoing viral + revenue engine." },
                { name: "Enterprise Program", price: "From AED 55,000/mo", desc: "Multi-platform architecture for large Abu Dhabi brands." },
              ].map(({ name, price, desc }) => (
                <div key={name} className="bg-[#0D0D0D] p-7 hover:bg-[#111] transition-colors duration-200">
                  <div className="text-[10px] font-black text-[#C62B1E] uppercase tracking-[0.3em] mb-2">{price}</div>
                  <div className="text-lg font-black text-[#F7F7F7] uppercase mb-2">{name}</div>
                  <div className="text-[#6B6560] text-sm font-light">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">Abu Dhabi FAQ</h2>
            <div className="space-y-px">
              {ABU_DHABI_FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-[#1A1A1A] py-5">
                  <div className="text-[#C8C4BE] font-medium text-sm mb-2">{q}</div>
                  <div className="text-[#6B6560] text-sm font-light leading-relaxed">{a}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-8 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] transition-colors duration-200">
              Work With Us in Abu Dhabi
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
