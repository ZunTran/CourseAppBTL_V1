import { HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";

export default function UserRootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" />      
    </Stack>
   
  )};
  




