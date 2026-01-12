import Mapbox, {
  Camera,
  Images,
  LocationPuck,
  MapView,
  ShapeSource,
  SymbolLayer,
} from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${areaName} - Map`,
      headerLeft: () => null,
      headerRight: () => null,
    });
  }, [navigation, areaName]);

  return (
    <MapView style={styles.map} styleURL="mapbox://styles/mapbox/outdoors-v12">
      <Camera
        zoomLevel={13}
        animationDuration={0}
        centerCoordinate={[-2.992666, 43.34254]}
      />
      <LocationPuck puckBearingEnabled puckBearing="heading" />

      <ShapeSource
        id="boulders"
        shape={featureCollection([point([-2.992666, 43.34254])])}
      >
        <SymbolLayer
          id="boulder-icons"
          style={{
            iconImage: "pin",
            iconSize: 0.5,
          }}
        />

        <Images
          images={{
            pin: require("../../assets/images/pin.png"),
          }}
        />
      </ShapeSource>
    </MapView>
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
