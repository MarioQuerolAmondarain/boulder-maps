import bouldersJson from "@/data/boulders.json";
import { useBoulder } from "@/providers/BoulderProvider";
import { CircleLayer, ShapeSource } from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";

const BOULDERS_MIN_ZOOM = 14;

function getColor(boulder: (typeof bouldersJson)[0]): string {
  switch (boulder.grade[0]) {
    case "8":
      return "#ff00ff";
    case "7":
      return "#ff5555";
    case "6":
      return "#ffaa00";
    case "5":
      return "#55ff55";
    default:
      return "gray";
  }
}

export default function BoulderMarkers() {
  const { selectedBoulder, setSelectedBoulder } = useBoulder();

  const onPointPress = async (e: any) => {
    if (e.features[0]?.properties?.boulder) {
      setSelectedBoulder(e.features[0].properties.boulder);
    }
  };

  // TODO Recuperar boulders de servicio
  const boulderPoints = bouldersJson.map((boulder) =>
    point([boulder.longitude, boulder.latitude], {
      boulder,
      color: getColor(boulder),
      isSelected: selectedBoulder?.id === boulder.id,
    }),
  );

  return (
    <ShapeSource
      id="boulders"
      shape={featureCollection(boulderPoints)}
      onPress={onPointPress}
    >
      <CircleLayer
        id="boulder-icons"
        minZoomLevel={BOULDERS_MIN_ZOOM}
        style={{
          circlePitchAlignment: "map",
          circleColor: ["get", "color"],
          circleRadius: 9,
          circleOpacity: 1,
          circleStrokeWidth: ["case", ["get", "isSelected"], 3, 2],
          circleStrokeColor: [
            "case",
            ["get", "isSelected"],
            "white",
            "transparent",
          ],
        }}
      />
    </ShapeSource>
  );
}
