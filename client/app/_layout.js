// app/_layout.js
import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/useColorScheme";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css"

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#6200EE" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Restaurant" 
            options={{ title: "Restaurant", headerShown: false }} 
          />
          <Stack.Screen 
            name="CartScreen" 
            options={{ title: "Cart", headerShown: false, presentation: 'modal' }} 
          />
          <Stack.Screen 
            name="OrderPreparing" 
            options={{ title: "OrderPreparing", headerShown: false, presentation: 'fullScreenModal' }} 
          />
          <Stack.Screen 
            name="Delivery" 
            options={{ title: "Delivery", headerShown: false, presentation: 'fullScreenModal' }} 
          />
        </Stack>
        <StatusBar style="auto" />
    </ThemeProvider>
  );
}
