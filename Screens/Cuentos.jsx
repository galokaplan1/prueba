import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import axios from 'axios';
import Boton3 from '../components/Boton3';

const Cuentos =({navigation})=>{

  const [cuentos, setcuentos] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/contenido/cuento")
        .then((response) => {
          console.log(response.data)
            setcuentos(response.data);
            console.log(cuentos)
        });
  }, [])
  
  navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="cover"  style={styles.image} >
    <View style={styles.fondo}>
      <View style={styles.margen}>
      {cuentos.map(obj => <Boton3 style={styles.orden} 
          text={obj.titulo}
          onPress={ () =>{
              navigation.navigate('DescripcionCuentos',{id:obj.id_contenido})
            }}></Boton3>)}

      </View>
    </View>
    </ImageBackground>
  );
}
  
  export default Cuentos
  
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
    fondo: {
    alignContent:'center',
      flex: 1,
      
  
    },
    margen:{
        marginTop: 25
        
    }
  });