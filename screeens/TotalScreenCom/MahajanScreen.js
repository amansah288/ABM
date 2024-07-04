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
import { LinearGradient } from "expo-linear-gradient";
import Bar from "../../components/UI/Bar";

export default function MahajanScreen({ navigation }) {
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
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
            <Bar
              title="Sujit Conchem"
              navigation={() => navigation.navigate("Item")}
            />
          </ScrollView>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Pressable
            style={styles.AddBut}
            onPress={() => console.log("Add Mahajan")}
          >
            <Text style={{ color: "black", padding: 10, fontWeight: "bold" }}>
              Add Mahajan
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

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
    marginTop: 8,
    marginHorizontal: 10,
  },
});
