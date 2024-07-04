import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/UI/Card";
import { LinearGradient } from "expo-linear-gradient";
import Bar from "../components/UI/Bar";

const CustomerScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["black", "#373434"]}
      style={styles.linearGradient}
      start={{ x: 0.1, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View>
        <View style={{ height: "92%" }}>
          <ScrollView>
            <Bar />
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
    width: "100%",
  },
  AddBut: {
    backgroundColor: "gold",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },
});
