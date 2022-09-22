import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

import Boton from "../components/Boton";
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Agregar =({navigation})=>{
  
    navigation = useNavigation();
    const [Contenido, setContenido] = useState({
      contenido: '',
      descripcion: '',
      edad:'',
      titulo:'',
  });  


  const postContenidos = async (Contenido) => {

    useEffect(() => {
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
    }, [])

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
      
      <View style = {styles.fondo}>
            
            <Text>Agregar Contenido</Text>
            
            <TextInput style={styles.input} placeholder="Contenido" value={Contenido.contenido} onChangeText={text => setContenido({ ...Contenido, contenido: text })}/>
            <TextInput style={styles.input} placeholder="Descripcion" value={Contenido.descripcion} onChangeText={text => setContenido({ ...Contenido, descripcion: text })}/>
            <TextInput style={styles.input} placeholder="Edad" value={Contenido.edad} onChangeText={Number => setContenido({ ...Contenido, edad: Number })}/>
            <TextInput style={styles.input} placeholder="Titulo" value={Contenido.titulo} onChangeText={text => setContenido({ ...Contenido, titulo: text })}/>
            
            
            <CustomButton text={'Agregar'} onPress={AgregarBoton}/>
        </View>
      
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
      backgroundColor : "#7fffd4",
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
    }
  });