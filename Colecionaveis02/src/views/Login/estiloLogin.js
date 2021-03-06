import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
   container: {   
      flex: 1,
   },
   fundo: {   
      justifyContent: 'center',
      width: '100%',
      height: '100%',
   },
   logoContainer: {
      alignItems:'center',
      marginBottom: 30,
   },
   logo: {
      width: 90,
      height: 90,
      borderRadius: 50,
      justifyContent: 'center',
      padding: 20,
   },
   campoContainer: {
       flexDirection: 'row',
       padding: 10,
       paddingLeft: 50,
       paddingRight: 50,
       margin: 10,
       borderRadius: 5,
       alignItems: 'center',
   },
   campo: {
      fontSize: 18,
      color: "#C71585",
      marginLeft: 15,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderColor: '#C71585',
    },
   botaoLinearGradient: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 8,
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      paddingLeft: 15,
      backgroundColor: 'transparent',
   },
});

  export default estiloLogin;