
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
  id: number; // 1-12, the visual position in the chart
  sign: number; // 1-12, the rashi/zodiac sign number
  planets: string[];
}

const houseCenters: { [key: number]: { x: number; y: number } } = {
  1: { x: 50, y: 50 },
  2: { x: 27.5, y: 27.5 },
  3: { x: 27.5, y: 72.5 },
  4: { x: 50, y: 72.5 },
  5: { x: 72.5, y: 72.5 },
  6: { x: 72.5, y: 27.5 },
  7: { x: 50, y: 50 },
  8: { x: 27.5, y: 27.5 },
  9: { x: 27.5, y: 72.5 },
  10: { x: 50, y: 27.5 },
  11: { x: 72.5, y: 72.5 },
  12: { x: 72.5, y: 27.5 },
};

const signPositions: { [key: number]: { x: number; y: number } } = {
    1: { x: 50, y: 20 },
    2: { x: 20, y: 20 },
    3: { x: 20, y: 80 },
    4: { x: 50, y: 80 },
    5: { x: 80, y: 80 },
    6: { x: 80, y: 20 },
    7: { x: 50, y: 80 },
    8: { x: 80, y: 80 },
    9: { x: 80, y: 20 },
    10: { x: 50, y: 20 },
    11: { x: 20, y: 20 },
    12: { x: 20, y: 80 }
};

// Improved positioning for planets within a house
const getPlanetPositions = (planetCount: number) => {
    const positions: { x: number; y: number }[] = [];
    if (planetCount === 0) return positions;

    const gridDimension = Math.ceil(Math.sqrt(planetCount));
    const step = 12; // Spacing between planets

    for (let i = 0; i < planetCount; i++) {
        const row = Math.floor(i / gridDimension);
        const col = i % gridDimension;
        
        positions.push({
            x: (col - (gridDimension - 1) / 2) * step,
            y: (row - (gridDimension - 1) / 2) * step + 5,
        });
    }
    return positions;
};


export function KundaliChart({ planetsInHouses, ascendant = 1 }: { planetsInHouses: PlanetsInHouses, ascendant?: number }) {
    const houses: House[] = Array.from({ length: 12 }, (_, i) => {
        const houseId = i + 1;
        const sign = (ascendant + i - 1) % 12 + 1;
        return {
          id: houseId,
          sign: sign,
          planets: [],
        };
      });

  Object.entries(planetsInHouses).forEach(([planet, houseStr]) => {
    const houseNumberMatch = houseStr.match(/\d+/);
    if (houseNumberMatch) {
      const houseNumber = parseInt(houseNumberMatch[0], 10);
      const houseIndex = houses.findIndex(h => h.sign === houseNumber);
      if (houseIndex !== -1) {
        const planetShortName = planetShortNames[planet as Planet];
        if (planetShortName) {
            houses[houseIndex].planets.push(planetShortName);
        }
      }
    }
  });


  return (
    <div className="w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-transparent">
        {/* Main Chart Structure */}
        <path d="M 5,5 L 95,95 M 95,5 L 5,95 M 5,5 H 95 V 95 H 5 Z" className="stroke-primary" strokeWidth="1" />

        {/* Houses Content */}
        {houses.map((house) => {
            const center = houseCenters[house.id];
            const signPos = signPositions[house.id];
            const planetLayout = getPlanetPositions(house.planets.length);
            
            return (
                <g key={`house-${house.id}`}>
                    {/* House/Sign Number */}
                    <text x={signPos.x} y={signPos.y} className="text-[7px] fill-foreground/80 font-semibold" textAnchor="middle" dominantBaseline="middle" >
                        {house.sign}
                    </text>

                     {/* Planets */}
                     {house.planets.map((planet, index) => (
                        <text
                            key={planet}
                            x={center.x + planetLayout[index].x}
                            y={center.y + planetLayout[index].y}
                            className="text-[6px] fill-foreground"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {planet}
                        </text>
                    ))}
                </g>
            )
        })}
      </svg>
    </div>
  );
}
