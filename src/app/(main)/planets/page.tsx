import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { planets } from "@/lib/astrology-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planetary Influences | AstroSage",
  description: "Learn about the influence of planets in astrology.",
};

export default function PlanetsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Planetary Influences
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/70">
          Discover the roles the planets play in shaping our lives and destinies.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {planets.map((planet) => (
            <AccordionItem key={planet.name} value={planet.name}>
              <AccordionTrigger className="text-xl hover:no-underline">
                <div className="flex items-center gap-4">
                  <planet.icon className="w-8 h-8 text-accent" />
                  <span>{planet.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 p-4">
                {planet.influence}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
