import { Area, RockType } from "@/types";
import { PointOfInterestType } from "../types/AreaDetails";

export const AREAS: Area[] = [
  {
    name: "Larraona",
    province: "Navarra",
    boulders: 150,
    coordinates: { latitude: 43.34254, longitude: -2.992666 },
    rockType: RockType.Limestone,
    description:
      "Larraona es un barrio vibrante conocido por su atmósfera animada, cultura diversa y hermosos parques. Ofrece una mezcla de comodidades modernas y encanto histórico, haciéndolo un destino popular tanto para locales como para turistas.", // Translation of placeholder
    pointsOfInterest: [
      {
        name: "Central Park",
        type: PointOfInterestType.Bar,
        coordinates: { latitude: 42.813, longitude: -3.698833 },
      },
      {
        name: "Museo de Larraona",
        type: PointOfInterestType.WaterPoint,
        coordinates: { latitude: 42.812, longitude: -1.645 },
      },
      {
        name: "Centro Comercial del Centro",
        type: PointOfInterestType.Supermarket,
        coordinates: { latitude: 42.811, longitude: -1.644 },
      },
    ],
    restrictions: [
      "Prohibida la música alta después de las 10 PM",
      "Prohibido fumar en parques públicos",
    ],
  },
  {
    name: "Santa Gadea",
    province: "Cantabria",
    boulders: 400,
    coordinates: { latitude: 43.423756, longitude: -3.698833 },
    rockType: RockType.Sandstone,
  },
  {
    name: "Rozas",
    province: "Cantabria",
    boulders: 140,
    coordinates: { latitude: 37.428353, longitude: -7.246397 },
    rockType: RockType.Sandstone,
  },
  {
    name: "Mañaria",
    province: "Bizkaia",
    boulders: 50,
    coordinates: { latitude: 37.945733, longitude: -1.125005 },
    rockType: RockType.Limestone,
  },
];
