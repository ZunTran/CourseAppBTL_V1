import { Redirect } from 'expo-router';
// Tự động chuyển hướng vào trang user khi mở app
export default function Index() {
  // Redirect to the screens stack index — this matches the generated route types
  return <Redirect href="/screens" />;
}