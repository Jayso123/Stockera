import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={Styles.uprScrn}>
        <Image
          source={require("../../assets/images/App-icon.png")}
          style={{ width: 50, height: 50, top: 14, left: 10 }}
        />
        <Ionicons
          name="notifications"
          size={28}
          color="#000"
          style={Styles.notificationIcon}
        />
      </View>
      <FlatList
        data={[
          { id: "1", title: "Card 1", count: 10 },
          { id: "2", title: "Card 2", count: 20 },
          { id: "3", title: "Card 3", count: 30 },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={Styles.cards}>
            <Text style={Styles.cardText}>{item.title}</Text>
            <Text style={Styles.cardCount}>{item.count} items</Text>
          </View>
        )}
      />
    </SafeAreaView>
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
    top: 20,
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
