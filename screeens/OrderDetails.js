import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const OrderDetails = ({ navigation }) => {
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
          ORDER DETAILS
        </Text>
      </View>
      {/* Start here all code */}
      <LinearGradient
        colors={["black", "#373434"]}
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

          <Pressable style={styles.ButPres} onPress={() => console.log("PDF")}>
            <Text style={{ color: "black", padding: 10 }}>
              DOWNLOAD PDF & SHARE
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default OrderDetails;

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
