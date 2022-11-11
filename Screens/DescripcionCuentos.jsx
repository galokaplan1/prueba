import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { TabRouter, useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import axios from 'axios';
import Carta from '../components/Card';
  
const DescripcionCuentos =({navigation, route})=>{

  const [descuentos, setdescuentos] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/contenidos/" + route.params.id )
        .then((response) => {
          console.log(response.data)
            setdescuentos(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="cover"  style={styles.image} >
    <View style={styles.fondo}>
      <View style={styles.margen}>
        <Carta style={styles.cartita}
         title={descuentos.titulo}
         text={descuentos.descripcion}
        >

        </Carta>
      </View>

    </View>
</ImageBackground>


    
  );
}

  
  export default DescripcionCuentos;
  
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
      
      flex: 1,
    },
    margen:{
        marginTop: '20%'
    },
    cartita:{


    }
  });