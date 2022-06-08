import {
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    LogBox 
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

  import React from "react";
  
  const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  };
  
  const Home = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
      <SafeAreaView style={backgroundStyle}>
        <View style={{marginTop: 20}}>
          <Text 
            style={{fontFamily:'Opens Sans', fontSize:36, marginLeft: 5, color:'#003468'}}
          >Trip It</Text>
          <View>
            <Photo_Home/>
          </View>
          <View>
            <Button_Scan navigation={navigation}/>
          </View>
          <View>
            <Text style={{textAlign: 'center', marginLeft: 5}}>Jl Nyai Ageng Arem Arem, Gresik</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold', marginLeft: 5, fontSize: 16}}>About this place :</Text>
          </View>
          <View style={{marginLeft: 5}}>
            <Text>
              Kampung kemasan terdapat bangunan-bangunan
              kuno yang berumur ratusan tahun. Rumah-rumah
              tersebut memiliki arsitektur unik. Representasi silang
              kedua bangsa yang berbeda terlihat pada bangunan-
              bangunan kuno pada kampung kemasan. Bentuk dan
              motif bangungan di kampung kemasan mendapat 
              sentuhan pengaruh baik budaya Cina dan Eropa
              maupun lokal.</Text>
          </View>
          <View>
            <Find_Object navigation={navigation}/>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const Button_Scan = ({navigation}) => {
    return (
      <View> 
        <TouchableOpacity 
          onPress={() => navigation.navigate('BeaconPage')}  
          style={{
            backgroundColor: '#003468', 
            paddingTop: 20,
            paddingBottom: 10,
            paddingHorizontal: 20,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            borderRadius: 10,
            justifyContent: 'center'
          }}>
        <Text style={{color:'#FFFFFF', fontSize: 16, textAlign:'center'}}>You are in :</Text>
        <Text style={{color:'#FFFFFF', fontSize: 24, fontWeight: 'bold', textAlign:'center'}}>Kampung Kemasan</Text>
        <Text style={{color:'#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign:'center'}}>Gresik</Text>
        <Text style={{color:'#FFFFFF', fontSize: 14, textAlign:'right'}}>Scan Beacon</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  const Find_Object = ({navigation}) => {
    return (
      <View> 
        <TouchableOpacity 
          onPress={() => navigation.navigate('FindObject')}  
          style={{
            backgroundColor: '#D2E9FF', 
            paddingTop: 20,
            paddingBottom: 10,
            paddingHorizontal: 20,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            borderRadius: 10,
            justifyContent: 'center'
          }}>
        <Text style={{color:'#003468', fontSize: 16, textAlign:'center'}}>Find Object</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  const Photo_Home = () => {
    return <View>
      <Image 
        style={{
          width: 400,
          height: 200,
          resizeMode: 'cover',
          borderRadius: 10,
          marginLeft: 5,
          marginTop: 5,
          marginRight: 5
        }}
      source={require('../../img/kawasankemasan.jpg')}/>
    </View>
  }
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  


  export default Home;