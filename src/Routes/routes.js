import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import Login from '../Pages/Login/login'
import Stackroutes from './Stackroutes'
import Profile from "../Pages/Profile/profile";

const Drawer = createDrawerNavigator()

export default function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: '#003459',
                drawerActiveTintColor: '#fff',
                drawerItemStyle:{
                    marginTop: 16,
                    marginBottom: 0,
                },
                drawerLabelStyle:{
                    fontSize: 17,
                    marginLeft: -20
                },
                drawerStyle: {
                    marginRight: '-15%'
                }
            }}
        >

            <Drawer.Screen 
                name="Perfil" component={Profile}
                options={{
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons 
                            name={focused ? 'person' : 'person-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false
                }}    
            />


            <Drawer.Screen 
                name="Eventos" component={Stackroutes}
                options={{
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false
                }}    
            />

            <Drawer.Screen 
                name="Login" component={Login}
                options={{
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons 
                            name={focused ? 'power' : 'power-outline'}
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false
                }}     
            />
        </Drawer.Navigator>
    )
}