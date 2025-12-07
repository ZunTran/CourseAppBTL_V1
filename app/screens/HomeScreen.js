import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline';
// import {styles} from '../theme'
import {styles} from '../../theme'
import HotCourses from "@/components/hotCourses";
import CourseList from "@/components/courseList";
import { router } from 'expo-router';
import Loading from "@/components/loading"


const ios = Platform.OS == 'ios';
export default function HomeScreen() {
    // 1,2,3 -> Truyền 1 mảng số dummy data (dữ liệu giả) nhưng chỉ phù hợp cho map 
    //đơn giản, KHÔNG phù hợp để truyền vào component phức tạp như Carousel hay Navigation
    //chỉ dùng để test render lặp lại

    // const [hot,setHot]=useState([1,2,3])  
    //Khi Test Front-end nên tự tạo lấy dữ liệu để test
    const [hot, setHot] = useState([
  { id: 1, name: "React Course" },
  { id: 2, name: "Native Course" },
  { id: 3, name: "Expo Course" }
]);
    const [upcoming,setUpcoming]=useState([1,2,3,4])  
    const [bestseller,setBestSeller]=useState([1,2,3])
    const [loading, setloading]=useState(false);  
    
    return (
        <View className="flex-1 bg-[#0D1117]">
            {/* Search bar & logo */}
            <SafeAreaView className={ios?"-mb-2":"-mb-3"}>
                <StatusBar style ="light" />
                <View className="flex-row justify-between items-center mx-4 ">
                    <Bars3BottomLeftIcon size={25} strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>C
                        </Text>ourses
                    </Text>

                    {/* Search & Giỏ Hàng */}
                    <View className="flex-row ">
                    <TouchableOpacity className="mr-3" 
                        onPress={()=>router.push('./SearchScreen')}>
                        <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                     <TouchableOpacity>
                        <ShoppingCartIcon size="25" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                    </View>                  
                </View>
            </SafeAreaView>

            {
                loading? (
                    <Loading />
                ):
            (
                <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
            >
                {/* Này Hot Courses */}
               <HotCourses data={hot} /> 

               {/* DSach hiển thị vài Khóa Học */}
               <CourseList title ="Upload ... later" data={upcoming} />
               
               {/* Các Khóa Best Seller */}
               <CourseList title="Best Seller" data={bestseller} />

            </ScrollView>
            )
            }
            
            
        </View>
    );
};
