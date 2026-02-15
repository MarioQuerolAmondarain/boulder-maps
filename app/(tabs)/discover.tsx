import { useRouter, type Href } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DISCOVER_ITEMS: {
  title: string;
  description: string;
  href: Href;
}[] = [
  {
    title: "Sobre nosotros",
    description: "Conoce la historia y el equipo detras de Boulder Maps.",
    href: "/about",
  },
];

export default function Discover() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Descubre nuestra app</Text>
        <Text style={styles.subtitle}>
          Accede a contenido util para conocer mejor Boulder Maps.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {DISCOVER_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => router.push(item.href as Href)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCta}>Ver</Text>
            </View>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1b1b1b",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#5a5a5a",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8e2d8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1b1b1b",
  },
  cardCta: {
    fontSize: 13,
    fontWeight: "600",
    color: "#856a2e",
  },
  cardDescription: {
    marginTop: 6,
    fontSize: 14,
    color: "#5a5a5a",
  },
});
