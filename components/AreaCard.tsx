import { LocationIcon, MapIcon, ProblemsIcon } from "@/components/Icons";
import RockTypeChip from "@/components/RockTypeChip";
import { Area } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AreaCard({ area }: { area: Area }) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Link
          asChild
          href={{
            pathname: "/[areaName]/info",
            params: { areaName: area.name },
          }}
        >
          <TouchableOpacity>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={styles.title}>{area.name}</Text>
              <RockTypeChip rockType={area.rockType} />
            </View>

            <View style={{ flexDirection: "row", marginTop: 5, gap: 15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <LocationIcon />
                <Text style={styles.description}>{area.province}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ProblemsIcon />
                <Text style={styles.description}>{area.boulders}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.buttons}>
        <Link
          asChild
          href={{
            pathname: "/[areaName]/map",
            params: { areaName: area.name },
          }}
          style={{ marginRight: 15 }}
        >
          <TouchableOpacity>
            <MapIcon />
          </TouchableOpacity>
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
    borderRadius: 1,
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
