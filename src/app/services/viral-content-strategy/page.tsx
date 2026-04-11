import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Viral Content Strategy — Organic Virality System",
  description:
    "DUCKYOURBRAND's Viral Content Strategy service engineers organic reach as a repeatable system. TikTok, Instagram Reels, YouTube Shorts. Egypt & UAE. No paid ads.",
  keywords: [
    "viral content strategy",
    "organic virality service",
    "TikTok viral strategy UAE",
    "Instagram Reels strategy Egypt",
    "content that goes viral",
    "how to go viral on TikTok UAE",
  ],
  alternates: { canonical: "https://duckyourbrand.com/services/viral-content-strategy" },
  openGraph: {
    title: "Viral Content Strategy | DUCKYOURBRAND",
    description: "Engineered organic virality. Repeatable. Documented. No ad spend.",
    url: "https://duckyourbrand.com/services/viral-content-strategy",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Viral Content Strategy",
  provider: {
    "@type": "MarketingAgency",
    name: "DUCKYOURBRAND",
    url: "https://duckyourbrand.com",
  },
  description:
    "A documented, repeatable system for organic content virality on TikTok, Instagram Reels, and YouTube Shorts. Engineered for Arab market audiences. Zero paid amplification.",
  areaServed: ["Egypt", "United Arab Emirates", "MENA"],
  offers: {
    "@type": "Offer",
    price: "12000",
    priceCurrency: "AED",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "12000",
      priceCurrency: "AED",
      unitCode: "MON",
    },
  },
};

const PROCESS = [
  { n: "01", title: "Attention Audit", desc: "We map your brand's story, audience triggers, and platform fit. We identify exactly where virality is possible and what it will take." },
  { n: "02", title: "Virality Architecture", desc: "We build the content framework: hooks, formats, posting rhythms, and psychological triggers calibrated to your specific platform and audience." },
  { n: "03", title: "Production System", desc: "We establish the production pipeline — scripting, filming direction, editing specs — so content quality is consistent and scalable." },
  { n: "04", title: "Launch & Iterate", desc: "We launch, monitor platform analytics in real time, and iterate within the first two weeks. The system learns and improves with every piece of content." },
  { n: "05", title: "Handover & Scale", desc: "At the end of the sprint, you own a documented system. You can run it independently or continue with DYB for ongoing management." },
];

const FAQS = [
  { q: "What is viral content strategy?", a: "It is the documented process of engineering content to spread organically — through platform algorithm mechanics, audience psychology, and cultural triggers — without paid amplification." },
  { q: "How much does viral content strategy cost at DYB?", a: "The Virality Sprint (90 days, full system) starts at AED 12,000/month. Full Growth Systems start at AED 22,000/month. One-time Attention Audits are AED 4,000–6,000." },
  { q: "Which platforms does DYB's viral strategy cover?", a: "TikTok, Instagram Reels, and YouTube Shorts are the primary channels. We also cover X (Twitter) and LinkedIn for B2B clients on request." },
  { q: "How long does it take to go viral with DYB's system?", a: "Most clients see meaningful reach increases within 3–4 weeks. Viral moments typically occur between weeks 3–8. Revenue impact follows within 6 weeks." },
  { q: "Do I need a big following to go viral?", a: "No. In fact, our most successful campaigns started with brands that had almost no audience. The system works on algorithm mechanics, not existing follower count." },
];

export default function ViralContentStrategyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-[#0D0D0D] text-[#F7F7F7] pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] text-[#4A4845] uppercase tracking-[0.3em] font-black mb-12">
            <Link href="/" className="hover:text-[#C62B1E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#6B6560]">Services</span>
            <span>/</span>
            <span className="text-[#C62B1E]">Viral Content Strategy</span>
          </nav>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C62B1E]" />
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
              Viral Content<br />
              <span className="text-[#C62B1E]">Strategy.</span>
            </h1>
            <p className="text-[#9B9690] text-lg font-light max-w-2xl leading-relaxed">
              Virality is not luck. It is a repeatable process built on platform mechanics, audience psychology, and relentless iteration. DYB has documented and engineered this process — and we deploy it for your brand.
            </p>
          </div>

          {/* Pricing */}
          <section className="mb-16 p-8 border border-[#C62B1E]/20 bg-[#1A1A1A]">
            <div className="text-[10px] font-black text-[#C62B1E] uppercase tracking-[0.4em] mb-3">Pricing</div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-black text-[#F7F7F7]">AED 4,000</div>
                <div className="text-[#6B6560] text-xs mt-1">Attention Audit (one-time)</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#F7F7F7]">AED 12,000/mo</div>
                <div className="text-[#6B6560] text-xs mt-1">Virality Sprint (90-day min)</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#F7F7F7]">AED 22,000/mo</div>
                <div className="text-[#6B6560] text-xs mt-1">Full Growth System (6-mo min)</div>
              </div>
            </div>
          </section>

          {/* Who it&apos;s for */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-6">Who this is for</h2>
            <div className="space-y-2">
              {[
                "Brands that are posting consistently but getting less than 2% organic reach",
                "Businesses spending AED 10,000+ monthly on ads but seeing declining returns",
                "Founders who know their product is worth talking about but nobody is talking about it",
                "Marketing teams that have tried influencer campaigns and seen zero lasting impact",
                "Any brand in Egypt or the UAE ready to build an audience that compounds",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 border-b border-[#1A1A1A]">
                  <span className="w-1.5 h-1.5 bg-[#C62B1E] rounded-full flex-shrink-0 mt-2" />
                  <span className="text-[#9B9690] text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">How it works</h2>
            <div className="space-y-px bg-[#1A1A1A]">
              {PROCESS.map(({ n, title, desc }) => (
                <div key={n} className="bg-[#0D0D0D] p-7 flex gap-5 hover:bg-[#111] transition-colors duration-200">
                  <span className="text-[#C62B1E] text-xs font-black flex-shrink-0 mt-0.5">{n}</span>
                  <div>
                    <div className="font-black text-[#F7F7F7] uppercase text-sm mb-1">{title}</div>
                    <div className="text-[#6B6560] text-sm font-light leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">FAQ</h2>
            <div className="space-y-px">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-[#1A1A1A] py-5">
                  <div className="text-[#C8C4BE] font-medium text-sm mb-2">{q}</div>
                  <div className="text-[#6B6560] text-sm font-light leading-relaxed">{a}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-8 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] transition-colors duration-200">
              Start Your Virality Sprint
            </Link>
            <Link href="/" className="text-[10px] font-black text-[#4A4845] hover:text-[#F7F7F7] uppercase tracking-[0.3em] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
