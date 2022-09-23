import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import axios from 'axios';

const Documentacion =({navigation})=>{

  const [documentacion, setdocumentacion] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/contenido/documento")
        .then((response) => {
          console.log(response.data)
            setdocumentacion(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    
    <View style={styles.fondo}>
      <View style={styles.margen}>
      {documentacion.map(obj => <Boton
          text={obj.titulo}
          onPress={ () =>{
              navigation.navigate('DescripcionDocumentos',{id:obj.id_contenido})
            }}></Boton>)}

      </View>
    </View>
    
  );
}
  
  export default Documentacion
  
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
      backgroundColor : "#7fffd4",
      flex: 1,
    },
    margen:{
        marginTop: '25%'
    }
  });