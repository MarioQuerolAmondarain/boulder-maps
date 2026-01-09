import React from "react";
import { Text } from "react-native";

interface BoulderArea {
  name: string;
  blocks: number;
}

export default function Index() {
  const data: BoulderArea[] = [
    { name: "Larraona", blocks: 15 },
    { name: "Santa Gadea", blocks: 22 },
    { name: "Rozas", blocks: 30 },
    { name: "Ahedo", blocks: 8 },
  ];

  return <Text>AREAS</Text>;
}
