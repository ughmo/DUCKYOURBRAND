import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PageLoader } from "@/components/PageLoader";
import { SmoothScroll } from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duckyourbrand.com"),
  title: {
    default: "DUCKYOURBRAND — Viral Marketing Agency in Egypt & UAE",
    template: "%s | DUCKYOURBRAND",
  },
  description:
    "We build attention and money making machines, turning views into revenue. The only agency in the Arab world that engineers organic virality as a proven, repeatable system. Egypt & UAE.",
  keywords: [
    "viral marketing agency UAE",
    "viral marketing Egypt",
    "organic virality agency",
    "social media marketing Dubai",
    "content marketing UAE",
    "brand growth agency Egypt",
    "viral content strategy",
    "organic reach agency Dubai",
    "DUCKYOURBRAND",
    "DYB agency",
    "viral marketing Cairo",
    "organic views agency",
  ],
  authors: [{ name: "DUCKYOURBRAND", url: "https://duckyourbrand.com" }],
  creator: "DUCKYOURBRAND",
  publisher: "DUCKYOURBRAND",
  alternates: {
    canonical: "https://duckyourbrand.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://duckyourbrand.com",
    locale: "en_AE",
    siteName: "DUCKYOURBRAND",
    title: "DUCKYOURBRAND — Viral Marketing Agency in Egypt & UAE",
    description:
      "We build attention and money making machines, turning views into revenue. Proven viral systems, zero ad spend.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@duckyourbrand",
    creator: "@duckyourbrand",
    title: "DUCKYOURBRAND — Viral Marketing Agency",
    description: "We build attention and money making machines, turning views into revenue.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0D0D",
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": "https://duckyourbrand.com/#organization",
  name: "DUCKYOURBRAND",
  alternateName: "DYB",
  url: "https://duckyourbrand.com",
  description:
    "Viral marketing agency in Egypt and UAE. We build attention and money making machines, turning organic views into revenue.",
  foundingDate: "2024",
  areaServed: [
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "AdministrativeArea", name: "MENA" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  ],
  priceRange: "AED 4,000–55,000/month",
  knowsAbout: [
    "Viral Marketing",
    "Organic Content Strategy",
    "Social Media Virality",
    "TikTok Growth",
    "Instagram Reels",
    "YouTube Shorts",
    "Brand Attention Engineering",
    "Content That Converts",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "DYB Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Attention Audit",
          description: "One-time strategy session to identify your brand's viral potential and build a roadmap.",
        },
        price: "4000",
        priceCurrency: "AED",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virality Sprint",
          description: "90-day viral content system. Engineered for organic reach, zero ad spend.",
        },
        price: "12000",
        priceCurrency: "AED",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Growth System",
          description: "Ongoing viral + revenue engine. Monthly retainer with measurable output.",
        },
        price: "22000",
        priceCurrency: "AED",
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/duckyourbrand",
    "https://www.tiktok.com/@duckyourbrand",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does DUCKYOURBRAND charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagements start at AED 12,000/month for a 90-day Virality Sprint. Full Growth Systems run AED 22,000–40,000/month. One-time Attention Audits are AED 4,000–6,000. Pricing reflects the system we build, not hours logged.",
      },
    },
    {
      "@type": "Question",
      name: "What makes DUCKYOURBRAND different from other UAE marketing agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DYB engineers organic virality as a repeatable system. Other agencies manage your accounts and charge retainers regardless of reach. We build the mechanism that makes content spread — measured in organic views, inbound leads, and revenue, not follower counts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our model is 100% organic. We engineer content that spreads through platform algorithms and audience psychology, with zero paid amplification.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see meaningful organic reach increases within 3–4 weeks. Viral moments typically occur in weeks 3–8. Revenue impact — inbound leads, DMs, sales — typically follows within 6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Does DUCKYOURBRAND work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the product or brand has a story worth telling. Our minimum engagement is an Attention Audit (AED 4,000–6,000) that tells you exactly whether and how DYB can scale your brand.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms does DUCKYOURBRAND work on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primarily TikTok, Instagram Reels, and YouTube Shorts — the three platforms where organic virality is still achievable at scale in 2025. We also consult on X and LinkedIn for B2B brands.",
      },
    },
    {
      "@type": "Question",
      name: "Is DUCKYOURBRAND based in Egypt or UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Our founding team is Egyptian, with active operations in Dubai and Cairo. We deliver remotely across the full MENA region.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does DUCKYOURBRAND serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "F&B, retail, e-commerce, real estate, hospitality, health and wellness, tech, and consumer products. We work with any brand that has a story that can be made viral.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script dangerouslySetInnerHTML={{ __html: "if(history.scrollRestoration)history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F7F7F7]">
        <PageLoader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
