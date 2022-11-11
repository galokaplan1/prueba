import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
//import { useNavigation } from "@react-navigation/native";
import Alert from "react-native-awesome-alerts";


const PreguntaLogo = () => {
    const [showAlert, setShowAlert] = useState(false)

    const onPress = () => {
        setShowAlert(true)
    }

    const hideAlert = () => {
        setShowAlert(false)
    }

    return (
        <View style = {styles.container}>
            <Pressable onPress={onPress}>
            <Image 
                style = {styles.logo}
                source={require("../assets/signo.png")}
                resizeMode="contain"
            />
            </Pressable>
            <Alert
            style = {styles.alerta}
                show={showAlert}
                message="REllenANDO es una app para facilitar materiales, actividades y contenidos a todos aquellos madrijim que tengan un bache sin saber que hacer, además es una excelente herramienta para elegir qué hacer en esos momentos aburridos con amigos, gente del trabajo, familia o cualquier otra persona para poder pasar un lindo momento juntos."
                closeOnTouchOutside={true}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        
    },
    logo: {
      width: 30,
      height: 30,
      left: "90%",
      top:"300%"
    },
    alerta:{
    

    }
  });

export default PreguntaLogo;