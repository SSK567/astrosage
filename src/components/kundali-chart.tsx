
"use client";

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

// Defines the visual layout for a North Indian style chart.
// Each object represents a house's visual properties on the chart.
const houseLayout = [
  { houseId: 1, signPos: { x: 50, y: 15 }, planetPos: { x: 50, y: 35 } },
  { houseId: 2, signPos: { x: 15, y: 15 }, planetPos: { x: 25, y: 25 } },
  { houseId: 3, signPos: { x: 15, y: 50 }, planetPos: { x: 25, y: 35 } },
  { houseId: 4, signPos: { x: 15, y: 85 }, planetPos: { x: 25, y: 75 } },
  { houseId: 5, signPos: { x: 50, y: 85 }, planetPos: { x: 35, y: 65 } },
  { houseId: 6, signPos: { x: 85, y: 85 }, planetPos: { x: 75, y: 75 } },
  { houseId: 7, signPos: { x: 85, y: 50 }, planetPos: { x: 75, y: 65 } },
  { houseId: 8, signPos: { x: 85, y: 15 }, planetPos: { x: 75, y: 25 } },
  { houseId: 9, signPos: { x: 50, y: 15 }, planetPos: { x: 65, y: 35 } },
  { houseId: 10, signPos: { x: 15, y: 15 }, planetPos: { x: 35, y: 25 } },
  { houseId: 11, signPos: { x: 15, y: 85 }, planetPos: { x: 35, y: 75 } },
  { houseId: 12, signPos: { x: 85, y: 85 }, planetPos: { x: 65, y: 75 } },
];


const getPlanetPositions = (planetCount: number) => {
    const positions: { x: number; y: number }[] = [];
    if (planetCount === 0) return positions;

    const cols = Math.min(3, planetCount);
    const rows = Math.ceil(planetCount / cols);
    const stepX = 12;
    const stepY = 10;
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
  id: number; // Visual position from layout
  houseNumber: number; // Astrological house (bhava)
  signNumber: number; // Zodiac sign (rashi)
  planets: string[];
  signPos: { x: number; y: number };
  planetPos: { x: number; y: number };
}

export function KundaliChart({ planetsInHouses, ascendant = 1 }: { planetsInHouses: PlanetsInHouses, ascendant?: number }) {
    
    // Map houses to their visual positions and calculate signs
    const houses: HouseData[] = Array.from({ length: 12 }, (_, i) => {
        const layoutInfo = houseLayout[i];
        const houseNumber = ((i + ascendant - 1) % 12) + 1;
        const signNumber = houseNumber; // In North Indian chart, house number = sign number

        return {
          id: i,
          houseNumber: houseNumber,
          signNumber: signNumber,
          planets: [],
          ...layoutInfo
        };
    });

    // Place planets in houses
    Object.entries(planetsInHouses).forEach(([planet, houseStr]) => {
        const houseNumberMatch = houseStr.match(/\d+/);
        if (houseNumberMatch) {
            const houseNumber = parseInt(houseNumberMatch[0], 10);
            const houseData = houses.find(h => h.houseNumber === houseNumber);
            if (houseData) {
                const planetShortName = planetShortNames[planet as Planet];
                if (planetShortName) {
                    houseData.planets.push(planetShortName);
                }
            }
        }
    });

    // North Indian chart uses fixed houses, so find the visual position of the first house
    const firstHouseVisualIndex = houses.findIndex(h => h.houseNumber === 1);
    const ascendantSign = ascendant;

  return (
    <div className="w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-transparent">
        {/* Main Chart Structure */}
        <path d="M 5,5 L 95,95 M 95,5 L 5,95 M 5,5 H 95 V 95 H 5 Z" className="stroke-primary" strokeWidth="1.5" />
        <path d="M 5 50 L 50 5 L 95 50 L 50 95 Z" className="stroke-primary" strokeWidth="1.5"/>

        {/* Houses Content */}
        {houseLayout.map((layout, i) => {
            const currentSign = ((ascendant - 1 + i) % 12) + 1;
            const planetsInThisHouse = Object.entries(planetsInHouses)
                .filter(([, houseStr]) => parseInt(houseStr.match(/\d+/)?.[0] || '0') === currentSign)
                .map(([planet]) => planetShortNames[planet as Planet]);

            const planetLayout = getPlanetPositions(planetsInThisHouse.length);
            
            return (
                <g key={`house-visual-${i}`}>
                    {/* Sign Number */}
                    <text 
                      x={layout.signPos.x} 
                      y={layout.signPos.y} 
                      className="text-[8px] fill-foreground font-bold" 
                      textAnchor="middle" 
                      dominantBaseline="middle"
                    >
                        {currentSign}
                    </text>
                     
                    {/* Ascendant Marker for the first house */}
                    {i === 0 && (
                         <text
                         x={layout.signPos.x}
                         y={layout.signPos.y + 10}
                         className="text-[7px] fill-accent font-bold"
                         textAnchor="middle"
                         dominantBaseline="middle"
                       >
                         As
                       </text>
                    )}

                     {/* Planets */}
                     {planetsInThisHouse.map((planet, index) => (
                        <text
                            key={planet}
                            x={layout.planetPos.x + planetLayout[index].x}
                            y={layout.planetPos.y + planetLayout[index].y}
                            className="text-[9px] fill-foreground font-semibold"
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

