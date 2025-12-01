import { View, Text, TouchableOpacity, TouchableWithoutFeedback,Image, Dimensions} from "react-native";
import React from "react";
import {styles} from '../theme'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


var {width,height}=Dimensions.get('window');


export default function CourseList({title,data}){
    let courseName="Course Nameeeeee"
    const navigation=useNavigation()
    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.text} className="text-lg">See All</Text>
                </TouchableOpacity>
            </View>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:15}}
            >
        {
             data.map((item,index)=>{
                    return (
                        <TouchableWithoutFeedback
                        key={index}
                        onPress={()=>navigation.navigate('Course',item)}
                        >
                            <View className="space-y-1 mr-4">
                                <Image 
                                    source={require('../assets/images/FlaskDjango.jpg')}
                                    className="rounded-3xl"
                                    style={{width:width*0.33,height: height*0.22}}
                                />
                                <Text className="text-neutral-300 ml-1">
                                {
                                    courseName.length>14? courseName.slice(0,14)+'...': courseName
                                }
                                </Text>
                            </View>
                            
                        </TouchableWithoutFeedback>
                    )
                    
                })
        }
               
            </ScrollView>
            
        </View>

        // <View style={{flex:1}}>
        //         <Text className="text-yellow-300 text-3xl font-bold" >USER INDEX PAGE</Text>
        //             {courses===null?<ActivityIndicator/>:<>
        //                 {courses.map(c=>(
        //                     <View key={c.id} style={styles.titlebox}>
        //                          {c.image && (
        //                     <Image
        //                     source={{ uri: c.image }}
        //                     style={styles.productImage}
        //                     resizeMode="cover"
        //                     />
        //       )}
        //                     <Text style={styles.title}>{c.subject}</Text>
        //                     </View>
                    
        //             ))}</>}
        //       </View>
    
    )

}