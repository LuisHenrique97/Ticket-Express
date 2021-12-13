import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Container, ViewEvent, TextName, TextPlace, TextDate, Banner, ViewBanner } from './stylesLista'

import { useNavigation } from '@react-navigation/native'


export default function Lista({data}){

    const navigation = useNavigation()

    return(
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Evento', 
                {key: data.id, evento: data.nome, banner: data.imagem, data: data.data,
                    hora: data.hora, local: data.local, valor: data.valor})}
            >
                <Banner source={data.imagem}/>
            </TouchableOpacity>
            
            <ViewEvent onPress={() => alert('Clicou no nome')}>
                <TextName>{data.nome}</TextName>
                <TextPlace>{data.local}</TextPlace>
                <TextDate>{data.data}</TextDate>
            </ViewEvent>
        </Container>
    )
}