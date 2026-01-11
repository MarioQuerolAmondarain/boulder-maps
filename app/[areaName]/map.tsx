import Mapbox, { Camera, MapView } from "@rnmapbox/maps";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

Mapbox.setAccessToken(
  "pk.eyJ1IjoibXF1ZXJvbCIsImEiOiJjbWs5bmJpZ2gxamVlM2NyNW44MWs4b2J4In0.T99Z7_RmAgog1D-5Xxzj6w"
);

export default function AreaMap() {
  const navigation = useNavigation();
  const { areaName } = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${areaName} - Map`,
      headerLeft: () => null,
      headerRight: () => null,
    });
  }, [navigation, areaName]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <Camera
            defaultSettings={{
              centerCoordinate: [43.352926, -3.006046],
            }}
          />
        </MapView>
      </View>
    </View>
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
