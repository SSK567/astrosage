import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { horoscopes, zodiacSigns } from "@/lib/astrology-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Horoscopes | AstroSage",
  description: "Get your daily horoscope for all zodiac signs.",
};

export default function HoroscopesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Daily Horoscopes
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/70">
          Cosmic insights for your zodiac sign, delivered daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {zodiacSigns.map((sign) => (
          <Card
            key={sign.name}
            className="flex flex-col bg-card/50 hover:bg-card/90 transition-colors"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              {sign.icon({})}
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-primary">
                  {sign.name}
                </CardTitle>
                <CardDescription className="text-foreground/80">
                  {sign.dateRange}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-foreground/90">{horoscopes[sign.name]}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
