import AreaMap from "@/components/map/AreaMap";
import AreaSelectModal from "@/components/modals/AreaSelectModal";
import { DropdownIcon, InfoIcon } from "@/components/ui/Icons";
import { getAllAreas } from "@/services/AreaService";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Areas() {
  const areas = getAllAreas();
  const [selectedArea, setSelectedArea] = useState(areas[0]);
  const [isAreaModalVisible, setIsAreaModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.areaSelectButton}
          onPress={() => {
            setIsAreaModalVisible(true);
          }}
        >
          <Text style={styles.areaSelectText}>
            {selectedArea?.name ? selectedArea.name : "Selecciona una zona"}
          </Text>
          <DropdownIcon />
        </TouchableOpacity>
        <Link
          asChild
          href={{
            pathname: "/[areaName]/info",
            params: {
              areaName: selectedArea.name,
              areaData: JSON.stringify(selectedArea),
            },
          }}
        >
          <TouchableOpacity style={styles.infoButton}>
            <InfoIcon />
          </TouchableOpacity>
        </Link>
      </View>

      <AreaMap area={selectedArea} />

      <AreaSelectModal
        visible={isAreaModalVisible}
        areas={areas}
        selectedAreaId={selectedArea?.id}
        onSelect={(area) => {
          setSelectedArea(area);
          setIsAreaModalVisible(false);
        }}
        onClose={() => setIsAreaModalVisible(false)}
      />
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
  },
  areaSelectButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  areaSelectText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginRight: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 12,
  },
  infoButton: {
    padding: 6,
  },
});
