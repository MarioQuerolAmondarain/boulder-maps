import SelectedBoulderSheet from "@/components/BottomSheet";
import BoulderMarkers from "@/components/BoulderMarkers";
import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import * as Location from "expo-location";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN || "");

export default function AreaMap() {
  const navigation = useNavigation();
  const { areaName } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

  // TODO Refactor to use <Stack.Screen options={{ title: 'Details' }} />
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${areaName} - Map`,
      headerLeft: () => null,
      headerRight: () => null,
    });
  }, [navigation, areaName]);

  return (
    <>
      <MapView
        style={styles.map}
        styleURL="mapbox://styles/mapbox/outdoors-v12"
      >
        <Camera
          zoomLevel={13}
          animationDuration={0}
          centerCoordinate={[-2.992666, 43.34254]}
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
