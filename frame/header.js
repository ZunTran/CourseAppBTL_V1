import React from 'react';
import {Text,View} from 'react-native';
import {StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header=()=>{
    //  const insets = useSafeAreaInsets();
    return (
        <View style={[{ backgroundColor: "blue" }, style]} >
            <Text>Footer</Text>
        </View>
        
    );
};
export default Header;  