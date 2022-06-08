import React, { Component, useEffect, useState } from "react";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    DeviceEventEmitter,
    NativeEventEmitter,
    PermissionsAndroid
} from 'react-native';
import { Button } from "react-native";
import Kontakt, {KontaktModule} from 'react-native-kontaktio';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/database';
import Video from 'react-native-video';


const BeaconPage = ({navigation}) => {
  const {connect, init, startDiscovery, startScanning} = Kontakt;
  const kontaktEmitter = new NativeEventEmitter(KontaktModule);
  const [dataBeacons, setDataBeacons] = useState([]);
  const [dataRegion, setDataRegion] = useState(null);

  useEffect(() => {
    beaconSetup()
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This example app needs to access your location in order to use bluetooth beacons.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        // permission denied
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  
  const beaconSetup = async () => {
    const reference = firebase.app().database('https://beacontripit-default-rtdb.asia-southeast1.firebasedatabase.app').ref('/TripIt'); 
    let firebaseData = {}; 
    reference.once('value').then(snapshot => {
      firebaseData = snapshot.val();
    });
    
    const granted = await requestLocationPermission();
      if (granted) {
        await connect();
        await startScanning();
      } else {
        Alert.alert(
          'Permission error',
          'Bluetooth permission not granted. Cannot scan for beacons',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }

    // Add beacon listener
    DeviceEventEmitter.addListener('beaconsDidUpdate', ({beacons, region}) => {
      beacons.map((beacon,idx) => {
        const firebaseId = beacon.uuid.toUpperCase() + '-' + beacon.minor;
        beacon['title'] = firebaseData[firebaseId]?.title;
        beacon['image_name'] = firebaseData[firebaseId]?.image;
        beacon['description'] = firebaseData[firebaseId]?.description;
        beacon['video'] = firebaseData[firebaseId]?.video;
      })
      setDataBeacons(beacons)
    });
  };
  
  const Select1 = ({navigation, data}) => {
      return (
        <View> 
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', {data})}  
            style={{
              backgroundColor: '#003468', 
              paddingHorizontal: 20,
              paddingVertical: 45,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              borderRadius: 10,
              
            }}>
          <Text style={{color:'#FFFFFF', fontSize: 36, fontWeight: 'bold', textAlign:'center'}}>{data.title}</Text>
          <Text style={{color:'#FFFFFF', fontSize: 14, fontWeight: 'bold', textAlign:'center'}}>{data.minor}</Text>
          <Text style={{color:'#FFFFFF', fontSize: 14, fontWeight: 'bold', textAlign:'center'}}>{data.uuid}</Text>
          </TouchableOpacity>
        </View>
      )
    }

        return (
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
              <View style={{marginLeft: 5}}>
                <Text style={{fontFamily:'Opens Sans', fontSize:36, color:'#003468'}}>
                    Trip It
                </Text>
                <Text style ={{fontWeight: 'bold',marginTop:5, fontSize: 16}}>
                    Object Near You
                </Text>
                <Text>
                    Scanning beacon...
                </Text>
                {
                  dataBeacons.length > 0 && dataBeacons.map((data, idx) => {
                    return (
                      <View key={idx}>
                        <Select1 navigation={navigation} data={data}/>
                      </View>
                    )
                  })
                }
            </View>
          </ScrollView>
        )
}



export default BeaconPage;