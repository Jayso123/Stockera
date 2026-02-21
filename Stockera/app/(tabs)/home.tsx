import { Text, View, Image, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function home() {
  return (
    <View>
      <View style={Styles.uprScrn}>
        <Image
          source={require("../../assets/images/App-icon.png")}
          style={{ width: 50, height: 50, top: 34, left: 10 }}
        />
        <Ionicons
          name="notifications"
          size={28}
          color="#000"
          style={Styles.notificationIcon}
        />
      </View>
      <View style={Styles.cards}>
        <Text style={Styles.cardText}>Card 1</Text>
        <Text style={Styles.cardCount}>Card 2</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  uprScrn: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#d70c0c",
  },
  notificationIcon: {
    position: "relative",
    top: 45,
    right: 10,
  },
  cards: {},
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardCount: {
    fontSize: 14,
    color: "#666",
  },
});
