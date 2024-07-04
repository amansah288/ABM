import { StyleSheet, View, Text } from "react-native";
import PrButton from "./PrButton";
import { useNavigation } from "@react-navigation/native";

export default function Card({ ViewDetail, RemoveHan }) {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inneView}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          elevation: 100,
        }}
      >
        <PrButton title="REMOVE" pressHandle={RemoveHan} />
        <View style={styles.updateScreen}>
          <Text style={styles.TxtUpdatSc}>FINISHED</Text>
        </View>
        <PrButton title="View Detail" pressHandle={ViewDetail} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    margin: 10,
    borderRadius: 10,
    height: 200,
    marginHorizontal: 30,
    justifyContent: "center",
  },
  inneView: {
    margin: 10,
    backgroundColor: "gold",
    borderRadius: 10,
    alignItems: "center",
    height: 160,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  updateScreen: {
    backgroundColor: "green",
    borderRadius: 100,
  },
  TxtUpdatSc: {
    color: "white",

    padding: 10,
  },
});
