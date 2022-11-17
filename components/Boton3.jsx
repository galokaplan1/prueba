import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton3 = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={style.button}
            onPress={onPress}
        >
            <Text style={style.buttonText}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default Boton3


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: `#008b8b`,
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 10,
        padding: 15,
        width: 220,
        height: 100,
        right: '0%',
        justifyContent:'center',
        marginTop:15,
        marginLeft:15
        
    },

});