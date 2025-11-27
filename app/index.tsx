import { Redirect } from 'expo-router';
// Tự động chuyển hướng vào trang user khi mở app
export default function Index() {
  return <Redirect href="/user" />;
}