import React, { useState, useRef } from "react";
import { ScrollView, Text, View, Modal, TouchableWithoutFeedback } from 'react-native'

import { Container, Header, HeaderButtom, Banner, EventName, 
    Descripion, ViewBanner, ViewDescripition, TextDescription, 
    ViewText, BoxIcon, Button, TextButton, ViewOrg, TextOrg,
    TextButtonOrg, ButtonOrg, ViewModal, ViewContainer, 
    HeaderModal, TextHeader, BannerModal, ModalDescription, DescriptionText } from "./stylesEventos";
import { Feather } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { Modalize } from "react-native-modalize";

export default function Eventos({route}){

    const [key, setKey] = useState(route.params.key)
    const [evento, setEvento] = useState(route.params.evento)
    const [banner, setBanner] = useState(route.params.banner)
    const [data, setData] = useState(route.params.data)
    const [hora, setHora] = useState(route.params.hora)
    const [local, setLocal] = useState(route.params.local)
    const [valor, setValor] = useState(route.params.valor)

    const [ModalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation()
    const modalizeRef = useRef(null)

    function onOpen(){
        modalizeRef.current?.open()
    }

    return(
        <Container>
    
            <Header>
                <HeaderButtom activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color='#fff'/>
                </HeaderButtom>
            </Header>

            <ViewBanner>
                <Banner source={banner}/>
            </ViewBanner>
            

            <EventName>{evento}</EventName>

            <ViewDescripition>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Descripion>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Descripion>
                </ScrollView>
            </ViewDescripition>
            
            <ViewText>
                <BoxIcon>
                    <Feather name="calendar" size={22} color='#003459'/>
                </BoxIcon>

                <TextDescription>{data}</TextDescription>
            </ViewText>

            <ViewText>
                <BoxIcon>
                    <Feather name="clock" size={22} color='#003459'/>
                </BoxIcon>

                <TextDescription>{hora}</TextDescription>
            </ViewText>

            <ViewText>
                <BoxIcon>
                    <Feather name="map-pin" size={22} color='#003459'/>
                </BoxIcon>

                <TextDescription>{local}</TextDescription>
            </ViewText>

            <ViewText>
                <BoxIcon>
                    <Feather name="dollar-sign" size={22} color='#003459'/>
                </BoxIcon>

                <TextDescription>{valor}</TextDescription>
            </ViewText>

            <ViewOrg>
                <TextOrg>Evento organizado por</TextOrg>
                <ButtonOrg onPress={onOpen}>
                    <TextButtonOrg>MBLABS</TextButtonOrg>
                </ButtonOrg>
            </ViewOrg>

            <Button>
                <TextButton>QUERO IR</TextButton>
            </Button>
            
           <Modalize ref={modalizeRef} snapPoint={405} modalHeight={405}>
           <ViewContainer>
                    <ViewModal>
                        <HeaderModal>
                            <BannerModal source={banner}/>
                            <TextHeader>MBLABS</TextHeader>
                        </HeaderModal>
                        
                        <ModalDescription>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <DescriptionText>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged.
                                </DescriptionText>
                            </ScrollView>
                        </ModalDescription>
                    </ViewModal>
                </ViewContainer>
           </Modalize>
                    
            
        </Container>
    )
}