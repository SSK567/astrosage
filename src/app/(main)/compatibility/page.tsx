"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { zodiacSigns, compatibility, ZodiacSign } from "@/lib/astrology-data";
import { Heart } from "lucide-react";

export default function CompatibilityPage() {
  const [sign1, setSign1] = useState<ZodiacSign | null>(null);
  const [sign2, setSign2] = useState<ZodiacSign | null>(null);

  const compatibilityResult =
    sign1 && sign2 ? compatibility[sign1]?.[sign2] : null;

  const getSignIcon = (signName: ZodiacSign) => {
    const sign = zodiacSigns.find(s => s.name === signName);
    return sign ? sign.icon({ className: "w-16 h-16" }) : null;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Zodiac Compatibility
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-foreground/70">
          How do your stars align? Select two signs to find out.
        </p>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 mb-12">
        <Select onValueChange={(value) => setSign1(value as ZodiacSign)}>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue placeholder="Select Sign 1" />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign.name} value={sign.name}>
                {sign.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex justify-center">
            <Heart className="w-10 h-10 text-primary/50" />
        </div>

        <Select onValueChange={(value) => setSign2(value as ZodiacSign)}>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue placeholder="Select Sign 2" />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign.name} value={sign.name}>
                {sign.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {compatibilityResult && sign1 && sign2 && (
        <Card className="max-w-3xl mx-auto bg-card/50 animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="text-center text-3xl">
              <div className="flex justify-center items-center gap-4">
                {getSignIcon(sign1)}
                <span>{sign1} & {sign2}</span>
                {getSignIcon(sign2)}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="text-2xl font-semibold text-accent mb-2">{compatibilityResult.title}</h3>
            <p className="text-lg text-foreground/80">{compatibilityResult.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
