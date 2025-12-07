import { View ,Text, Dimensions, Platform,TouchableOpacity, Image} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { ChevronDoubleLeftIcon} from "react-native-heroicons/outline";
import { router } from "expo-router";
import { StarIcon} from 'react-native-heroicons/solid'
import { styles } from "@/theme";
import { useState } from "react";
import CourseList from "@/components/courseList";
import Loading from "@/components/loading";

var {width,height}= Dimensions.get('window')
const ios=Platform.OS=='ios'
const verticalMargin=ios?'':'my-3'
export default function PersonScreen(){
    const [isFavourite, toggleFavourite]=useState(false);
    const [personCourses,setPersonCourses]=useState([1,2,3]);
    const [loading, setloading]=useState(false);  
    return (
        <ScrollView style={styles.background}>
            {/* Back button */}
            <SafeAreaView className={" z-20 w-full flex-row justify-between items-center px-4 "+ verticalMargin} >
            <TouchableOpacity onPress={()=> router.back()} style={styles.background} className="rounded-xl" >
                <ChevronDoubleLeftIcon size="28" strokeWidth={2.5} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)}>
                <StarIcon size="30" color={isFavourite?"yellow":"white"} />
            </TouchableOpacity>
            </SafeAreaView >

        {
            loading?(
                <Loading />
            ):(

                <View>
                    {/* Author detais */}
                <View className="justify-center items-center"
                 style={{
                    shadowColor:'gray',
                    shadowRadius:40,
                    shadowOffset:{width:0,height:5},
                    shadowOpacity:5
                }}
            >
               
                <View className="items-center rounded-full overflow-hidden h-80 w-80 border-2 border-white ">
                    <Image source={require('../../assets/images/Author.jpg')}
                style={{height : height*0.4,width : width*0.7}}
                />
                </View>
                
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        Dương Hữu Thành
                    </Text>
                    <Text className="text-base text-cyan-100 font-bold text-center">
                        ThS/ Giảng Viên ĐH Mở TPHCM
                    </Text>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg font-bold ">Giới Thiệu</Text>
                    <Text className="text-neutral-300 tracking-wide">Thầy Dương Hữu Thành là một giảng viên tại Khoa Công nghệ thông tin của Trường Đại học Mở Thành phố Hồ Chí Minh (OU). Ông là Thạc sĩ, đã tham gia vào các hoạt động của khoa như họp hội đồng nghiệm thu tài liệu học tập "Công nghệ phần mềm"</Text>
                </View>


                {/* DSach các Khóa học của Author */}
                </View>
                <View className="my-6 mx-4 space-y-2 items-start" >
                <Text className="text-white text-lg font-bold ">Các Khóa học của tác giả</Text>
                <CourseList  hideSeeAll={true} data={personCourses} />
                </View>
            </View>
            )
        }
            
           
            
        </ScrollView>
    )
}