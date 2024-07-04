import { Image, View, StyleSheet } from "react-native";
import Icon from "../components/Photos/favorite.jpeg";

function SplashScreen() {
  return (
    <View style={Styles.container}>
      <Image source={Icon} style={Styles.images} />
    </View>
  );
}

export default SplashScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
