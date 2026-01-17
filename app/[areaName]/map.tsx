import bouldersJson from "@/data/boulders.json";
import { useBoulder } from "@/providers/BoulderProvider";
import Mapbox, {
  Camera,
  CircleLayer,
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

  // TODO Refactor to use <Stack.Screen options={{ title: 'Details' }} />
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${areaName} - Map`,
      headerLeft: () => null,
      headerRight: () => null,
    });
  }, [navigation, areaName]);

  const boulderPoints = bouldersJson.map((boulder) =>
    point([boulder.longitude, boulder.latitude], { boulder })
  );

  const { setSelectedBoulder } = useBoulder();

  const onPointPress = async (e: any) => {
    if (e.features[0]?.properties?.boulder) {
      setSelectedBoulder(e.features[0].properties.boulder);
    }
  };

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
        cluster
        shape={featureCollection(boulderPoints)}
        onPress={onPointPress}
      >
        <SymbolLayer
          id="cluster-count"
          filter={["has", "point_count"]}
          style={{
            textField: ["get", "point_count"],
            textSize: 16,
            textColor: "white",
            textIgnorePlacement: true,
            textAllowOverlap: true,
          }}
        />

        <CircleLayer
          id="cluster"
          belowLayerID="cluster-count"
          filter={["has", "point_count"]}
          style={{
            circlePitchAlignment: "map",
            circleColor: "blue",
            circleRadius: 20,
            circleOpacity: 1,
            circleStrokeWidth: 2,
            circleStrokeColor: "white",
          }}
        />

        <SymbolLayer
          id="boulder-icons"
          filter={["!", ["has", "point_count"]]}
          style={{
            iconImage: "pin",
            iconSize: 0.5,
            iconAllowOverlap: true,
            iconAnchor: "bottom",
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
