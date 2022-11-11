import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Picker, ImageBackground} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import Boton from "../components/Boton";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useContextState } from '../contextState.js';
import Boton2 from '../components/Boton2';
import Boton4 from '../components/Boton4';
import CustomLogo from '../components/CustomLogo';



const Agregar =({navigation})=>{
  navigation = useNavigation();
  const {contextState, setContextState}= useContextState();
  useEffect (async() => {
    
    if(!contextState.id){
      navigation.navigate("Login")
    }
  },[]);
  
    
    const [Contenido, setContenido] = useState({
      contenido: '',
      descripcion: '',
      edad:'',
      titulo:'',
  });  




  const postContenidos = async (Contenido) => {
      axios
          .post("http://localhost:5000/contenidos/agregar",{
            contenido : Contenido.contenido,
            descripcion : Contenido.descripcion,
            edad : Contenido.edad,
            titulo : Contenido.titulo
          })
          .then((response) => {
            console.log(response.data)
          });
  }



  const AgregarBoton = async () => {
    if (!Contenido.contenido || !Contenido.descripcion || !Contenido.edad || !Contenido.titulo ) {
      console.log("Llenar todos los datos");
    } else {
          await postContenidos(Contenido).then(() => {
          navigation.navigate('Home');  
        });
    }
  }
  

    return (
      <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="cover"  style={styles.image} >
      <View style = {styles.fondo}>
            <View style={styles.container}>
            <CustomLogo onPress={() => navigation.navigate('Home')}/>
            <Text>Agregar Contenido</Text>
            
            <TextInput style={styles.input} placeholder="Contenido" value={Contenido.contenido} onChangeText={text => setContenido({ ...Contenido, contenido: text })}/>

          

            <TextInput style={styles.input} placeholder="Descripcion" value={Contenido.descripcion} onChangeText={text => setContenido({ ...Contenido, descripcion: text })}/>
            <TextInput style={styles.input} placeholder="Edad" value={Contenido.edad} onChangeText={Number => setContenido({ ...Contenido, edad: Number })}/>
            <TextInput style={styles.input} placeholder="Titulo" value={Contenido.titulo} onChangeText={text => setContenido({ ...Contenido, titulo: text })}/>
            
             <Boton4  text={'Agregar'} onPress={AgregarBoton}/> 
            
             </View>
        </View>
      </ImageBackground>
    );
  }
  
  export default Agregar
  
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
      backgroundColor:'white',
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