import { NavigationContainer } from '@react-navigation/native';
import { Redirect } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CourseScreen from './screens/CourseScreen';

// Tự động chuyển hướng vào trang user khi mở app
export default function AppNavigation() {
  // Redirect to the screens stack index — this matches the generated route types
  // return <Redirect href="/screens" />;

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Course" options={{headerShown:false}} component={CourseScreen} />
      </Stack.Navigator>
  )
}