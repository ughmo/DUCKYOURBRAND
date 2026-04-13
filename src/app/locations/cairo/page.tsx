import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Viral Marketing Agency in Cairo, Egypt",
  description:
    "DUCKYOURBRAND is Cairo's leading viral marketing agency. We engineer organic virality for Egyptian brands — 5M+ organic views, zero ad spend. Turning views into revenue.",
  keywords: [
    "viral marketing agency Cairo",
    "viral marketing Egypt",
    "organic content marketing Cairo",
    "social media agency Egypt",
    "TikTok marketing Egypt",
    "content virality Cairo",
    "brand growth Egypt",
  ],
  alternates: {
    canonical: "https://duckyourbrand.com/locations/cairo",
  },
  openGraph: {
    title: "Viral Marketing Agency in Cairo, Egypt | DUCKYOURBRAND",
    description:
      "Cairo's viral marketing agency. 5M+ organic views from unknown brands. Zero ad spend. Proven, repeatable system.",
    url: "https://duckyourbrand.com/locations/cairo",
  },
};

const cairoSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "DUCKYOURBRAND Cairo",
  url: "https://duckyourbrand.com/locations/cairo",
  description: "Viral marketing agency headquartered in Cairo, Egypt.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  areaServed: { "@type": "Country", name: "Egypt" },
  priceRange: "EGP 70,000–600,000/month",
};

const CAIRO_FAQS = [
  {
    q: "Is DUCKYOURBRAND based in Cairo?",
    a: "Yes. Cairo is DYB's founding city and primary base of operations. Our team understands the Egyptian market — its cultural triggers, platform behavior, and audience psychology — at a native level.",
  },
  {
    q: "How much does viral marketing cost in Egypt?",
    a: "Our Egypt engagements start at EGP 180,000/month for a 90-day Virality Sprint. Attention Audits are EGP 70,000–100,000. Full Growth Systems run EGP 350,000–600,000/month.",
  },
  {
    q: "What results has DYB achieved for Egyptian brands?",
    a: "Our flagship Egyptian campaign generated 5M+ organic views with zero paid promotion for an unknown brand. This is the campaign that proved our system works at scale in the Egyptian market.",
  },
  {
    q: "Do Egyptian brands need TikTok to go viral?",
    a: "TikTok is our primary channel for Egyptian audiences, alongside Instagram Reels. Egypt has one of the highest TikTok engagement rates in the Arab world, making it ideal for organic virality.",
  },
  {
    q: "Which Egyptian cities do you serve?",
    a: "We serve brands in Cairo, Giza, Alexandria, and any Egyptian city with a digital audience. Most work is delivered remotely after an initial onboarding session.",
  },
];

export default function CairoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cairoSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: CAIRO_FAQS.map(({ q, a }) => ({
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
            <span className="text-[#C62B1E]">Cairo</span>
          </nav>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C62B1E]" />
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">Cairo · Egypt</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
              Viral Marketing<br />
              <span className="text-[#C62B1E]">in Cairo.</span>
            </h1>
            <p className="text-[#A8A49E] text-lg font-light max-w-2xl leading-relaxed">
              DUCKYOURBRAND was built in Cairo. We understand the Egyptian market at a native level — the culture, the platforms, and the psychology that makes content spread. Our founding campaign produced 5M+ organic views for an unknown Egyptian brand. Zero ad spend. One system.
            </p>
          </div>

          <section className="mb-16 border-l-2 border-[#C62B1E]/30 pl-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-[#F7F7F7] mb-4">
              Why Egypt is the biggest opportunity in Arab content.
            </h2>
            <p className="text-[#A8A49E] font-light leading-relaxed mb-4">
              Egypt has the largest Arabic-speaking audience on TikTok and Instagram. Egyptian creators dominate Arab social media. But Egyptian brands are almost invisible — most are still paying agencies for content calendars and stock photography while their audience scrolls past.
            </p>
            <p className="text-[#A8A49E] font-light leading-relaxed">
              DYB builds the virality engine for Egyptian brands that want to be seen, shared, and converted. No paid amplification. No celebrity endorsements. Just engineered content that the algorithm and the audience both want to spread.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">Egypt Pricing</h2>
            <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]">
              {[
                { name: "Attention Audit", price: "EGP 70,000–100,000", desc: "One-time viral potential diagnostic with full roadmap." },
                { name: "Virality Sprint", price: "EGP 180,000–300,000/mo", desc: "90-day organic reach system. Zero ad spend." },
                { name: "Full Growth System", price: "EGP 350,000–600,000/mo", desc: "Ongoing viral + revenue engine for scaling brands." },
                { name: "Content System Build", price: "EGP 500,000–900,000", desc: "One-time system build that you own and run independently." },
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
            <h2 className="text-2xl font-black uppercase text-[#F7F7F7] mb-8">Cairo FAQ</h2>
            <div className="space-y-px">
              {CAIRO_FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-[#1A1A1A] py-5">
                  <div className="text-[#C8C4BE] font-medium text-sm mb-2">{q}</div>
                  <div className="text-[#6B6560] text-sm font-light leading-relaxed">{a}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-8 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] transition-colors duration-200"
            >
              Work With Us in Cairo
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
