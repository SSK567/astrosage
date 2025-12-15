
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
    2: { x: 25, y: 25 },
    3: { x: 25, y: 50 },
    4: { x: 50, y: 50 },
    5: { x: 25, y: 75 },
    6: { x: 50, y: 75 },
    7: { x: 75, y: 75 },
    8: { x: 75, y: 50 },
    9: { x: 75, y: 25 },
    10: { x: 50, y: 25 }, // This will be the same as 1
    11: { x: 75, y: 25 }, // This will be the same as 9
    12: { x: 25, y: 25 }, // This will be the same as 2
  };
  
const signPositions: { [key: number]: { x: number; y: number } } = {
    1: { x: 50, y: 15 },
    2: { x: 20, y: 30 },
    3: { x: 20, y: 45 },
    4: { x: 35, y: 65 },
    5: { x: 20, y: 80 },
    6: { x: 50, y: 85 },
    7: { x: 80, y: 70 },
    8: { x: 80, y: 55 },
    9: { x: 65, y: 35 },
    10: { x: 80, y: 20 },
    11: { x: 50, y: 35 },
    12: { x: 35, y: 20 },
};

// Simplified positioning for planets within a house
const getPlanetPositions = (planetCount: number, houseId: number) => {
    const positions: { x: number; y: number }[] = [];
    const isDiamond = [1, 4, 7, 10].includes(houseId);
    const radius = isDiamond ? 10 : 6;

    if (planetCount === 1) {
        return [{ x: 0, y: 5 }];
    }
    
    for (let i = 0; i < planetCount; i++) {
        // Arrange in a grid-like fashion
        const row = Math.floor(i / 2);
        const col = i % 2;
        positions.push({
            x: (col * 12) - 6,
            y: (row * 10) + 5
        });
    }
    return positions;
};


export function KundaliChart({ planetsInHouses, ascendant = 1 }: { planetsInHouses: PlanetsInHouses, ascendant?: number }) {
    const houses: House[] = Array.from({ length: 12 }, (_, i) => {
        const houseNumber = (ascendant + i - 1) % 12 + 1;
        const houseId = i + 1;
        return {
          id: houseId,
          planets: [],
          sign: houseNumber,
        };
      });

  Object.entries(planetsInHouses).forEach(([planet, houseStr]) => {
    const houseNumberMatch = houseStr.match(/\d+/);
    if (houseNumberMatch) {
      const houseNumber = parseInt(houseNumberMatch[0], 10);
      const houseIndex = (houseNumber - ascendant + 12) % 12;
      if (houseIndex >= 0 && houseIndex < 12) {
        const planetShortName = planetShortNames[planet as Planet];
        if (planetShortName) {
            houses[houseIndex].planets.push(planetShortName);
        }
      }
    }
  });


  return (
    <div className="w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer Frame */}
        <rect x="5" y="5" width="90" height="90" className="fill-transparent stroke-red-500" strokeWidth="1" />
        
        {/* Inner Lines */}
        <path d="M5 5 L95 95" className="stroke-red-500/70" strokeWidth="0.5" />
        <path d="M95 5 L5 95" className="stroke-red-500/70" strokeWidth="0.5" />
        <path d="M50 5 L5 50" className="stroke-red-500/70" strokeWidth="0.5" />
        <path d="M50 5 L95 50" className="stroke-red-500/70" strokeWidth="0.5" />
        <path d="M5 50 L50 95" className="stroke-red-500/70" strokeWidth="0.5" />
        <path d="M95 50 L50 95" className="stroke-red-500/70" strokeWidth="0.5" />


        {/* Houses Content */}
        {houses.map((house) => {
            const { x, y } = signPositions[house.id];
            const planetPos = getPlanetPositions(house.planets.length, house.id);
            return (
                <g key={`house-${house.id}`}>
                    {/* House/Sign Number */}
                    <text x={x} y={y} className="text-[8px] fill-white font-bold" textAnchor="middle" dominantBaseline="middle" >
                        {house.sign}
                    </text>

                     {/* Planets */}
                     {house.planets.map((planet, index) => (
                        <text
                            key={planet}
                            x={x + planetPos[index].x}
                            y={y + planetPos[index].y}
                            className="text-[5px] fill-white"
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
