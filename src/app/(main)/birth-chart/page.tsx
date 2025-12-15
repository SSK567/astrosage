import { BirthChartClient } from "./birth-chart-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birth Chart | AstroSage",
  description: "Generate and interpret your personal birth chart.",
};

export default function BirthChartPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Your Personal Birth Chart
                </h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/70">
                    Enter your birth details to generate a personalized AI-powered interpretation of your astrological chart.
                </p>
            </div>
            <BirthChartClient />
        </div>
    );
}
