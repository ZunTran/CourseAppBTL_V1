 import {View,Text, ScrollView, TouchableOpacity, Dimensions, Platform,Image} from "react-native"
 import React, { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronDoubleLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from 'react-native-heroicons/solid'
import { styles } from "@/theme";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Author from "@/components/Author";

var {width,height}=Dimensions.get('window');
const ios=Platform.OS=='ios';
const topMargin=ios?'': 'mt-3';

 export default function CourseScreen(){
    const {params:item}=useRoute();
    const [isFavourite,toggleFavourite]=useState(false);
    const navigation=useNavigation();
    const [author,setAuthor]=useState([1]);
    let courseName="Course Nameeeeee"
    useEffect(()=>{
        //gọi API course details
    },[item])
    return (
        <ScrollView
        contentContainerStyle={{paddingBottom:20}}
        className="flex-1 bg-neutral-900"
        >
            {/* 1 Button quay lại & TT Khóa học + 1 cái nút Drop ndung mô tả KH xuống */}
    <View className="w-full">
        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 "+ topMargin} >
            <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.background} className="rounded-xl" >
                <ChevronDoubleLeftIcon size="28" strokeWidth={2.5} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)}>
                <HeartIcon size="30" color={isFavourite?"red":"white"} />
            </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image source={require('../../assets/images/fullstackweb.png')}
                style={{width,height:height*0.4}}
            />
        {/* thư viện để tạo hiệu ứng chuyển màu (gradient) React Native (Expo)trên->dưới,trái→phải,chéo,… */}
            <LinearGradient 
                colors={['trasparent', 'rgbs(23,23,23,0.8)','rgbs(23,23,23,1)']}
                style={{width,height:height*0.4}}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:1}}
                className="absolute bottom-0"
            />
        </View>
        
        {/* Course Details */}
         <View>
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
            {
                courseName
            }
            </Text>
            {/* Tgian Update & Thời lượng Khóa học */}
            <Text className="text-neutral-400 font-semibold text-base text-center">
                2025 ◊ 100 min
            </Text>

            {/* genres */}
            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                Python° 
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                Code° 
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                React° 
                </Text>
            </View>
            {/* Mô Tả  */}
            <Text className="text-neutral-400 mx-4 tracking-wide">
                Full Stack Course how to make a course app. Front-end and Backend.
            </Text>
        </View>

            {/* Author */}
            <Author author={author} />
    </View>
        </ScrollView>
    )
 }