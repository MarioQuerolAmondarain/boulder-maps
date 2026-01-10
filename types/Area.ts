export class Area {
  name: string;
  province: string;
  boulders: number;
  coordinates: { latitude: number; longitude: number };
  rockType: RockType;
  imgUrl: string;

  constructor(
    name: string,
    province: string,
    boulders: number,
    coordinates: { latitude: number; longitude: number },
    rockType: RockType,
    imgUrl: string
  ) {
    this.name = name;
    this.province = province;
    this.boulders = boulders;
    this.coordinates = coordinates;
    this.rockType = rockType;
    this.imgUrl = imgUrl;
  }
}

export enum RockType {
  Granite = "Granite",
  Limestone = "Limestone",
  Sandstone = "Sandstone",
  Conglomerate = "Conglomerate",
  Basalt = "Basalt",
}
