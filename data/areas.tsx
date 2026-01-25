import { Area, RockType } from "@/types";
import { AreaDetails, PointOfInterestType } from "../types/AreaDetails";

export const AREAS: Area[] = [
  {
    name: "Larraona",
    province: "Navarra",
    boulders: 150,
    coordinates: { latitude: 42.8125, longitude: -1.6458 },
    rockType: RockType.Limestone,
  },
  {
    name: "Santa Gadea",
    province: "Cantabria",
    boulders: 400,
    coordinates: { latitude: 42.7261, longitude: -0.3275 },
    rockType: RockType.Sandstone,
  },
  {
    name: "Rozas",
    province: "Cantabria",
    boulders: 140,
    coordinates: { latitude: 42.7261, longitude: -0.3275 },
    rockType: RockType.Sandstone,
  },
  {
    name: "Mañaria",
    province: "Bizkaia",
    boulders: 50,
    coordinates: { latitude: 43.1667, longitude: -2.8667 },
    rockType: RockType.Limestone,
  },
];

export const AREA_DETAILS: AreaDetails[] = [
  {
    name: "Larraona",
    description:
      "Larraona es un barrio vibrante conocido por su atmósfera animada, cultura diversa y hermosos parques. Ofrece una mezcla de comodidades modernas y encanto histórico, haciéndolo un destino popular tanto para locales como para turistas.", // Translation of placeholder
    pointsOfInterest: [
      {
        name: "Central Park",
        type: PointOfInterestType.Bar,
        coordinates: { latitude: 42.813, longitude: -1.646 },
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
];
