import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Bar({ navigation, title }) {
  return (
    <View style={styles.Maincontainer}>
      <Pressable style={styles.container} onPress={navigation}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    height: 5,
    margin: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  Maincontainer: {
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    height: 60,
    margin: 10,
  },
});
