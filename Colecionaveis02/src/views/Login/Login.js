import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <ImageBackground source={require('../../../assets/imagens/melancia.jpg')} style={estiloLogin.fundo}>

             <View style={estiloLogin.logoContainer}>
                  <LinearGradient colors={['#DDA0DD', '#DA70D6', '#C71585']} style={estiloLogin.logo}> 
                     <MaterialCommunityIcons name="flower-tulip" size={50} color="white" />
                  </LinearGradient>
             </View>

             <View style={estiloLogin.campoContainer}> 
                 <MaterialCommunityIcons name="account" size={26} color="#C71585" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
             </View>

             <View style={estiloLogin.campoContainer}>
                <MaterialIcons name="vpn-key" size={26} color="#C71585" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />
              </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#DDA0DD', '#DA70D6', '#C71585']} style={estiloLogin.botaoLinearGradient}> 
                        <MaterialIcons name="send" size={24} color="white" />
                        <Text style={estiloLogin.botaoTexto}>
                            Entrar
                        </Text>
                     </LinearGradient>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Login;
