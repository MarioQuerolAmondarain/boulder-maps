import { MapIcon } from "@/components/Icons";
import { getAreaDetails } from "@/services/AreaService";
import { AreaDetails } from "@/types/AreaDetails";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AreaInfo() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const areaName = Array.isArray(params.areaName)
    ? params.areaName[0]
    : params.areaName;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${areaName} - Info`,
      headerLeft: () => null,
      headerRight: () => (
        <Link
          asChild
          href={{
            pathname: "/[areaName]/map",
            params: { areaName: areaName },
          }}
        >
          <Pressable>
            <MapIcon />
          </Pressable>
        </Link>
      ),
    });
  }, [navigation, areaName]);

  const areaDetails: AreaDetails = getAreaDetails(areaName!);

  if (!areaDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>
          No information is available for this site yet. 😔
        </Text>
        <Text style={styles.bodyText}>
          Help us improve it! If you have information, please contact us.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{areaDetails.name}</Text>
      <Text style={styles.description}>{areaDetails.description}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Points of Interest</Text>
        {areaDetails.pointsOfInterest.map((poi) => (
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

      {areaDetails.restrictions && areaDetails.restrictions.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Restrictions</Text>
          {areaDetails.restrictions.map((restriction, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bodyText}>• {restriction}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
