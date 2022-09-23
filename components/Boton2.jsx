import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton2 = (props) => {

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

export default Boton2


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: `#008b8b`,
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 15,
        width: '80%',
        
        justifyContent:'center',
        marginTop:45
        
    },

});