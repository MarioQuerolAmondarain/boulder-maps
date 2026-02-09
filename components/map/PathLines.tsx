import { PATH_LINES } from "@/data/pathLines";
import { LineLayer, ShapeSource } from "@rnmapbox/maps";
import React, { useMemo } from "react";

const PATHS_MIN_ZOOM = 14;

export default function PathLines({ areaId }: { areaId?: number }) {
  const shape = useMemo(() => {
    if (areaId && PATH_LINES[areaId]) {
      return PATH_LINES[areaId];
    }
    return { type: "FeatureCollection", features: [] };
  }, [areaId]);

  if (!shape.features?.length) {
    return null;
  }

  return (
    <>
      <ShapeSource id={`path-lines-${areaId ?? "none"}`} shape={shape}>
        <LineLayer
          id="path-lines-line"
          minZoomLevel={PATHS_MIN_ZOOM}
          style={{
            lineColor: "#3072cf",
            lineWidth: 3,
            lineOpacity: 1,
            lineJoin: "round",
            lineCap: "round",
          }}
        />
      </ShapeSource>
    </>
  );
}
