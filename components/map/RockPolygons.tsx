import { ROCK_POLYGONS } from "@/data/rockPolygons";
import { FillLayer, LineLayer, ShapeSource } from "@rnmapbox/maps";
import React, { useMemo } from "react";

type RockPolygonsProps = {
  areaId?: number;
};

const ROCK_MIN_ZOOM = 14;

export default function RockPolygons({ areaId }: RockPolygonsProps) {
  const shape = useMemo(() => {
    if (areaId && ROCK_POLYGONS[areaId]) {
      return ROCK_POLYGONS[areaId];
    }
    return { type: "FeatureCollection", features: [] };
  }, [areaId]);

  if (!shape.features?.length) {
    return null;
  }

  return (
    <ShapeSource id={`rock-polygons-${areaId ?? "none"}`} shape={shape}>
      <FillLayer
        id="rock-polygons-fill"
        minZoomLevel={ROCK_MIN_ZOOM}
        style={{
          fillColor: "#cccccc",
          fillOpacity: 0.6,
        }}
      />
      <LineLayer
        id="rock-polygons-line"
        minZoomLevel={ROCK_MIN_ZOOM}
        style={{
          lineColor: "#999999",
          lineWidth: 1.5,
        }}
      />
    </ShapeSource>
  );
}
