import React, { Component, useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView ,
    Dimensions,
    ScrollView
} from 'react-native';
import Video from 'react-native-video';


const Detail = ({route, navigation}) => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData(route.params.data)
  }, []);

  const Title = ({name}) => {
    return (
      <View> 
        <TouchableOpacity 
          style={{
            backgroundColor: '#003468', 
            paddingHorizontal: 20,
            paddingVertical: 45,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            borderRadius: 10,
            
          }}>
        <Text style={{color:'#FFFFFF', fontSize: 36, fontWeight: 'bold', textAlign:'center'}}>{name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const GambarGajahMungkur = ({url}) => {
    return <View>
      <Image 
        style={{
          width:  Dimensions.get('window').width-30,
          height: 200,
          resizeMode: 'cover',
          borderRadius: 10,
          marginLeft: 5,
          marginTop: 5,
          marginRight: 5
        }}
      source={{uri: url}}/>
    </View>
  }

  const VideoPlayer = ({url}) => {
    return <View>
      <Video 
        repeat={true}
        style={{
          width: Dimensions.get('window').width-30,
          height: 200,
          resizeMode: 'cover',
          borderRadius: 10
        }}
        source={{uri: url}}/>
    </View>
  }

    return(
        <View style={{marginHorizontal:10}}>
          <SafeAreaView>
            <ScrollView>
              <Text style={{fontFamily:'Opens Sans', fontSize:36, color:'#003468'}}>
                          Trip It
              </Text>
              <Text style ={{fontWeight: 'bold',marginTop:5, fontSize: 16}}>
                  Object Near You
              </Text>
              <Title name={data.title} />
                <ScrollView horizontal={true}>
                  <GambarGajahMungkur url={data.image_name}/>
                  <VideoPlayer url={data.video}/>
                </ScrollView>
              <Text style ={{fontSize :16, fontWeight :'bold'}}>
                  About this object : 
              </Text>
              <Text>
                  {data.description}
              </Text>
              
            </ScrollView>
          </SafeAreaView>
        </View>
    )
}



export default Detail;