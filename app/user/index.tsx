
import { endpoints } from '@/API';
import React, { useEffect, useState } from 'react';
import {View, Image, FlatList, ActivityIndicator, StyleSheet,Text} from 'react-native';
import API from '@/API';

export default function UserIndexPage() {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [images, setImages] = useState([]);
    useEffect(() => {
        const loadCourses=async()=>{
           try {
                 let res=await API.get(endpoints['courses']);
               
                setCourses(res.data.results);
            } catch (ex) {
                console.error(ex);
            }
            finally {
            setLoading(false);
      }
        }

        loadCourses();


    }, []);

  return (
      <View style={{flex:1}}>
        <Text className="text-yellow-300 text-3xl font-bold" >USER INDEX PAGE</Text>
            {courses===null?<ActivityIndicator/>:<>
                {courses.map(c=>(
                    <View key={c.id} style={styles.titlebox}>
                         {c.image && (
                    <Image
                    source={{ uri: c.image }}
                    style={styles.productImage}
                    resizeMode="cover"
                    />
      )}
                    <Text style={styles.title}>{c.subject}</Text>
                    </View>
            
            ))}</>}
      </View>
  );
}

const styles = StyleSheet.create({

    titlebox:{
        flexDirection: 'row',
        fontSize:20,
        margin:10,
    },
    productImage: {
    flexDirection: 'row',
    width: 100,
    height:100,
    borderRadius: 10,
    marginRight: 15,
  },
  title:{
    fontSize:15,
    fontWeight:'bold',
    color:'#0d0060ff',
  }
});