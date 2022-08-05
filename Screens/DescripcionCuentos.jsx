import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import CuentosListItem from '../components/CuentosListItem';
import axios from 'axios';
  
const DescripcionCuentos =({navigation})=>{

  const [cuentos, setcuentos] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/cuentos/:id")
        .then((response) => {
          console.log(response.data)
            setcuentos(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    
    <View style={styles.fondo}>
      <Text style={styles.titulo}>{obj.Descripcion}</Text>
      

      {cuentos.map(obj => <Boton
          text={obj.nombre}
          onPress={ () =>{
              navigation.navigate('Home')
            }}></Boton>)}
    </View>
    
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
      backgroundColor : "#7fffd4",

    }
  });