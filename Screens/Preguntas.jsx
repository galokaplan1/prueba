import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Boton from "../components/Boton";
import { useNavigation } from '@react-navigation/native';

const Preguntas =({navigation})=>{

  const [preguntas, setpreguntas] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/prenguntas")
        .then((response) => {
          console.log(response.data)
            setpreguntas(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    
    <View style={styles.fondo}>
      

      {juegos. map(obj => <Boton
          text='abrir'
          onPress={ () =>{
              navigation.navigate('DescripcionPreguntas')
            }}></Boton>)}
    </View>
    
  );
}
  
  export default Preguntas
  
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