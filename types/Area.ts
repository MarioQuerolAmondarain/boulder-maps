export class Area {
  id: number;
  name: string;
  province: string;
  boulders: number;
  coordinates: { latitude: number; longitude: number };
  rockType: RockType;
  description?: string;
  pointsOfInterest?: {
    name: string;
    type: string;
    coordinates: { latitude: number; longitude: number };
  }[];
  restrictions?: string[];

  constructor(
    id: number,
    name: string,
    province: string,
    boulders: number,
    coordinates: { latitude: number; longitude: number },
    rockType: RockType,
  ) {
    this.id = id;
    this.name = name;
    this.province = province;
    this.boulders = boulders;
    this.coordinates = coordinates;
    this.rockType = rockType;
  }
}

export enum RockType {
  Granite = "Granite",
  Limestone = "Limestone",
  Sandstone = "Sandstone",
  Conglomerate = "Conglomerate",
  Basalt = "Basalt",
}
