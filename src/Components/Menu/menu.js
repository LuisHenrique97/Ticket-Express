import React from "react";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import { ButtomMenu } from "./stylesMenu";

export default function Menu(){

    const navigation = useNavigation()

    return(
        <ButtomMenu onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={40} color="#fff"/>
        </ButtomMenu>
        
    )
}