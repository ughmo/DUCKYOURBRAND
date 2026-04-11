import type { MetadataRoute } from "next";

const BASE = "https://duckyourbrand.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE,                                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/locations/dubai`,                    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/cairo`,                    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/locations/abu-dhabi`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/viral-content-strategy`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/organic-growth-system`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/brand-attention-audit`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
