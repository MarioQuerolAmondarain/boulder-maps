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
          fillColor: "rgba(0, 0, 0, 0.15)",
          fillOpacity: [
            "interpolate",
            ["linear"],
            ["zoom"],
            minZoom,
            1,
            maxZoom - 2,
            0.7,
            maxZoom,
            0.3,
          ],
        }}
      />
      <LineLayer
        id="area-polygons-line"
        minZoomLevel={minZoom}
        maxZoomLevel={maxZoom}
        style={{
          lineColor: "rgba(62, 62, 62, 0.9)",
          lineWidth: 2,
          lineOpacity: [
            "interpolate",
            ["linear"],
            ["zoom"],
            minZoom,
            0.8,
            maxZoom - 2,
            0.6,
            maxZoom,
            0.1,
          ],
        }}
      />
      <SymbolLayer
        id="area-polygons-label"
        minZoomLevel={12}
        maxZoomLevel={maxZoom}
        style={{
          textField: ["get", "name"],
          textSize: 24,
          textColor: "#1a3a52",
          textHaloColor: "rgba(255, 255, 255, 0.95)",
          textHaloWidth: 2,
          textAllowOverlap: false,
        }}
      />
    </ShapeSource>
  );
}
