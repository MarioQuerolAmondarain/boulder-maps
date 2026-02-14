import { Area } from "@/types";
import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO Refactorizar y estilar
export default function AreaInfo() {
  const { areaData } = useLocalSearchParams();
  const area: Area = areaData ? JSON.parse(areaData as string) : null;

  if (!area) {
    return <Redirect href="/noinfo" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.description}>{area.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Puntos de interés</Text>
          {area.pointsOfInterest?.map((poi) => (
            <View key={poi.name} style={styles.listItem}>
              <Text style={styles.itemTitle}>
                {poi.name} <Text style={styles.itemType}>({poi.type})</Text>
              </Text>
              <Text style={styles.itemDetails}>
                {poi.coordinates.latitude}, {poi.coordinates.longitude}
              </Text>
            </View>
          ))}
        </View>

        {area.restrictions && area.restrictions.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Restricciones</Text>
            {area.restrictions.map((restriction, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bodyText}>• {restriction}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  listItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  itemType: {
    fontWeight: "normal",
    color: "#666",
    fontStyle: "italic",
  },
  itemDetails: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  bodyText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
});
