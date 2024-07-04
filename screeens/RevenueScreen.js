import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bar from "../components/UI/Bar";

const RevenueScreen = () => {
  return (
    <View style={{ backgroundColor: "#F5EBE7", height: "100%", width: "100%" }}>
      <View style={styles.firstContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Total Revenue
          </Text>
          <Text style={{ fontWeight: "bold" }}>2012 - Present</Text>
        </View>
      </View>
      <View style={styles.SecondContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Yearly Revenue
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.ScrollStyle}>
          <Bar title={"2012"} />
          <Bar title={"2012"} />
          <Bar title={"2012"} />
          <Bar title={"2012"} />
          <Bar title={"2012"} />
          <Bar title={"2012"} />
          <Bar title={"2012"} />
          <Bar title={"2012"} />
        </ScrollView>
      </View>
    </View>
  );
};

export default RevenueScreen;

const styles = StyleSheet.create({
  firstContainer: {
    margin: 10,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    //justifyContent: "center",
    //alignItems: "center",
    padding: 10,
    height: "35%",
  },
  SecondContainer: {
    margin: 10,
    marginTop: 1,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    //justifyContent: "center",
    //alignItems: "center",
    padding: 10,
    height: "60%",
  },
  ScrollStyle: {
    marginTop: 10,
  },
});
