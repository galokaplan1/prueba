import React from 'react';
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import JuegosListItem from '../components/JuegosListItem';
import {getjuegos} from '../services/endPoints';
  
const Juegos =({navigation})=>{

  const [juegos, setjuegos] = useState([]);

  useEffect(() => {
    getjuegos().then((response)=>{
                setjuegos(response)
                console.log("entro")
                console.log(juegos)
            })
            .catch((e) => {
                console.log("no entro")
                console.log(e)
                Alert.alert("Error")
                });
  }, [])
  
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

  
  export default Juegos;
  
  const styles = StyleSheet.create({
    logo: {
      width: '70%',
      height: '25%',
      position: 'absolute',
      top: '20%',
      left:'15%'
  },
    image: {
      height:'100%',
      alignItems: 'center',
    },
    titulo: {
      position: 'absolute',
      top: '45%',
      color: 'black',
      fontSize: 20
    },
    fondo: {
      backgroundColor : "#7fffd4",

    }
  });