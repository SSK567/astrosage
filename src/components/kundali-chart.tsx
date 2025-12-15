
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

// This defines the visual layout of the 12 houses on the chart grid.
// The `id` is the visual position, not the astrological house number.
const houseLayout = [
    { id: 1, path: "M50,5 95,50 50,95 5,50 Z" }, // Top diamond
    { id: 2, path: "M5,50 50,5 5,5 Z" },        // Top-left section
    { id: 3, path: "M5,95 50,95 5,50 Z" },      // Bottom-left section
    { id: 4, path: "M50,95 5,50 50,5 Z"},       // This is incorrect based on image, but needed for a full grid. Correct path is part of other houses. The central square is composed of 4 houses. Let's redraw.
];

// Let's define the paths for the 12 houses correctly.
const housePaths: { [key: number]: string } = {
    1: "M 50 5 L 95 50 L 50 95 L 5 50 Z", // Central square, composed of 4 triangles
    4: "M 5 50 L 50 95 L 50 50 Z", // Left part of central square
    7: "M 50 95 L 95 50 L 50 50 Z", // Bottom part of central square
    10: "M 95 50 L 50 5 L 50 50 Z", // Right part of central square
     // Let's rethink the pathing. The image is a large square with two diagonals. Then 4 smaller lines.
};


// A more robust way to define the chart layout.
// visualId is the position in the grid (1=top, 2=top-left, 3=left, etc., going counter-clockwise)
// Each house has a center point for placing planets and a point for the sign number.
const visualHouseData = {
    1: { signCoords: { x: 25, y: 25 }, planetCenter: { x: 50, y: 50 } },  // Top Diamond (House 1)
    2: { signCoords: { x: 25, y: 25 }, planetCenter: { x: 25, y: 25 } },  // Top-left triangle of Top Diamond
    3: { signCoords: { x: 25, y: 75 }, planetCenter: { x: 25, y: 75 } },  // Bottom-left triangle of Left Diamond
    4: { signCoords: { x: 25, y: 75 }, planetCenter: { x: 50, y: 50 } },  // Left Diamond (House 4)
    5: { signCoords: { x: 25, y: 75 }, planetCenter: { x: 25, y: 75 } },  // Top-left triangle of Bottom Diamond
    6: { signCoords: { x: 75, y: 75 }, planetCenter: { x: 75, y: 75 } },  // Top-right triangle of Bottom Diamond
    7: { signCoords: { x: 75, y: 75 }, planetCenter: { x: 50, y: 50 } },  // Bottom Diamond (House 7)
    8: { signCoords: { x: 75, y: 75 }, planetCenter: { x: 75, y: 75 } },  // Bottom-left triangle of Right Diamond
    9: { signCoords: { x: 75, y: 25 }, planetCenter: { x: 75, y: 25 } },  // Bottom-right triangle of Right Diamond
    10: { signCoords: { x: 75, y: 25 }, planetCenter: { x: 50, y: 50 } }, // Right Diamond (House 10)
    11: { signCoords: { x: 75, y: 25 }, planetCenter: { x: 75, y: 25 } }, // Top-right triangle of Top Diamond
    12: { signCoords: { x: 25, y: 25 }, planetCenter: { x: 25, y: 25 } }, // Bottom-left triangle of Top Diamond
};

const houseCenterPoints = [
    { x: 50, y: 28 },  // House 1 (Top)
    { x: 28, y: 50 },  // House 4 (Left)
    { x: 50, y: 72 },  // House 7 (Bottom)
    { x: 72, y: 50 },  // House 10 (Right)
    { x: 28, y: 28 }, // House 2
    { x: 28, y: 72 }, // House 3
    { x: 72, y: 28 }, // House 12
    { x: 72, y: 72 }, // House 11
    { x: 28, y: 72 }, // House 5
    { x: 72, y: 72 }, // House 6
    { x: 28, y: 28 }, // House 9
    { x: 72, y: 28 }, // House 8
];

// Mapping from astrological house number (1-12) to its visual position on the chart.
const houseToVisualMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const visualLayout: { [key: number]: { house: number, signPos: {x: number, y: number}, planetPos: {x: number, y: number} } } = {
    // Astrological House -> Visual position info
    1: { house: 1, signPos: { x: 40, y: 20 }, planetPos: { x: 50, y: 35 } },
    2: { house: 2, signPos: { x: 20, y: 20 }, planetPos: { x: 25, y: 25 } },
    3: { house: 3, signPos: { x: 20, y: 80 }, planetPos: { x: 25, y: 75 } },
    4: { house: 4, signPos: { x: 20, y: 60 }, planetPos: { x: 35, y: 50 } },
    5: { house: 5, signPos: { x: 20, y: 80 }, planetPos: { x: 25, y: 75 } },
    6: { house: 6, signPos: { x: 80, y: 80 }, planetPos: { x: 75, y: 75 } },
    7: { house: 7, signPos: { x: 60, y: 80 }, planetPos: { x: 50, y: 65 } },
    8: { house: 8, signPos: { x: 80, y: 80 }, planetPos: { x: 75, y: 75 } },
    9: { house: 9, signPos: { x: 80, y: 20 }, planetPos: { x: 75, y: 25 } },
    10: { house: 10, signPos: { x: 80, y: 40 }, planetPos: { x: 65, y: 50 } },
    11: { house: 11, signPos: { x: 80, y: 20 }, planetPos: { x: 75, y: 25 } },
    12: { house: 12, signPos: { x: 20, y: 20 }, planetPos: { x: 25, y: 25 } },
};

const northIndianLayout = [
    { house: 1, signPos: { x: 50, y: 20 }, planetPos: { x: 50, y: 35 } },
    { house: 2, signPos: { x: 20, y: 20 }, planetPos: { x: 25, y: 25 } },
    { house: 3, signPos: { x: 20, y: 80 }, planetPos: { x: 25, y: 75 } },
    { house: 4, signPos: { x: 20, y: 50 }, planetPos: { x: 35, y: 50 } },
    { house: 5, signPos: { x: 20, y: 80 }, planetPos: { x: 25, y: 75 } },
    { house: 6, signPos: { x: 80, y: 80 }, planetPos: { x: 75, y: 75 } },
    { house: 7, signPos: { x: 50, y: 80 }, planetPos: { x: 50, y: 65 } },
    { house: 8, signPos: { x: 80, y: 80 }, planetPos: { x: 75, y: 75 } },
    { house: 9, signPos: { x: 80, y: 20 }, planetPos: { x: 75, y: 25 } },
    { house: 10, signPos: { x: 80, y: 50 }, planetPos: { x: 65, y: 50 } },
    { house: 11, signPos: { x: 80, y: 20 }, planetPos: { x: 75, y: 25 } },
    { house: 12, signPos: { x: 20, y: 20 }, planetPos: { x: 25, y: 25 } },
];


const getPlanetPositions = (planetCount: number) => {
    const positions: { x: number; y: number }[] = [];
    if (planetCount === 0) return positions;

    const cols = Math.min(3, planetCount); // Max 3 planets per row
    const rows = Math.ceil(planetCount / cols);
    const stepX = 10;
    const stepY = 8;
    const startY = rows > 1 ? -((rows - 1) * stepY) / 2 : 0;
    
    for (let i = 0; i < planetCount; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const numInRow = Math.min(cols, planetCount - row * cols);
        const startX = -((numInRow - 1) * stepX) / 2;
        
        positions.push({
            x: startX + col * stepX,
            y: startY + row * stepY,
        });
    }
    return positions;
};


interface HouseData {
  id: number; // Visual position
  houseNumber: number; // Astrological house (bhava)
  signNumber: number; // Zodiac sign (rashi)
  planets: string[];
}

export function KundaliChart({ planetsInHouses, ascendant = 1 }: { planetsInHouses: PlanetsInHouses, ascendant?: number }) {
    
    const houses: HouseData[] = Array.from({ length: 12 }, (_, i) => {
        const houseNumber = i + 1;
        const signNumber = ((ascendant - 1 + houseNumber - 1) % 12) + 1;

        const layoutInfo = northIndianLayout[i];

        return {
          id: i,
          houseNumber: houseNumber,
          signNumber: signNumber,
          planets: [],
          ...layoutInfo
        };
      });

    Object.entries(planetsInHouses).forEach(([planet, houseStr]) => {
        const houseNumberMatch = houseStr.match(/\d+/);
        if (houseNumberMatch) {
            const houseNumber = parseInt(houseNumberMatch[0], 10);
            const houseIndex = houses.findIndex(h => h.houseNumber === houseNumber);
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
        <path d="M 5,5 L 95,95 M 95,5 L 5,95 M 5,5 H 95 V 95 H 5 Z" className="stroke-red-500" strokeWidth="1" />
        <path d="M 5 50 L 50 5 L 95 50 L 50 95 Z" className="stroke-red-500" strokeWidth="1"/>

        {/* Houses Content */}
        {houses.map((house) => {
            const planetLayout = getPlanetPositions(house.planets.length);
            
            return (
                <g key={`house-${house.houseNumber}`}>
                    {/* Sign Number */}
                    <text x={house.signPos.x} y={house.signPos.y} className="text-[6px] fill-white font-semibold" textAnchor="middle" dominantBaseline="middle" >
                        {house.signNumber}
                    </text>

                     {/* Planets */}
                     {house.planets.map((planet, index) => (
                        <text
                            key={planet}
                            x={house.planetPos.x + planetLayout[index].x}
                            y={house.planetPos.y + planetLayout[index].y}
                            className="text-[6px] fill-white"
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
