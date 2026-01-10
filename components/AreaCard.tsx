import { InfoIcon, MapIcon } from "@/components/Icons";
import { Area } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AreaCard({ area }: { area: Area }) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{area.name}</Text>
        <Text style={styles.description}>{area.province}</Text>
        <Text style={styles.description}>
          Boulders: {area.boulders} - {area.rockType}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Link
          asChild
          href={{
            pathname: "/[areaName]/info",
            params: { areaName: area.name },
          }}
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
          style={{ marginRight: 15 }}
        >
          <Pressable>
            <MapIcon />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
  },
});
