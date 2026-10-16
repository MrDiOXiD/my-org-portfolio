import { MEMBERS, SERVICES, SEO, SITE } from "@/lib/content";
import { abs } from "@/lib/site";

const ORG_ID = abs("/#organization");
const SITE_ID = abs("/#website");

// Personal phone numbers/emails are intentionally NOT exposed in structured data.
const person = (i: number) => {
  const m = MEMBERS[i];
  const web = m.contacts.find((c) => c.kind === "web");
  return {
    "@type": "Person",
    "@id": abs(`/#member-${i + 1}`),
    name: m.name,
    jobTitle: m.role,
    knowsAbout: m.skills,
    worksFor: { "@id": ORG_ID },
    ...(web ? { url: web.href } : {}),
  };
};

export function buildSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: SEO.alternateName,
        url: abs("/"),
        logo: abs("/icon.svg"),
        slogan: SITE.tagline,
        description: SEO.description,
        email: SITE.email,
        founder: { "@id": abs("/#member-2") },
        member: MEMBERS.map((_, i) => ({ "@id": abs(`/#member-${i + 1}`) })),
        knowsAbout: ["Product design", "UI/UX design", "Full-stack development", "Technical SEO", "Web performance"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات چتراتک",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description, provider: { "@id": ORG_ID } },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: abs("/"),
        name: SITE.name,
        inLanguage: "fa-IR",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "WebPage",
        "@id": abs("/#webpage"),
        url: abs("/"),
        name: SEO.title,
        description: SEO.description,
        inLanguage: "fa-IR",
        isPartOf: { "@id": SITE_ID },
        about: { "@id": ORG_ID },
      },
      person(0),
      person(1),
      person(2),
    ],
  };
}
