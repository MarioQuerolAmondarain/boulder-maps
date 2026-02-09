import SectorPolygons from "@/components/map/AreaPolygons";
import BoulderMarkers from "@/components/map/BoulderMarkers";
import ParkingMarkers from "@/components/map/ParkingMarkers";
import PathLines from "@/components/map/PathLines";
import RockPolygons from "@/components/map/RockPolygons";
import SelectedBoulderSheet from "@/components/sheets/SelectedBoulderSheet";
import { useBoulder } from "@/providers/BoulderProvider";
import { Area } from "@/types";
import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import * as Location from "expo-location";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN || "");

type AreaMapProps = {
  area: Area;
};

export default function AreaMap({ area }: AreaMapProps) {
  const { setSelectedBoulder } = useBoulder();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () => {
      setSelectedBoulder(null);
    });
    return unsubscribe;
  }, [navigation, setSelectedBoulder]);

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

  return (
    <>
      <MapView style={styles.map} styleURL="mapbox://styles/mapbox/streets-v12">
        <Camera
          zoomLevel={10}
          animationDuration={0}
          centerCoordinate={[
            area.coordinates.longitude,
            area.coordinates.latitude,
          ]}
        />
        <LocationPuck
          puckBearingEnabled
          pulsing={{ isEnabled: true }}
          puckBearing="heading"
        />

        <RockPolygons areaId={area.id} />
        <BoulderMarkers areaId={area.id} />
        <SectorPolygons areaId={area.id} />
        <ParkingMarkers areaId={area.id} />
        <PathLines areaId={area.id} />
      </MapView>

      <SelectedBoulderSheet />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
