import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../Screens/Home'
import { NavigationContainer } from '@react-navigation/native';

import Juegos from '../Screens/Juegos'
import Cuentos from '../Screens/Cuentos'
import Preguntas from '../Screens/Preguntas'
import Documentacion from '../Screens/Documentacion'
import GruposPrivados from '../Screens/GruposPrivados'



const Stack = createNativeStackNavigator()

const MainStack =()=>{
   
return(
<NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen

            options={{headerShown: false, }} 
            name='Home'
            component={ Home }

        />
         <Stack.Screen
            name='Juegos'
            component={ Juegos }
            
        />
        <Stack.Screen
            name='Cuentos'
            component={ Cuentos }

        />
        <Stack.Screen
            name='Preguntas'
            component={ Preguntas }

        />
        <Stack.Screen
            name='Documentacion'
            component={ Documentacion }

        />
        <Stack.Screen
            name='Grupos Privados'
            component={ GruposPrivados }

        />
         
         

    </Stack.Navigator>
</NavigationContainer>


)

}

export default MainStack

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10,

    },
    buttonText:{
    color:'white'
    }



    })