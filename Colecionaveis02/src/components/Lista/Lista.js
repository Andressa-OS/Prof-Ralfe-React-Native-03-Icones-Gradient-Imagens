import React, {useState} from 'react';
import {Text, View} from 'react-native';
import estiloLista from './estiloLista';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>
            <Text>  {item.titulo} </Text>
            <Image source={item.foto} style={estiloLista.itemFoto} />
        </View>
    );
}

export default Lista; 