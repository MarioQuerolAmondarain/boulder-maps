import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "What's Boulder Maps?",
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />

      <View style={styles.container}>
        <Text style={styles.description}>
          Boulder Maps is an app designed to help climbers discover and navigate
          bouldering locations. Explore routes, track your progress, and connect
          with the climbing community.
        </Text>

        <Text style={styles.title}>Why free?</Text>
        <Text style={styles.description}>
          We believe that access to climbing information should be free for
          everyone. By keeping Boulder Maps free, we aim to foster a more
          inclusive and supportive climbing community ❤️
        </Text>

        <Text style={styles.title}>The team</Text>
        <View style={styles.memberContainer}>
          <Image
            source={require("../assets/images/about/mario.png")}
            style={styles.avatar}
          />
          <View style={styles.memberInfo}>
            <Text style={styles.memberName}>Mario</Text>
            <Text style={styles.memberDescription}>
              Mario is a passionate climber who decided to chip in by creating
              this app to help other climbers discover areas that were
              previously difficult to find.
            </Text>
          </View>
        </View>

        <Text style={styles.title}>Do you want to collaborate?</Text>
        <Text style={styles.description}>
          Boulder Maps is an open-source project, and we welcome contributions
          from the community. If you&apos;re interested in helping out, please
          text us.
        </Text>
        <Text style={styles.description}>
          Also if you love to open new areas of bouldering and want to see them
          in the app, you can help us by sharing the information about the area.
        </Text>
        <Text style={styles.description}>
          And we can grant you access to Setter tools.
        </Text>

        <Text
          style={{
            textAlign: "left",
            fontSize: 16,
          }}
        >
          See you on the rocks! 😁
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "gray",
          }}
        >
          BoulderMaps Team
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
