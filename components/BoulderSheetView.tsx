import { Boulder } from "@/types/Boulder";
import { Image, Text, View } from "react-native";

export default function BoulderSheetView(boulder: Boulder) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: boulder?.imgUrl || undefined }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ padding: 10, paddingTop: 5 }}>
        <Text>{boulder?.name ? boulder.name : "No Boulder Selected"}</Text>
        <Text>{boulder?.description ? boulder.description : ""}</Text>
        <Text>{boulder?.grade ? `Difficulty: ${boulder.grade}` : ""}</Text>
        {boulder?.tags?.map((tag: any) => (
          <Text key={tag}>- {tag}</Text>
        ))}
      </View>
      {/* TODO add buttons for info, insta, ¿share?  */}
    </View>
  );
}
