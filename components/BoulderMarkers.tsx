import bouldersJson from "@/data/boulders.json";
import { useBoulder } from "@/providers/BoulderProvider";
import { CircleLayer, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";

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

  const boulderPoints = bouldersJson.map((boulder) =>
    point([boulder.longitude, boulder.latitude], {
      boulder,
      color: getColor(boulder),
      isSelected: selectedBoulder?.id === boulder.id,
    }),
  );

  /*
   TODO ver tema de layers para que se puedan hacer overlaps los bloques y que a cierto zoom out 
   se vean mejor los clusters con los nombres de los sectores
  */
  return (
    <ShapeSource
      id="boulders"
      cluster
      shape={featureCollection(boulderPoints)}
      onPress={onPointPress}
    >
      <SymbolLayer
        id="cluster-count"
        filter={["has", "point_count"]}
        style={{
          textField: ["get", "point_count"],
          textSize: 16,
          textColor: "white",
          textIgnorePlacement: true,
          textAllowOverlap: true,
        }}
      />

      <CircleLayer
        id="cluster"
        belowLayerID="cluster-count"
        filter={["has", "point_count"]}
        style={{
          circlePitchAlignment: "map",
          circleColor: "green",
          circleRadius: 20,
          circleOpacity: 1,
          circleStrokeWidth: 2,
          circleStrokeColor: "white",
        }}
      />

      <CircleLayer
        id="boulder-icons"
        belowLayerID="cluster"
        filter={["!", ["has", "point_count"]]}
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
