import Footer from "./footer"
import Header from "./header"
import React from "react"
import { View, StyleSheet } from 'react-native';


const GlobalWrapper = ({ children, style }) => {
  return (
    // 3. 👇 GỘP STYLE: Lấy style mặc định + style truyền vào
    <View style={[styles.container, style]}>
       <Header style={{height:10}}/>
       <View style={{flex: 1}}>
          {children}
       </View>
       <Footer style={{height:10}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Style mặc định
    backgroundColor: '#ff7676ff', // Ví dụ thêm style mặc định
  }
});

export default GlobalWrapper;