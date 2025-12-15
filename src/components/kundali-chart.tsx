
"use client";

import { cn } from "@/lib/utils";

type Planet =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn";

type PlanetsInHouses = Partial<Record<Planet, string>>;

const planetShortNames: Record<Planet, string> = {
  Sun: "Su",
  Moon: "Mo",
  Mars: "Ma",
  Mercury: "Me",
  Jupiter: "Ju",
  Venus: "Ve",
  Saturn: "Sa",
};

interface House {
  id: number;
  planets: string[];
  sign: number;
}

const housePositions: { [key: number]: { x: number; y: number } } = {
  1: { x: 50, y: 25 },
  2: { x: 25, y: 12.5 },
  3: { x: 12.5, y: 25 },
  4: { x: 25, y: 50 },
  5: { x: 12.5, y: 75 },
  6: { x: 25, y: 87.5 },
  7: { x: 50, y: 75 },
  8: { x: 75, y: 87.5 },
  9: { x: 87.5, y: 75 },
  10: { x: 75, y: 50 },
  11: { x: 87.5, y: 25 },
  12: { x: 75, y: 12.5 },
};

const signPositions: { [key: number]: { x: number; y: number } } = {
  1: { x: 50, y: 40 },
  2: { x: 32.5, y: 32.5 },
  3: { x: 40, y: 50 },
  4: { x: 50, y: 60 },
  5: { x: 60, y: 50 },
  6: { x: 67.5, y: 67.5 },
  7: { x: 50, y: 60 },
  8: { x: 32.5, y: 67.5 },
  9: { x: 40, y: 50 },
  10: { x: 50, y: 40 },
  11: { x: 60, y: 50 },
  12: { x: 67.5, y: 32.5 },
};

// Simplified positioning for planets within a house
const getPlanetPositions = (planetCount: number) => {
  const positions: { x: number; y: number }[] = [];
  if (planetCount === 1) {
    return [{ x: 0, y: 0 }];
  }
  const angleStep = 360 / planetCount;
  for (let i = 0; i < planetCount; i++) {
    const angle = angleStep * i - 90; // Start from top
    positions.push({
      x: 8 * Math.cos((angle * Math.PI) / 180),
      y: 8 * Math.sin((angle * Math.PI) / 180),
    });
  }
  return positions;
};


export function KundaliChart({ planetsInHouses, ascendant = 1 }: { planetsInHouses: PlanetsInHouses, ascendant?: number }) {
  const houses = Array.from({ length: 12 }, (_, i): House => {
    const houseNumber = i + 1;
    const sign = ((ascendant - 1 + i) % 12) + 1;
    return {
      id: houseNumber,
      planets: [],
      sign: sign,
    };
  });

  Object.entries(planetsInHouses).forEach(([planet, houseStr]) => {
    const houseNumberMatch = houseStr.match(/\d+/);
    if (houseNumberMatch) {
      const houseNumber = parseInt(houseNumberMatch[0], 10);
      if (houseNumber >= 1 && houseNumber <= 12) {
        const planetShortName = planetShortNames[planet as Planet];
        if (planetShortName) {
            houses[houseNumber - 1].planets.push(planetShortName);
        }
      }
    }
  });


  return (
    <div className="w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer Frame */}
        <path d="M50 0 L100 50 L50 100 L0 50 Z" className="fill-background stroke-accent/50" strokeWidth="1" />
        <path d="M50 2 L98 50 L50 98 L2 50 Z" className="fill-background stroke-accent" strokeWidth="0.5" />

        {/* Inner Lines */}
        <path d="M0 50 L100 50" className="stroke-accent/70" strokeWidth="0.5" />
        <path d="M50 0 L50 100" className="stroke-accent/70" strokeWidth="0.5" />
        <path d="M0 50 L50 100 L100 50 L50 0 L0 50" className="stroke-accent/70" strokeWidth="0.5" />
        <path d="M50 0 L100 50" className="stroke-accent/70" strokeWidth="0.5" />
        <path d="M50 100 L0 50" className="stroke-accent/70" strokeWidth="0.5" />

        {/* Houses */}
        {houses.map((house) => {
            const { x, y } = housePositions[house.id];
            const planetPos = getPlanetPositions(house.planets.length);
            return (
                <g key={`house-${house.id}`}>
                    {/* House Number */}
                    <text x={x} y={y} className="text-[6px] fill-foreground/80 font-bold" textAnchor="middle" dominantBaseline="middle" >
                        {house.id}
                    </text>

                     {/* Planets */}
                     {house.planets.map((planet, index) => (
                        <text
                            key={planet}
                            x={x + planetPos[index].x}
                            y={y + planetPos[index].y}
                            className="text-[5px] fill-foreground"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {planet}
                        </text>
                    ))}
                </g>
            )
        })}

        {/* Signs - this is a simplified representation */}
        <g className="text-[4px] fill-foreground/60" textAnchor="middle" dominantBaseline="middle">
          <text x="50" y="45">{houses[0].sign}</text>
          <text x="20" y="30">{houses[1].sign}</text>
          <text x="30" y="20">{houses[2].sign}</text>
          <text x="50" y="15">{houses[3].sign}</text>
          <text x="70" y="20">{houses[4].sign}</text>
          <text x="80" y="30">{houses[5].sign}</text>
          <text x="50" y="55">{houses[6].sign}</text>
          <text x="80" y="70">{houses[7].sign}</text>
          <text x="70" y="80">{houses[8].sign}</text>
          <text x="50" y="85">{houses[9].sign}</text>
          <text x="30" y="80">{houses[10].sign}</text>
          <text x="20" y="70">{houses[11].sign}</text>
        </g>
      </svg>
    </div>
  );
}
