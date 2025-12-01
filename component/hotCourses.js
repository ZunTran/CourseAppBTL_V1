import React from 'react'
import {View, Text, Touchable, TouchableWithoutFeedback} from 'react-native'



var {width,height}=Demension.get('window');
export default function HotCourses()
{
    return(
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5  ">
                Hot Courses
            </Text>
            <Carousel 
            data={data}
            renderItem={({item})=><HotCourses item={item}/>}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            slideWidth={600}
            itemWidth={400}
            slideStyle={{display:'flex', alignItems:"center"}}
            />

        </View>
    )
}

const CoursesCard=({item})=>{
    return (
        <TouchableWithoutFeedback>
            <Text className='text-white'>
                Course
            </Text>
        </TouchableWithoutFeedback>
    )
}