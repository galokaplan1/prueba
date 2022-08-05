import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default function CuentosListItem ({cuento}){
   
    return (
    
    <View>
        <Text style={styles.lista} >
            {cuento.Nombre}
        </Text>
    </View>
        
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'black',
        marginTop: 30,
        justifyContent:'center'

    }
    });