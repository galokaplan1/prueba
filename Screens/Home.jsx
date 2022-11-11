import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import CustomLogo from '../components/CustomLogo';
import PreguntaLogo from '../components/PreguntaLogo';

const Home =({navigation})=>{
  
    navigation = useNavigation();
    return (
  
    <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="cover"  style={styles.image} >
 
      <View >
        <View style={styles.margen}>
        
        

        <CustomLogo onPress={() => navigation.navigate('Home')}/>
        
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
            text = 'Agregar'
            onPress={ () =>{
                navigation.navigate('Agregar')
              }}
        />
        
        <PreguntaLogo/>

        </View>
      </View>
      </ImageBackground>

      
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
      //flex: 1
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
    
    margen:{
        marginTop: '10%'
    }
  });