import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NoInfo() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "No encontrado",
          headerLeft: () => null,
          headerRight: () => null, // Boton de share/like?
        }}
      />
      <View style={styles.container}>
        <Text style={styles.notFoundText}>
          Aún no hay información disponible. 😔
        </Text>
        <Text style={styles.bodyText}>
          ¡Ayúdanos a mejorar! Si tienes información, por favor contáctanos.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
