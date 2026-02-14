export const PARKING_POINTS: Record<number, any> = {
  1: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Parking Principal",
        },
        geometry: {
          coordinates: [-2.9841891395314235, 43.34185054173267],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Parking Secundario",
        },
        geometry: {
          coordinates: [-2.9957589331211523, 43.33798866018773],
          type: "Point",
        },
      },
    ],
  },
  3: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Parking Principal",
        },
        geometry: {
          coordinates: [-3.729723, 43.057],
          type: "Point",
        },
      },
    ],
  },
};
