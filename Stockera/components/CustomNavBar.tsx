import { View, Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(PlatformPressable);

function CustomNavBar({ state, descriptors, navigation }: BottomTabBarProps) {
  //   const { colors } = useTheme();
  //   const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <AnimatedPressable
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabItem,
              isFocused && {
                backgroundColor: "#e93336",
                borderRadius: 20,
              },
            ]}
          >
            {getItemByRouteName(route.name, "white", 20)}
            {isFocused && (
              <Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)}
                style={styles.tabItemText}
              >
                {label as string}
              </Animated.Text>
            )}
          </AnimatedPressable>
        );
      })}
    </View>
  );

  function getItemByRouteName(routeName: string, color: string, size: number) {
    switch (routeName) {
      case "home":
        return <Ionicons name="home" color={color} size={size} />;

      case "chat":
        return <Ionicons name="chatbubble" color={color} size={size} />;

      case "request":
        return <Ionicons name="document-text" color={color} size={size} />;

      case "profile":
        return <Ionicons name="person" color={color} size={size} />;

      default:
        return <Ionicons name="ellipse" color={color} size={size} />; // ✅ FIX
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    width: "75%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    padding: 12,
    backgroundColor: "#3e4098",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  tabItem: {
    flexDirection: "row",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  tabItemText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 16,
  },
});

export default CustomNavBar;
