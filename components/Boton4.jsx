import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton4 = (props) => {

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

export default Boton4


const style = StyleSheet.create({

    buttonText: {
        color: '#2e8b57',
        textAlign: 'center'
    },
    button: {
        backgroundColor: `#f0f8ff`,
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 15,
        width: '80%',
        
        justifyContent:'center',
        marginTop:25
        
    },

});