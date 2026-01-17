export class Boulder {
  id: number;
  imgUrl: string | null;
  longitude: number;
  latitude: number;
  grade: string;
  name: string;
  description: string;
  tags: string[];

  constructor(
    id: number,
    imgURL: string | null,
    longitude: number,
    latitude: number,
    grade: string,
    name: string,
    description: string,
    tags: string[],
  ) {
    this.id = id;
    this.imgUrl = imgURL;
    this.longitude = longitude;
    this.latitude = latitude;
    this.grade = grade;
    this.name = name;
    this.description = description;
    this.tags = tags;
  }
}
