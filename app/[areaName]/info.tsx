import { MapIcon } from "@/components/Icons";
import { getAreaDetails } from "@/services/AreaService";
import { AreaDetails } from "@/types/AreaDetails";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Pressable, Text, View } from "react-native";

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

  const areaDetails: AreaDetails = getAreaDetails(areaName!);

  if (!areaDetails) {
    return (
      <View>
        <Text>No information is available for this site yet. 😔</Text>
        <Text>
          Help us improve it! If you have information, please contact us.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{areaDetails.name}</Text>
      <Text>{areaDetails.description}</Text>
      <Text>Points of Interest:</Text>
      {areaDetails.pointsOfInterest.map((poi) => (
        <View key={poi.name}>
          <Text>
            {poi.name} ({poi.type}) - {poi.coordinates.latitude} ,{" "}
            {poi.coordinates.longitude}
          </Text>
        </View>
      ))}
    </View>
  );
}
