import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Boton from "../components/Boton";
import { useNavigation } from '@react-navigation/native';

const GruposPrivados =({navigation})=>{
  
    navigation = useNavigation();
    return (
      
      <View>
        
        
        <Text style={styles.titulo}>REllenANDO</Text>
        
        <Boton
        text="Grupos Privados" 
        onPress={ () =>{
          navigation.navigate('')
        }}
        />
       
     
        
      </View>
      
    );
  }
  
  export default GruposPrivados
  
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
      color: 'blue',
      fontSize: 20
    },
  });