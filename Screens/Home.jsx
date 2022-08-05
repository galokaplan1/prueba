import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';

const Home =({navigation})=>{
  
    navigation = useNavigation();
    return (
      
      <View style={styles.fondo} >
        <View style={styles.margen}>
        <Boton
            text = 'Juegos'
            onPress={ () =>{
                navigation.navigate('Juegos')
              }}
        />
        <Boton
            text = 'Cuentos'
            onPress={ () =>{
                navigation.navigate('Cuentos')
              }}
        />
        <Boton
            text = 'Preguntas'
            onPress={ () =>{
                navigation.navigate('Preguntas')
              }}
        />
        <Boton
            text = 'Documentacion'
            onPress={ () =>{
                navigation.navigate('Documentacion')
              }}
        />
        <Boton
            text = 'Grupos Privados'
            onPress={ () =>{
                navigation.navigate('GruposPrivados')
              }}
        />
        </View>
      </View>
      
    );
  }
  
  export default Home
  
  const styles = StyleSheet.create({
    logo: {
      width: '300px',
      height: '300px',
      position: 'absolute',
      borderRadius:'100',
      top: '700%',
      left:'30%'
  },
    image: {
      height:'100%',
      alignItems: 'center',
    },
    titulo: {
      position: 'absolute',
      top: '45%',
      color: 'blue',
      fontSize: 20
    },
    boton: {
        top: '200%',
        left:'20%',
        backgroundColor: "#blue",
        padding: 10
    },
    fondo: {
      backgroundColor : "#7fffd4",
      flex: 1,
    },
    margen:{
        marginTop: '25%'
    }
  });