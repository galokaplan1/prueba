import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import JuegosListItem from '../components/JuegosListItem';
import axios from 'axios';
  
const DescripcionPreguntas =({navigation})=>{

  const [preguntas, setpreguntas] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/preguntas/:id")
        .then((response) => {
          console.log(response.data)
            setpreguntas(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    
    <View style={styles.fondo}>
      <Text style={styles.titulo}>{obj.Descripcion}</Text>
      

      {preguntas.map(obj => <Boton
          text={obj.nombre}
          onPress={ () =>{
              navigation.navigate('Home')
            }}></Boton>)}
    </View>
    
  );
}

  
  export default DescripcionPreguntas;
  
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