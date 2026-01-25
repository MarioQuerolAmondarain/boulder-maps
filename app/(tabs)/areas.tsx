import AreaCard from "@/components/AreaCard";
import { getAllAreas } from "@/services/AreaService";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const areas = getAllAreas();

  return (
    <ScrollView>
      <View style={styles.container}>
        {areas.map((area) => (
          <AreaCard key={area.name} area={area} />
        ))}
      </View>
      <View style={styles.missingAreaContainer}>
        <Text>¿No encuentras tu zona de escalada?</Text>
        <Text>¡Contáctanos para añadirla!</Text>
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
  missingAreaContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    opacity: 0.5,
  },
});
