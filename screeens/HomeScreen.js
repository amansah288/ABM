import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderScreen from "./OrderScreen";
import TotalScreen from "./TotalScreen";
import OrderDetails from "./OrderDetails";
import RevenueScreen from "./RevenueScreen";
import CustomerScreen from "./CustomerScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CreateOrder from "./CreateOrder";
import ItemScreen from "./TotalScreenCom/ItemScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  function TestScreen({ navigation }) {
    return (
      <Tab.Navigator
        screenOptions={{
          //headerShown: false,
          tabBarStyle: { backgroundColor: "black" },
          tabBarActiveTintColor: "gold",
          tabBarInactiveTintColor: "white",
          headerStatusBarHeight: 10,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "gold",
        }}
      >
        <Tab.Screen
          name="ORDER"
          component={OrderScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="first-order-alt"
                size={23}
                color={focused ? "gold" : "white"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TOTAL"
          component={TotalScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="money-bill-wave"
                size={20}
                color={focused ? "gold" : "white"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="REVENUE"
          component={RevenueScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="profile"
                size={20}
                color={focused ? "gold" : "white"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CUSTOMER"
          component={CustomerScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="person-booth"
                size={20}
                color={focused ? "gold" : "white"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Details" component={OrderDetails} />
        <Stack.Screen name="CreateOrder" component={CreateOrder} />
        <Stack.Screen name="Item" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
