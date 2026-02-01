import { AREA_POLYGONS } from "@/data/areaPolygons";
import { FillLayer, LineLayer, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import React, { useMemo } from "react";

type AreaPolygonsProps = {
  areaName?: string;
  minZoom?: number;
  maxZoom?: number;
};

// TODO Revisar valores hardcodeados de minZoom y maxZoom (maxZoom igual que mint zoom de boulders)
export default function AreaPolygons({
  areaName,
  minZoom = 0,
  maxZoom = 14,
}: AreaPolygonsProps) {
  const shape = useMemo(() => {
    if (areaName && AREA_POLYGONS[areaName]) {
      return AREA_POLYGONS[areaName];
    }
    return { type: "FeatureCollection", features: [] };
  }, [areaName]);

  if (!shape.features?.length) {
    return null;
  }

  return (
    <ShapeSource id="area-polygons" shape={shape}>
      <FillLayer
        id="area-polygons-fill"
        minZoomLevel={minZoom}
        maxZoomLevel={maxZoom}
        style={{
          fillColor: "rgba(95, 93, 93, 0.2)",
        }}
      />
      <LineLayer
        id="area-polygons-line"
        minZoomLevel={minZoom}
        maxZoomLevel={maxZoom}
        style={{
          lineColor: "rgba(95, 93, 93, 0.8)",
          lineWidth: 2,
        }}
      />
      <SymbolLayer
        id="area-polygons-label"
        minZoomLevel={12}
        maxZoomLevel={maxZoom}
        style={{
          textField: ["get", "name"],
          textSize: 24,
          textColor: "rgba(95, 93, 93, 0.8)",
          textHaloColor: "white",
          textHaloWidth: 1,
          textAllowOverlap: false,
        }}
      />
    </ShapeSource>
  );
}
