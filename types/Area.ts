export class Area {
  name: string;
  province: string;
  boulders: number;
  coordinates: { latitude: number; longitude: number };
  rockType: RockType;

  constructor(
    name: string,
    province: string,
    boulders: number,
    coordinates: { latitude: number; longitude: number },
    rockType: RockType
  ) {
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
