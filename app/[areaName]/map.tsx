import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function AreaMap() {
  const navigation = useNavigation();
  const { areaName } = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${areaName} - Map`,
      headerLeft: () => null,
      headerRight: () => null,
    });
  }, [navigation, areaName]);

  return <Text>{areaName}</Text>;
}
