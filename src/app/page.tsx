import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildSchema } from "@/lib/schema";
import { Cta } from "@/components/sections/Cta";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { TickerStrip } from "@/components/sections/TickerStrip";
import { Why } from "@/components/sections/Why";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={buildSchema()} />
      <Hero />
      <TickerStrip />
      <Services />
      <Team />
      <Why />
      <Process />
      <Cta />
    </main>
  );
}
