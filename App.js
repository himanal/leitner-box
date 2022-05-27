import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./StackNavigation";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { AuthProvider } from "./hooks/AuthUser";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <StackNavigation />
        <StatusBar/>
      </AuthProvider>
    </TailwindProvider>
  );
}
