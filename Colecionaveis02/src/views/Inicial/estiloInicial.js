import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   fundo: {   
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '100%',
   },
   botaoBackground: {
      width: 140,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#FFFF00',
   },
   botaoTexto: {
      fontSize: 20,
      color: '#FFFF00',
   },
});

  export default estiloInicial;