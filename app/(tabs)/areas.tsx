import { InfoIcon, MapIcon } from "@/components/Icons";
import { AREAS } from "@/data/areas";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const areas = AREAS;

  return (
    // TODO Crear componente AreaCard
    <View style={styles.container}>
      {areas.map((area) => (
        <View key={area.name}>
          <Text style={styles.title}>
            {area.name} - {area.province}
          </Text>

          <Text style={styles.description}>Boulders: {area.boulders}</Text>
          <Text style={styles.description}>Rock Type: {area.rockType}</Text>

          <View style={styles.buttons}>
            <Link
              href={{
                pathname: "/[areaName]/info",
                params: { areaName: area.name },
              }}
              asChild
            >
              <Pressable>
                <InfoIcon />
              </Pressable>
            </Link>
            <Link
              asChild
              href={{
                pathname: "/[areaName]/map",
                params: { areaName: area.name },
              }}
            >
              <Pressable>
                <MapIcon />
              </Pressable>
            </Link>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 10,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
  },
  buttons: { flexDirection: "row", gap: 20, marginTop: 10 },
});
