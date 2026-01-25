import BoulderMarkers from "@/components/BoulderMarkers";
import SelectedBoulderSheet from "@/components/SelectedBoulderSheet";
import { useBoulder } from "@/providers/BoulderProvider";
import { Area } from "@/types";
import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import * as Location from "expo-location";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN || "");

export default function AreaMap() {
  const { areaData } = useLocalSearchParams();
  const area: Area = areaData ? JSON.parse(areaData as string) : {};
  const { setSelectedBoulder } = useBoulder();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
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
      <Stack.Screen
        options={{
          headerTitle: `${area.name} - Mapa`,
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />
      <MapView
        style={styles.map}
        styleURL="mapbox://styles/mapbox/outdoors-v12"
      >
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

        <BoulderMarkers />
        {/* PARKINGS */}
        {/* SECTORS */}
        {/* PATHS */}
      </MapView>

      <SelectedBoulderSheet />
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});
