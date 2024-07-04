import { Pressable, StyleSheet, View, Text } from "react-native";

export default function PrButton({ title, pressHandle, navigation }) {
  return (
    <View>
      <Pressable style={styles.container} onPress={pressHandle}>
        <Text style={{ color: "white", margin: 5 }}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#373434",
    alignItems: "center",
    borderRadius: 100,
    //marginHorizontal: 70,
    padding: 5,
  },
});
