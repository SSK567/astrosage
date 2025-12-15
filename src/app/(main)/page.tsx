import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Wand2, Users, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary py-2">
          Welcome to AstroSage
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Your mystical guide to the cosmos. Unveil the secrets of your birth
          chart, discover your daily horoscope, and explore the celestial dance
          of the planets.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/birth-chart">Generate Your Birth Chart</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/horoscopes">View Daily Horoscopes</Link>
          </Button>
        </div>
      </section>

      <section className="mt-20 md:mt-32 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg">
          <div className="p-3 bg-primary rounded-full mb-4">
            <Star className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Daily Horoscopes</h3>
          <p className="mt-2 text-foreground/70">
            Start your day with cosmic guidance tailored to your zodiac sign.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg">
          <div className="p-3 bg-primary rounded-full mb-4">
            <Wand2 className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">AI Birth Chart</h3>
          <p className="mt-2 text-foreground/70">
            Get a personalized interpretation of your birth chart powered by AI.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg">
          <div className="p-3 bg-primary rounded-full mb-4">
            <Users className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Zodiac Compatibility</h3>
          <p className="mt-2 text-foreground/70">
            Discover the dynamics between you and other zodiac signs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg">
          <div className="p-3 bg-primary rounded-full mb-4">
            <Globe className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Planetary Influences</h3>
          <p className="mt-2 text-foreground/70">
            Learn about the planets and how they shape your destiny.
          </p>
        </div>
      </section>
    </div>
  );
}
