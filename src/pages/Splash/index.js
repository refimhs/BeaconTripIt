import React, { useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Home')
        }, 3000)
    })
    return (
        <View>
            {/* <Logo /> */}
            <Image 
            source={require('../../img/splash.png')} 
            style={{ 
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height 
            }}/>
        </View>
    )
}




const Logo = () => {
    return(
        <Image 
        style={{height:100, width: 100}}
        source={require('../../img/logo.png')}
        />
    )
}

export default Splash;
