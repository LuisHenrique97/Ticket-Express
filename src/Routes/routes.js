import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "../Home/home";
import Login from "../Login/login";

const Drawer = createDrawerNavigator()

export default function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" component={Home}
                options={{
                    headerShown: false
                }}    
            />
            <Drawer.Screen 
                name="Login" component={Login}
                options={{
                    headerShown: false
                }}     
            />
        </Drawer.Navigator>
    )
}