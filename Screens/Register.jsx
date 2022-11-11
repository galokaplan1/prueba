import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Picker, ImageBackground} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import Boton from "../components/Boton";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Boton2 from '../components/Boton2';
import Boton4 from '../components/Boton4';
import CustomLogo from '../components/CustomLogo';


const Register =({navigation})=>{
  
    navigation = useNavigation();
    const [Usuario, setUsuario] = useState({
      email: '',
      contraseña: '',
      
  });  


  const register = async (Usuario) => {
      axios
          .post("http://localhost:5000/usuario/register",{
            email : Usuario.email,
            contraseña : Usuario.contraseña,
          })
          .then((response) => {
            console.log(response.data)
          });
  }



  const Registrar = async () => {
    if (!Usuario.email || !Usuario.contraseña ) {
      console.log("Llenar todos los datos");
    } else {
          await register(Usuario).then(() => {
          navigation.navigate('Login');  
        });
    }
  }
  

    return (
      <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="strech"  style={styles.image} >
      <View style = {styles.fondo}>
            <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Home')}/>
            <Text>Crear Usuario</Text>
            
            <TextInput style={styles.input} placeholder="Email" value={Usuario.email} onChangeText={text => setUsuario({ ...Usuario, email: text })}/>
            <TextInput style={styles.input} placeholder="Contraseña" value={Usuario.contraseña} onChangeText={text => setUsuario({ ...Usuario, contraseña: text })}/>

        
            
             <Boton4  text={'Crear Cuenta'} onPress={Registrar}/> 
            
             </View>
        </View>
      </ImageBackground>
    );
  }
  
  export default Register
  
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    fondo: {
      
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 5, //lo curva del borde
      paddingHorizontal: 10,
      marginVertical: 5,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10
    },
    image:{
      height: '100%',
      width:'100%'  
    }
  });