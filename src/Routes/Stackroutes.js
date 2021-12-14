import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home/home";
import Eventos from '../Pages/Eventos/eventos';
import Account from "../Pages/CreateAccount/account";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen name='Evento' component={Eventos}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen name='Conta' component={Account}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}