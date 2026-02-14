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
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LocationArrowIcon } from "../ui/Icons";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN || "");

type AreaMapProps = {
  area: Area;
};

export default function AreaMap({ area }: AreaMapProps) {
  const { setSelectedBoulder } = useBoulder();
  const navigation = useNavigation();
  const cameraRef = useRef<Camera>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () => {
      setSelectedBoulder(null);
    });
    return unsubscribe;
  }, [navigation, setSelectedBoulder]);

  useEffect(() => {
    (async () => {
      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.granted) {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation([location.coords.longitude, location.coords.latitude]);
      }
    })();
  }, []);

  const handleCenterLocation = () => {
    if (userLocation && cameraRef.current) {
      cameraRef.current.setCamera({
        centerCoordinate: userLocation,
        zoomLevel: 14,
        animationDuration: 500,
      });
    }
  };

  return (
    <>
      <MapView style={styles.map} styleURL="mapbox://styles/mapbox/streets-v12">
        <Camera
          ref={cameraRef}
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

      <TouchableOpacity
        style={styles.centerButton}
        onPress={handleCenterLocation}
      >
        <LocationArrowIcon />
      </TouchableOpacity>

      <SelectedBoulderSheet />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  centerButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  centerButtonText: {
    fontSize: 28,
  },
});
