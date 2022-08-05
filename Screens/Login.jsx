import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Boton from "../components/Boton";
import { useNavigation } from '@react-navigation/native';

const Login =({navigation})=>{
  
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
  
  export default Login