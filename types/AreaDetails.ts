export interface PointOfInterest {
  name: string;
  type: PointOfInterestType;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export enum PointOfInterestType {
  Parking = "Parking",
  WaterPoint = "WaterPoint",
  Supermarket = "Supermarket",
  Bar = "Bar",
}

export class AreaDetails {
  name: string;
  description: string;
  pointsOfInterest: PointOfInterest[];
  restrictions?: string[];

  constructor(
    name: string,
    description: string,
    pointsOfInterest: PointOfInterest[]
  ) {
    this.name = name;
    this.description = description;
    this.pointsOfInterest = pointsOfInterest;
  }
}
