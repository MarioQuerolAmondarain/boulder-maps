import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity style={{ padding: 10 }} onPress={() => router.back()}>
      <Text style={{ color: "#1f6feb", fontSize: 16 }}>{"< Volver"}</Text>
    </TouchableOpacity>
  );
}
