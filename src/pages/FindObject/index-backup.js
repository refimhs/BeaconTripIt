import React, { Component, useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView ,
    Dimensions,
    ScrollView,
    StyleSheet
} from 'react-native';
import Video from 'react-native-video';
import MapView, {Marker} from "react-native-maps";
import { firebase } from '@react-native-firebase/database';

const FindObject = ({navigation}) => {
  const [isMapReady, setIsMapReady] = useState(false);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    beaconMap()
  }, []);

  const beaconMap = () => {
    const reference = firebase.app().database('https://beacontripit-default-rtdb.asia-southeast1.firebasedatabase.app').ref('/TripIt');
    reference.once('value').then(snapshot => {
      console.log(snapshot.val())
      setMarkers(snapshot.val());
    });
  }
  
  const onMapLayout = () => {
    setIsMapReady(true);
  }

      return(
        <ScrollView contentContainerStyle={styles.outer}>
          <Text style={{fontFamily:'Opens Sans', fontSize:36, color:'#003468'}}>{markers.length}</Text>
          <Text style ={{fontWeight: 'bold',marginTop:5, fontSize: 16}}>Find Object</Text>
          {/* <MapView 
            style={{ 
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,}} region={{
              latitude:-7.1532022,
              longitude:112.6559281,
              latitudeDelta:0.002,
              longitudeDelta:0.002
            }} 
            onLayout={onMapLayout} provider='google'
            mapType='terrain'
            showsScale
            showsCompass
            showsPointsOfInterest
            showsBuildings
            showsUserLocation={true}
          >
            { isMapReady && Object.keys(markers).length > 0 && markers.map((marker, index) => {
               return (
                <MapView.Marker
                key={index}
                title={marker.title}
                coordinate={marker.coordinates} />
               )
              })}
          </MapView> */}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  wrapper:{
    ...StyleSheet.absoluteFillObject
  },
  map:{
    ...StyleSheet.absoluteFillObject
  },
  outer: {
    flex: 1,
  },
})

export default FindObject;