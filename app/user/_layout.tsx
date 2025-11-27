import { Stack } from "expo-router";

export default function UserRootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#444444ff' }, // Màu nền
        headerTintColor: '#fff', // Màu chữ & nút Back
        headerTitleStyle: { fontWeight: 'bold' },
        title: "Trang Chủ App", // Tên hiển thị
      }}
        >

        <Stack.Screen name="index" />
        
    </Stack>
   
  )};
  




// app/_layout.tsx
// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: '#f4511e' }, // Màu nền
//         headerTintColor: '#fff', // Màu chữ & nút Back
//         headerTitleStyle: { fontWeight: 'bold' },
//         title: "Trang Chủ App", // Tên hiển thị
//       }}
//     >
//       <Stack.Screen name="index" options={{ title: 'Trang Chủ' }} />
//       <Stack.Screen name="details" options={{ title: 'Chi Tiết' }} />
//     </Stack>
//   );
// }

// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Icon

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
//       <Tabs.Screen 
//         name="index" 
//         options={{ 
//           title: 'Trang chủ',
//           tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//         }} 
//       />
//       <Tabs.Screen 
//         name="profile" 
//         options={{ 
//           title: 'Cá nhân',
//           tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
//         }} 
//       />
//     </Tabs>
//   );
// }