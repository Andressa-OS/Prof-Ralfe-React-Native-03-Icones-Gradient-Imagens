import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';

function Colecao({ navigation, route }) {

    const [colecao, setColecao] = useState ( [
        {
            id: '1',
            titulo: 'A Seleção',
            descricao: 'Muitas garotas sonham em ser princesas, mas este não é o caso de America Singer. Ela topa se inscrever na Seleção só para agradar a mãe, certa de que não será sorteada para participar da competição em que o príncipe escolherá sua futura esposa.',
            anoPublicacao: '2012',
            foto: require('../../../assets/itens/1.jpg'),
        },
        {
            id: '2',
            titulo: 'A Elite',
            descricao: 'A vida no palácio não era tão ruim quanto America imaginava. Ou melhor: com todos os mimos e privilégios que estava tendo, ela já mal se lembrava de como era pertencer à casta Cinco. ',
            anoPublicacao: '2013',
            foto: require('../../../assets/itens/2.png'),
        },
        {
            id: '3',
            titulo: 'A Escolha',
            descricao: 'Agora, para conseguir o que deseja, America precisa cortar os laços com Aspen, conquistar o povo de Illéa e conseguir novos aliados políticos. Mas tudo pode sair do controle quando ela começa a questionar o sistema de castas e a estratégia usada para lidar com os ataques rebeldes.',
            anoPublicacao: '2014',
            foto: require('../../../assets/itens/3.jpg'),
        },
        {
            id: '4',
            titulo: 'A Coroa',
            descricao: 'Vinte anos se passaram desde que America Singer e o príncipe Maxon se apaixonaram, e a filha do casal é a primeira princesa a passar por sua própria Seleção. Ela não acreditava que encontraria, tal como seus pais, um amor verdadeiro durante o concurso.',
            anoPublicacao: '2016',
            foto: require('../../../assets/itens/4.jpg'),
        },
                                           ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
             <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={colecao}
            renderItem={ ({item}) => <Lista data={item} />}
    />
        </View>
    )
}

export default Colecao;
