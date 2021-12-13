import React from 'react'
import { TouchableOpacity, TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container, ViewLogo, Logo, ViewInputEmail, BoxIcon, InputText, 
  ViewInputSenha, ButtonLogin, TextButton, ResetPassword, TextReset, Buttons } from './stylesLogin'
import StatusBarPage from '../Components/StatusBarPage/statusBar'

export default function Login(){
  return(
    
  <Container>
    <StatusBarPage
      barStyle="dark-content"
      backgroundColor='#fff'
    />

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView  
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
          <ViewLogo>
            <Logo source={require('../assets/Ticket.png')} resizeMode="contain"/>
          </ViewLogo>

          <ViewInputEmail>
            <BoxIcon>
              <Feather name="user" size={22} color='#003459'/>
            </BoxIcon>

            <InputText placeholder="Email"/>
          </ViewInputEmail>

          <ViewInputSenha>
            <BoxIcon>
              <Feather name="lock" size={22} color='#003459'/>
            </BoxIcon>

            <InputText placeholder="Senha"/>
          </ViewInputSenha>

          <ResetPassword>
            <TextReset>Esqueci minha senha</TextReset>
          </ResetPassword>

          <ButtonLogin>
            <TextButton>LOGIN</TextButton>
          </ButtonLogin>

          <TouchableOpacity>
            <Buttons>Fazer login como empresa</Buttons>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Buttons>Criar conta</Buttons>
          </TouchableOpacity>
        
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  </Container>
   
    
      
    
  )
}