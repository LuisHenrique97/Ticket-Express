import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons'

import StatusBarPage from "../../Components/StatusBarPage/statusBar";
import { Container, Header, ViewLogo, TextName, Logo,
    ViewButtons, Buttons, TextButtons, ButtonOut, TextButtonOut
} from "./stylesProfile";

export default function Profile(){
    return(
        <Container>
            <StatusBarPage
                barStyle="dark-content"
                backgroundColor='#fff'
            />
            <Header>
                <ViewLogo>
                    <Logo source={require('../../assets/Ticket.png')} resizeMode="contain"/>
                </ViewLogo>

                <TextName>Luis Henrique</TextName>
            </Header>

            <ViewButtons>
                
                <Buttons>
                    <TextButtons>Meus Eventos</TextButtons>
                    <Feather name="chevron-right" size={22} color='#003459'/>
                </Buttons>

                <Buttons>
                    <TextButtons>Configurações</TextButtons>
                    <Feather name="chevron-right" size={22} color='#003459'/>
                </Buttons>

                <Buttons>
                    <TextButtons>Sobre</TextButtons>
                    <Feather name="chevron-right" size={22} color='#003459'/>
                </Buttons>

                <ButtonOut>
                    <TextButtonOut>Sair</TextButtonOut>
                    <Feather name="power" size={22} color='#003459'/>
                </ButtonOut>
            </ViewButtons>
        </Container>
    )
}