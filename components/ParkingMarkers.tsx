import { PARKING_POINTS } from "@/data/parkingPoints";
import { CircleLayer, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import React, { useMemo, useState } from "react";
import ParkingModal from "./ParkingModal";

const PARKING_MIN_ZOOM = 12;

type ParkingInfo = {
  latitude: number;
  longitude: number;
  name?: string;
};

export default function ParkingMarkers({ areaId }: { areaId?: number }) {
  const [selectedParking, setSelectedParking] = useState<ParkingInfo | null>(
    null,
  );

  const shape = useMemo(() => {
    if (areaId && PARKING_POINTS[areaId]) {
      return PARKING_POINTS[areaId];
    }
    return { type: "FeatureCollection", features: [] };
  }, [areaId]);

  const onPointPress = async (e: any) => {
    const feature = e.features[0];
    if (feature?.geometry?.coordinates) {
      const [longitude, latitude] = feature.geometry.coordinates;
      setSelectedParking({
        latitude,
        longitude,
        name: feature.properties?.name,
      });
    }
  };

  if (!shape.features?.length) {
    return null;
  }

  // TODO Cambiar icono por ParkingIcon
  return (
    <>
      <ShapeSource id="parking-points" shape={shape} onPress={onPointPress}>
        <CircleLayer
          id="parking-circle"
          minZoomLevel={PARKING_MIN_ZOOM}
          style={{
            circleColor: "#3b82f6",
            circleRadius: 9,
            circleStrokeWidth: 2,
            circleStrokeColor: "white",
          }}
        />
        <SymbolLayer
          id="parking-icon"
          minZoomLevel={PARKING_MIN_ZOOM}
          style={{
            iconImage: "parking-icon",
            iconSize: 0.9,
            iconAllowOverlap: true,
          }}
        />
      </ShapeSource>

      {selectedParking && (
        <ParkingModal
          visible={!!selectedParking}
          onClose={() => setSelectedParking(null)}
          latitude={selectedParking.latitude}
          longitude={selectedParking.longitude}
          name={selectedParking.name}
        />
      )}
    </>
  );
}
