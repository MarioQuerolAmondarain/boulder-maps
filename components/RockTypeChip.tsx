import { RockType } from "@/types";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface RockTypeChipProps {
  rockType: RockType;
}

const getBackgroundColor = (rockType: RockType) => {
  switch (rockType) {
    case RockType.Sandstone:
      return "#d3a281";
    case RockType.Limestone:
      return "#beb9ac";
    default:
      return "red";
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
    fontSize: 12,
    borderRadius: 5,
    marginLeft: 5,
    paddingHorizontal: 9,
    paddingVertical: 4,
    fontWeight: "500",
    overflow: "hidden",
    opacity: 0.7,
  },
});
