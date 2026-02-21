import { router } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>profile</Text>
      <TouchableOpacity>
        <Button title="Logout" onPress={() => router.push("/auth/login")} />
      </TouchableOpacity>
    </View>
  );
}
