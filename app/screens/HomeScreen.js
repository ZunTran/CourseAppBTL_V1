import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
// import {styles} from '../theme'
import {styles} from '../../theme'
import HotCourses from "@/component/hotCourses";


const ios = Platform.OS == 'ios';
export default function HomeScreen() {
    // WTF 1,2,3
    const [hot,setHot]=useState([1,2,3])   
    return (
        <View className="flex-1 bg-[#0D1117]">
            {/* Search bar & logo */}
            <SafeAreaView className={ios?"-mb-2":"-mb-3"}>
                <StatusBar style ="light" />
                <View className="flex-row justify-between items-center mx-4 ">
                    <Bars3BottomLeftIcon size={25} strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        {/* <Text style={styles.text}>C */}
                        <Text style={styles.text}>C
                        </Text>ourses
                    </Text>

                    <TouchableOpacity>
            <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
            >
               <HotCourses data={hot} /> 
            </ScrollView>
        </View>
    );
};
