import GoBackButton from "@/components/ui/GoBackButton";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function About() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackButton />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.description}>
          Boulder Maps es una aplicación diseñada para ayudar a los escaladores
          a descubrir y navegar por sectores de boulder. Explora rutas, sigue tu
          progreso y conéctate con la comunidad.
        </Text>

        <Text style={styles.title}>¿Por qué gratis?</Text>
        <Text style={styles.description}>
          Creemos que el acceso a la información de escalada debe ser gratuito
          para todos. Al mantener Boulder Maps gratis, aspiramos a fomentar una
          comunidad de escalada más inclusiva y solidaria ❤️
        </Text>

        <Text style={styles.title}>El equipo</Text>
        <View style={styles.memberContainer}>
          <Image
            source={require("../assets/images/about/mario.png")}
            style={styles.avatar}
          />
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>Mario</Text>
            <Text style={styles.memberDescription}>
              Mario es un escalador apasionado que decidió contribuir creando
              esta aplicación para ayudar a otros escaladores a descubrir áreas
              que antes eran difíciles de encontrar.
            </Text>
          </View>
        </View>

        <Text style={styles.title}>¿Quieres colaborar?</Text>
        <Text style={styles.description}>
          Boulder Maps es un proyecto de código abierto y damos la bienvenida a
          las contribuciones de la comunidad. Si estás interesado en ayudar, por
          favor escríbenos.
        </Text>
        <Text style={styles.description}>
          También si te encanta abrir nuevas áreas de boulder y quieres verlas
          en la aplicación, puedes ayudarnos compartiendo la información sobre
          el área.
        </Text>
        <Text style={styles.description}>
          Y podemos otorgarte acceso a las herramientas de Setter.
        </Text>

        <Text
          style={{
            textAlign: "left",
            fontSize: 16,
          }}
        >
          ¡Nos vemos en el sector! 😁
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "gray",
          }}
        >
          El equipo de BoulderMaps
        </Text>
        <View style={{ height: 80 }} />
      </ScrollView>

      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 100,
        }}
        pointerEvents="none"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    paddingTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  memberDescription: {
    fontSize: 14,
    textAlign: "left",
  },
});
