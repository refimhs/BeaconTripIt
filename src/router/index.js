import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BeaconPage, Detail, Splash } from "../pages";
import Home from "../pages/Home";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="BeaconPage" component={BeaconPage} />
        </Stack.Navigator>
    )
}

export default Router;
