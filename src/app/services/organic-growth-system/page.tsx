import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organic Growth System — Revenue From Organic Reach",
  description:
    "DYB's Organic Growth System turns organic views into revenue. A documented, ongoing system for brands in Egypt and UAE that want consistent inbound growth without ad spend.",
  keywords: [
    "organic growth system UAE",
    "organic reach Egypt",
    "social media growth without ads",
    "organic marketing system",
    "TikTok organic growth",
    "Instagram organic reach UAE",
    "content that converts UAE",
  ],
  alternates: { canonical: "https://duckyourbrand.com/services/organic-growth-system" },
  openGraph: {
    title: "Organic Growth System | DUCKYOURBRAND",
    description: "Organic reach to revenue. Documented. No paid ads. Egypt & UAE.",
    url: "https://duckyourbrand.com/services/organic-growth-system",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Organic Growth System",
  provider: { "@type": "MarketingAgency", name: "DUCKYOURBRAND", url: "https://duckyourbrand.com" },
  description: "An ongoing system that turns organic content views into measurable revenue for brands in Egypt and the UAE.",
  offers: {
    "@type": "Offer",
    price: "22000",
    priceCurrency: "AED",
    priceSpecification: { "@type": "UnitPriceSpecification", price: "22000", priceCurrency: "AED", unitCode: "MON" },
  },
};

const OUTCOMES = [
  { n: "3–4 wks", label: "to first significant organic reach increase" },
  { n: "6 wks", label: "to measurable inbound leads from organic content" },
  { n: "0", label: "paid amplification required" },
  { n: "100%", label: "of system output documented and client-owned" },
];

const FAQS = [
  { q: "What is the Organic Growth System?", a: "A 6-month ongoing engagement where DYB runs, iterates, and optimises your organic content system — with the goal of producing consistent inbound leads and revenue from social media, without ad spend." },
  { q: "How much does the Organic Growth System cost?", a: "AED 22,000–40,000/month, 6-month minimum. EGP equivalent available for Egypt-based clients." },
  { q: "What is the difference between the Virality Sprint and the Organic Growth System?", a: "The Virality Sprint (90 days) builds and launches the system. The Organic Growth System is the ongoing management, optimisation, and scaling of that system. Most clients start with a Sprint and continue with Growth." },
  { q: "What does DYB actually do in a given month?", a: "Strategy, scripting, production direction, posting, real-time analytics monitoring, weekly iteration, and a monthly performance report. You see exactly what is working, why, and what we are changing." },
  { q: "What results should I expect?", a: "Organic reach growth within 3–4 weeks, inbound leads within 6 weeks, and compounding audience growth month over month. Results scale with consistency — we don't promise viral every month, but we build the conditions for it." },
];

export default function OrganicGrowthSystemPage() {
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

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] text-[#6B6560] uppercase tracking-[0.3em] font-black mb-12">
            <Link href="/" className="hover:text-[#C62B1E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#6B6560]">Services</span>
            <span>/</span>
            <span className="text-[#C62B1E]">Organic Growth System</span>
          </nav>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C62B1E]" />
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
              Organic Growth<br />
              <span className="text-[#C62B1E]">System.</span>
            </h1>
            <p className="text-[#A8A49E] text-lg font-light max-w-2xl leading-relaxed">
              Views that do not convert are just vanity. The DYB Organic Growth System is built to turn attention into revenue — through consistent, engineered content that compounds over time.
            </p>
          </div>

          {/* Outcomes */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A]">
              {OUTCOMES.map(({ n, label }) => (
                <div key={label} className="bg-[#0D0D0D] p-6 hover:bg-[#111] transition-colors">
                  <div className="text-2xl md:text-3xl font-black text-[#C62B1E] leading-none mb-2">{n}</div>
                  <div className="text-[#6B6560] text-xs font-medium leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16 p-8 border border-[#C62B1E]/20 bg-[#1A1A1A]">
            <div className="text-[10px] font-black text-[#C62B1E] uppercase tracking-[0.4em] mb-3">Pricing</div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-black text-[#F7F7F7]">AED 22,000–40,000/mo</div>
                <div className="text-[#6B6560] text-xs mt-1">6-month minimum. UAE pricing.</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#F7F7F7]">EGP 350,000–600,000/mo</div>
                <div className="text-[#6B6560] text-xs mt-1">6-month minimum. Egypt pricing.</div>
              </div>
            </div>
          </section>

          {/* What&apos;s included */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-6">What&apos;s included every month</h2>
            <div className="space-y-2">
              {[
                "Full content strategy and scripting (adapted weekly based on performance data)",
                "Production direction and quality control",
                "Platform scheduling and posting (TikTok, Instagram, YouTube)",
                "Real-time analytics monitoring and algorithm response",
                "Weekly performance report with clear metrics: reach, saves, shares, DMs, leads",
                "Monthly strategy session with the DYB team",
                "Ongoing documentation — you own everything we build",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 border-b border-[#1A1A1A]">
                  <span className="w-1.5 h-1.5 bg-[#C62B1E] rounded-full flex-shrink-0 mt-2" />
                  <span className="text-[#A8A49E] text-sm font-light">{item}</span>
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
              Start the Growth System
            </Link>
            <Link href="/services/viral-content-strategy" className="text-[10px] font-black text-[#6B6560] hover:text-[#C62B1E] uppercase tracking-[0.3em] transition-colors">
              See Virality Sprint first →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
