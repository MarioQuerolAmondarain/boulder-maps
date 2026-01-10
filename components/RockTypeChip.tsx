import { RockType } from "@/types";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface RockTypeChipProps {
  rockType: RockType;
}

const getBackgroundColor = (rockType: RockType) => {
  switch (rockType) {
    case RockType.Sandstone:
      return "yellow";
    case RockType.Limestone:
      return "grey";
    case RockType.Granite:
      return "#e5e7eb";
    case RockType.Conglomerate:
      return "#f9fafb";
    case RockType.Basalt:
      return "#d4d4d8";
    default:
      return "#e0e0e0";
  }
};

export default function RockTypeChip({ rockType }: RockTypeChipProps) {
  return (
    <Text
      style={[styles.chip, { backgroundColor: getBackgroundColor(rockType) }]}
    >
      {rockType}
    </Text>
  );
}

const styles = StyleSheet.create({
  chip: {
    fontSize: 15,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight: "500",
    overflow: "hidden",
  },
});
