import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Stack } from "expo-router";
import "./global.css"

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} /> 
    </GestureHandlerRootView>

//GestureHandlerRootView
// Nó giống như một container đặc biệt:
// Kết nối native gesture handler với React Native.
// Đảm bảo mọi gesture được propagate đúng cách.
// Mọi ScrollView, FlatList, hoặc gesture handler khác phải nằm trong container này.
// Bọc GestureHandlerRootView là bắt buộc nếu dùng bất kỳ component nào từ react-native-gesture-handler.
        
  )
}



