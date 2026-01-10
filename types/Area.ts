export class Area {
  name: string;
  province: string;
  boulders: number;
  coordinates: { latitude: number; longitude: number };
  rockType: string;
  imgUrl: string;

  constructor(
    name: string,
    province: string,
    boulders: number,
    coordinates: { latitude: number; longitude: number },
    rockType: string,
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
