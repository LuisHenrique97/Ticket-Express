import React, { useState } from 'react'

import { Container, ViewBox, ViewInfo, Logo, ViewText, ViewLogo,
    Title, Subtitle, Price, TextOrg, ButtonCheck, TextButton, ViewPicker
} from './stylesCheckout'

import StatusBarPage from '../../Components/StatusBarPage/statusBar'
import Picker from '../../Components/Picker/index.android'
import { View } from 'react-native'

export default function Checkout({route}){

    const [evento, setEvento] = useState(route.params.evento)
    const [local, setLocal] = useState(route.params.local)
    const [data, setData] = useState(route.params.data)
    const [hora, setHora] = useState(route.params.hora)
    const [valor, setValor] = useState(route.params.valor)

    const [tipo, setTipo] = useState(null)

    return(
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor='#007EA7'
            />

            <ViewBox>
                <ViewInfo>
                    <ViewLogo>
                        <Logo source={require('../../assets/Ticket.png')} resizeMode="contain"/>
                    </ViewLogo>
                    
                    <ViewText>
                        <Title>{evento}</Title>
                        <Subtitle>{local}</Subtitle>
                        <Subtitle>{data}</Subtitle>
                        <Subtitle>{hora}</Subtitle>
                        <Price>R${valor}</Price>
                    </ViewText>
                </ViewInfo>

                <TextOrg>Evento Organizado por MBLABS</TextOrg>
            </ViewBox>

            <ViewPicker> 
                <Picker onChange={setTipo} tipo={tipo}/>
            </ViewPicker>
            
            <ButtonCheck>
                <TextButton>COMPRAR TICKET</TextButton>
            </ButtonCheck>

        </Container>
    )
}