import * as React from "react";
import { Image, View } from "react-native";

// TODO estaría bien cambiar el logo por un SVG para que escale mejor en pantallas grandes
const Logo = (props: any) => (
  <View>
    <Image
      source={require("../../assets/images/BoulderMapsLogo_v2.png")}
      style={{ height: 50, width: 200 }}
    />
  </View>
);
export default Logo;
