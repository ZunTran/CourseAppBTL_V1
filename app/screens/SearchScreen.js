import { View, Text, Dimensions, TouchableOpacity, Touchable, TouchableWithoutFeedback,Image  } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { XMarkIcon } from "react-native-heroicons/outline";
import Loading from "@/components/loading";
const {width,height }=Dimensions.get('window')

export default function SearchScreen(){
    const[results,getResults]=useState([1,2,3,4]); 
    const courseName='Courseeeeee  nameeeeeee Courseeeeee  nameeeeeee'
    const [loading, setloading]=useState(true);  
    return (
        <SafeAreaView className="bg-neutral-800 flex-1">

            {/* Thanh Tìm Kiếm */}
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput 
                placeholder="Search Course"
                placeholderTextColor={'lightgray'}
                className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                />
            <TouchableOpacity onPress={()=> {
                router.back();
            }}
            className="rounded-full p-3 m-1 bg-neutral-500">
                <XMarkIcon size="25" color="white" />
            </TouchableOpacity>
            </View>

            {/* Kết quả Tìm Kiếm */}
            {
                loading? (
                    <Loading />
                ):  
                results.length>0? (
                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
                className="space-y-3">
                    <Text className="text-white font-semibold ml-1" >Results ({results.length})</Text>
                    <View className="flex-row justify-between flex-wrap items-center"> 
                        {
                            results.map((item,index)=>{
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={()=>  router.push({
                                                        pathname: "/screens/CourseScreen",
                                                        params: item
                                                })}
                                    >
                                    <View className="w-[48%] space-y-2 mb-4 self-start">
                                                <Image className="rounded-3xl"
                                                        source={require('../../assets/images/FlaskDjango.jpg')}
                                                        style={{width:width*0.44, height:height*0.33}}
                                                />
                                                <Text className="text-neutral-300 ml-1">
                                                   {
                                                    courseName.length>20? courseName.slice(0,22)+'...': courseName
                                                   } 
                                                </Text>
                                    </View>

                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                    </View>
            </ScrollView>
            ):(
                <View className="flex-row justify-center items-center">
                    <Text className=" text-slate-300 font-semibold ">
                        No Result
                    </Text>
                </View>
               )
        }
        </SafeAreaView>
    )
}