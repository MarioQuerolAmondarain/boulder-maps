import bouldersJson from "@/data/boulders.json";
import { useBoulder } from "@/providers/BoulderProvider";
import { CircleLayer, Images, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";

export default function BoulderMarkers() {
  const { setSelectedBoulder } = useBoulder();

  const onPointPress = async (e: any) => {
    if (e.features[0]?.properties?.boulder) {
      setSelectedBoulder(e.features[0].properties.boulder);
    }
  };

  const boulderPoints = bouldersJson.map((boulder) =>
    point([boulder.longitude, boulder.latitude], { boulder })
  );

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
          circleColor: "blue",
          circleRadius: 20,
          circleOpacity: 1,
          circleStrokeWidth: 2,
          circleStrokeColor: "white",
        }}
      />

      <SymbolLayer
        id="boulder-icons"
        filter={["!", ["has", "point_count"]]}
        style={{
          iconImage: "pin",
          iconSize: 0.5,
          iconAllowOverlap: true,
          iconAnchor: "bottom",
        }}
      />

      {/* TODO refactor para que sea un circulo y dependendiendo del grado sea un color u otro */}
      <Images
        images={{
          pin: require("../assets/images/pin.png"),
        }}
      />
    </ShapeSource>
  );
}
