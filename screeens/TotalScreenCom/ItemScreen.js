import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function ItemScreen({ navigation }) {
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
          ITEMS
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

          <View style={styles.ButPres}></View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
  },
  ButPres: {
    backgroundColor: "gold",
    height: 80,
  },
  scrolView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
