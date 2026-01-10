import { MapIcon } from "@/components/Icons";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Pressable, Text } from "react-native";

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

  return <Text>{areaName}</Text>;
}
