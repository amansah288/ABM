import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateOrder() {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            color: "gold",
            fontWeight: "bold",
            marginTop: 15,
            fontSize: 18,
          }}
        >
          CREATE ORDER
        </Text>
      </View>
      {/* Start here all code */}
      <LinearGradient
        colors={["grey", "white"]}
        style={styles.linearGradient}
        start={{ x: 0.1, y: 0.3 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View>
          <View style={{ height: "85%" }}>
            <ScrollView contentContainerStyle={styles.scrolView}>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text style={{ color: "white" }}>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
              <Text>hiupoerghupioreg</Text>
            </ScrollView>
          </View>

          <Pressable
            style={styles.ButPres}
            onPress={() => console.log("SUBMIT ORDER")}
          >
            <Text style={{ color: "black", padding: 10 }}>SUBMIT ORDER</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: "black",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  ButPres: {
    backgroundColor: "gold",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 12,
  },
  scrolView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
