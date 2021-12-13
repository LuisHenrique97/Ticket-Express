import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Container, ViewEvent, TextName, TextPlace, TextDate, Banner, ViewBanner } from './stylesLista'

export default function Lista({data}){
    return(
        <Container>
            <TouchableOpacity>
                <Banner source={data.imagem}/>
            </TouchableOpacity>
            
            <ViewEvent>
                <TextName>{data.nome}</TextName>
                <TextPlace>{data.local}</TextPlace>
                <TextDate>{data.data}</TextDate>
            </ViewEvent>
        </Container>
    )
}