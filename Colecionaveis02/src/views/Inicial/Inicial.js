import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
             
             <ImageBackground source={require('../../../assets/imagens/gira.jpg')} style={estiloInicial.fundo}>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                   <ImageBackground source={require('../../../assets/imagens/colecao.jpg')} style={estiloInicial.botaoBackground}>
                        <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                    <ImageBackground source={require('../../../assets/imagens/item.jpg')} style={estiloInicial.botaoBackground}>
                        <Text style={estiloInicial.botaoTexto}>Item</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Inicial;
