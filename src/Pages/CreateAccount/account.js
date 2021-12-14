import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
    KeyboardAvoidingView, Platform } from "react-native";
import { Container, ViewLogo, Logo, ViewInput, BoxIcon, InputText,
    ButtonCreate, TextButton, Buttons
} from "./stylesAccount";

import { Feather } from '@expo/vector-icons'
import StatusBarPage from "../../Components/StatusBarPage/statusBar";

export default function Account(){
    return(
        <Container>

            <StatusBarPage
                barStyle="light-content"
                backgroundColor='#007EA7'
            />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    
                >
                    <ViewLogo>
                        <Logo source={require('../../assets/Ticket2.png')} resizeMode="contain"/>
                    </ViewLogo>

                    <ViewInput>
                        <BoxIcon>
                            <Feather name="user" size={22} color='#003459'/>
                        </BoxIcon>

                        <InputText placeholder="Nome"/>
                    </ViewInput>

                    <ViewInput>
                        <BoxIcon>
                            <Feather name="mail" size={22} color='#003459'/>
                        </BoxIcon>

                        <InputText placeholder="Email"/>
                    </ViewInput>

                    <ViewInput>
                        <BoxIcon>
                            <Feather name="lock" size={22} color='#003459'/>
                        </BoxIcon>

                        <InputText placeholder="Senha" secureTextEntry={true}/>
                    </ViewInput>

                    <ViewInput>
                        <BoxIcon>
                            <Feather name="lock" size={22} color='#003459'/>
                        </BoxIcon>

                        <InputText placeholder="Confirmar Senha" secureTextEntry={true}/>
                    </ViewInput>

                    <ButtonCreate>
                        <TextButton>CRIAR CONTA</TextButton>
                    </ButtonCreate>

                    <TouchableOpacity>
                        <Buttons>Criar conta como empresa</Buttons>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    )
}