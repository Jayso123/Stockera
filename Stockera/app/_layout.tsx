import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
