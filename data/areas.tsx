import { Area, RockType } from "@/types";
import { AreaDetails, PointOfInterestType } from "../types/AreaDetails";

export const AREAS: Area[] = [
  {
    name: "Larraona",
    province: "Navarra",
    boulders: 150,
    coordinates: { latitude: 42.8125, longitude: -1.6458 },
    rockType: RockType.Limestone,
    imgUrl: "https://example.com/images/larraona.jpg",
  },
  {
    name: "Santa Gadea",
    province: "Cantabria",
    boulders: 400,
    coordinates: { latitude: 42.7261, longitude: -0.3275 },
    rockType: RockType.Sandstone,
    imgUrl: "https://example.com/images/santa_gadea.jpg",
  },
];

export const AREA_DETAILS: AreaDetails[] = [
  {
    name: "Larraona",
    description:
      "Larraona is a vibrant neighborhood known for its lively atmosphere, diverse culture, and beautiful parks. It offers a mix of modern amenities and historical charm, making it a popular destination for both locals and tourists.",
    pointsOfInterest: [
      {
        name: "Central Park",
        type: PointOfInterestType.Bar,
        coordinates: { latitude: 42.813, longitude: -1.646 },
      },
      {
        name: "Larraona Museum",
        type: PointOfInterestType.WaterPoint,
        coordinates: { latitude: 42.812, longitude: -1.645 },
      },
      {
        name: "Downtown Shopping Center",
        type: PointOfInterestType.Supermarket,
        coordinates: { latitude: 42.811, longitude: -1.644 },
      },
    ],
    restrictions: ["No loud music after 10 PM", "No smoking in public parks"],
  },
];
