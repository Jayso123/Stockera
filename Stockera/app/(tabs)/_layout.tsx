import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
import CustomNavBar from "@/components/CustomNavBar";

export default function RootLayout() {
  return (
    <Tabs tabBar={(props) => <CustomNavBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
