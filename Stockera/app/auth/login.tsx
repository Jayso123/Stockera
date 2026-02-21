import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { User } from "lucide-react-native";
import { router } from "expo-router";

function LogoIcon() {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <Circle cx="20" cy="16" r="12" fill="#6C63FF" />
      <Circle cx="36" cy="16" r="12" fill="#E84D8A" />
      <Circle cx="20" cy="32" r="12" fill="#2DC1C1" />
      <Circle cx="36" cy="32" r="12" fill="#6C63FF" />
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
        fill="#4285F4"
      />
      <Path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <Path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </Svg>
  );
}

function AppleIcon() {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        d="M17.05 12.536c-.03-3.072 2.508-4.548 2.622-4.62-1.428-2.088-3.654-2.376-4.446-2.41-1.89-.192-3.69 1.114-4.65 1.114-.96 0-2.442-1.086-4.014-1.056-2.064.03-3.966 1.2-5.028 3.048-2.142 3.72-.546 9.228 1.542 12.246 1.02 1.476 2.238 3.138 3.834 3.078 1.536-.06 2.118-1.002 3.978-1.002 1.86 0 2.382.996 4.008.966 1.656-.03 2.712-1.506 3.726-2.988 1.176-1.716 1.662-3.378 1.692-3.462-.036-.018-3.246-1.248-3.276-4.95l.012.036z"
        fill="#000"
      />
      <Path
        d="M14.016 3.42c.852-1.032 1.428-2.466 1.272-3.894-1.23.048-2.718.822-3.6 1.854-.792.918-1.482 2.382-1.296 3.786 1.374.108 2.772-.696 3.624-1.746z"
        fill="#000"
      />
    </Svg>
  );
}

function FacebookIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
        fill="#1877F2"
      />
    </Svg>
  );
}

export default function login() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState<string>("");
  const loginScale = useRef(new Animated.Value(1)).current;

  const handleLoginPressIn = () => {
    Animated.spring(loginScale, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handleLoginPressOut = () => {
    Animated.spring(loginScale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleLogin = () => {
    router.push("/home");
    console.log("Login pressed with:", email);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 40 }]}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <LogoIcon />
        </View>

        <Text style={styles.welcomeTitle}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Hi, Enter your details to get sign in{"\n"}to your account
        </Text>

        <View style={styles.inputContainer}>
          <User size={18} color="#B0B0B0" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter email/Phone no"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            testID="email-input"
          />
        </View>
        <View style={styles.inputDivider} />

        <Animated.View
          style={[
            styles.loginButtonWrapper,
            { transform: [{ scale: loginScale }] },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.85}
            onPressIn={handleLoginPressIn}
            onPressOut={handleLoginPressOut}
            onPress={handleLogin}
            testID="login-button"
          >
            <LinearGradient
              colors={["#7B6CF6", "#8A7DF7", "#9B8FF8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginButton}
            >
              <TouchableOpacity
                onPress={handleLogin}
                testID="login-button-inner"
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.socialSection}>
          <Text style={styles.orText}>Or Sign In via</Text>

          <View style={styles.socialButtonsRow}>
            <TouchableOpacity
              style={styles.socialButton}
              testID="google-button"
            >
              <GoogleIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} testID="apple-button">
              <AppleIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              testID="facebook-button"
            >
              <FacebookIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
  },
  logoContainer: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: "#1A1A2E",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#9E9E9E",
    lineHeight: 21,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    paddingVertical: 12,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    paddingVertical: 4,
  },
  inputDivider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginBottom: 32,
  },
  loginButtonWrapper: {
    marginBottom: 60,
  },
  loginButton: {
    height: 54,
    borderRadius: 30,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600" as const,
  },
  socialSection: {
    alignItems: "flex-start" as const,
  },
  orText: {
    fontSize: 13,
    color: "#666",
    marginBottom: 16,
  },
  socialButtonsRow: {
    flexDirection: "row" as const,
    gap: 12,
  },
  socialButton: {
    width: 100,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    backgroundColor: "#FFFFFF",
  },
});
