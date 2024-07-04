import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HisabScreen from "./TotalScreenCom/HisabScreen";
import MahajanScreen from "./TotalScreenCom/MahajanScreen";

const Top = createMaterialTopTabNavigator();

function TotalScreen({ navigation }) {
  return (
    <Top.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#373434" },
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Top.Screen name="Hisab" component={HisabScreen} />
      <Top.Screen name="Mahajan" component={MahajanScreen} />
    </Top.Navigator>
  );
}

export default TotalScreen;

const styles = StyleSheet.create({});
