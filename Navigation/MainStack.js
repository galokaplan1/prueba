import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../Screens/Home'
import { NavigationContainer } from '@react-navigation/native';

import Juegos from '../Screens/Juegos'
import Cuentos from '../Screens/Cuentos'
import Preguntas from '../Screens/Preguntas'
import Documentacion from '../Screens/Documentacion'
import DescripcionJuegos from '../Screens/DescripcionJuegos';
import DescripcionCuentos from '../Screens/DescripcionCuentos';
import DescripcionDocumentos from '../Screens/DescripcionDocumentos';
import DescripcionPreguntas from '../Screens/DescripcionPreguntas';
import Agregar from '../Screens/Agregar';
import Login from '../Screens/Login';
import Register from '../Screens/Register';



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
            name='Login'
            component={ Login }
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
            name='Agregar'
            component={ Agregar }

        />
        <Stack.Screen
            name='DescripcionJuegos'
            component={ DescripcionJuegos }

        />
        <Stack.Screen
            name='DescripcionCuentos'
            component={DescripcionCuentos }
        />
        <Stack.Screen
            name='DescripcionDocumentos'
            component={DescripcionDocumentos }
        />
        <Stack.Screen
            name='DescripcionPreguntas'
            component={DescripcionPreguntas }
        />
        <Stack.Screen
            name='Register'
            component={Register }
        />

    </Stack.Navigator>
</NavigationContainer>


)

}

export default MainStack