import AreaCard from "@/components/AreaCard";
import { AREAS } from "@/data/areas";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  const areas = AREAS;

  return (
    <ScrollView>
      <View style={styles.container}>
        {areas.map((area) => (
          <AreaCard key={area.name} area={area} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 10,
  },
});
