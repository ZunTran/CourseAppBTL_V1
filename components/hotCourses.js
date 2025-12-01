import React from 'react'
import {View, Text, Touchable, TouchableWithoutFeedback, Dimensions,Image} from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


var {width,height}=Dimensions.get('window');



try {
  const img = require('../assets/images/reacttutorials.png');
  console.log('require ok', img);
} catch (e) {
  console.error('require error', e);
}

 

export default function HotCourses({data})
{   
    const navigation=useNavigation();



    const handleClick=(item)=>
    {
        navigation.navigate('Course',item);
    }
    return(
        <View className="mb-8"
        >
            <Text className="text-white text-xl mx-4 mb-5  ">
                <MaterialCommunityIcons name="fire" size={24} color="#00C8FF" />
                Hot Courses 
                
            </Text>
            <Carousel 
            width={400}
            height={400}
            data={data}
            renderItem={({item})=><CoursesCard item={item} handleClick={handleClick} />}
            mode="parallax"
            modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
            }}
            />

        </View>
    )
}

const CoursesCard=({item,handleClick})=>{
    return (
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <Image source={require('../assets/images/reacttutorials.png')}
                style={{ 
                    width: width*0.9, 
                    height: height*0.4, 
                    borderRadius: 35
                }}
                resizeMode="cover"
            className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}