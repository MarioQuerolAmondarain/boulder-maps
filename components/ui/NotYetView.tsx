import { Image, Text, View } from "react-native";

export default function NotYetView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/images/senderista.png")}
        style={{ width: 150, height: 150 }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginTop: 20,
          color: "#333",
        }}
      >
        🚧 ¡Estamos trabajando en ello! 🚧
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#555",
          marginTop: 10,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        Esta sección aún no está disponible, pero estamos trabajando para
        traértela lo antes posible. ¡Gracias por tu paciencia!
      </Text>
    </View>
  );
}
