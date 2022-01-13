import React, {useState} from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Menu from '../../Components/Menu/menu'
import Lista from '../../Components/Lista/lista'
import StatusBarPage from '../../Components/StatusBarPage/statusBar'

import { Container, Texto, ViewLogo, Logo, TextHome, BoxIcon, InputText, ViewInputSearch } from './stylesHome'

export default function Home(){

  const [ lista, setList] = useState([
    {
      id: 1, nome: 'O Pior Ano', data: '10/12/2021', 
      hora: '21:30', local: 'YouTube', valor: '150,00',
      imagem: require('../../assets/Ticket.png')
    },
    {
      id: 2, nome: 'Saia do Caixão', data: '10/12/2021',
      hora: '21:30', local: 'Allianz Park', valor: '250,00',
      imagem: require('../../assets/Ticket.png')
    },
    {
      id: 3, nome: 'Metodo IP', data: '10/12/2021',
      hora: '21:30', local: 'Plataforma Internacional', valor: '350,00',
      imagem: require('../../assets/Ticket.png')
    },
    {
      id: 4, nome: 'A Triade', data: '10/12/2021',
      hora: '21:30', local: 'Maracanã', valor: '450,00',
      imagem: require('../../assets/Ticket.png')
    },
    {
      id: 5, nome: 'Clube 459', data: '10/12/2021',
      hora: '21:30', local: 'Instagram', valor: '550,00',
      imagem: require('../../assets/Ticket.png')
    },
    {
      id: 6, nome: 'A Triade', data: '10/12/2021',
      hora: '21:30', local: 'Chevrolet Hall', valor: '650,00',
      imagem: require('../../assets/Ticket.png')
    }
  ])

  return(
    <Container>

      <StatusBarPage
        barStyle="light-content"
        backgroundColor='#003459'
      />

      <Menu/>

      <ViewLogo>
        <Logo source={require('../../assets/TicketLogo.png')} resizeMode="contain"/>
      </ViewLogo>

      <ViewInputSearch>
        <BoxIcon>
          <Feather name="search" size={22} color='#fff'/>
        </BoxIcon>

        <InputText placeholder="Qual evento você procura ?"/>
      </ViewInputSearch>

      <TextHome>Destaques</TextHome>

      <TextHome>Luis Henrique</TextHome>

      <View>
        <FlatList 
          data={lista}
          horizontal
          renderItem={({item}) => <Lista data={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TextHome>Novos Eventos</TextHome>
      <TextHome>Novos Pessoas</TextHome>
      <TextHome>Novos Ideias</TextHome>

      <View>
        <FlatList 
          data={lista}
          horizontal
          renderItem={({item}) => <Lista data={item}/>}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  )
}