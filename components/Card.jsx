import React  from "react";
import { Text , StyleSheet } from 'react-native';
import {Card, Title ,Paragraph } from 'react-native-paper';
  
const Carta = (props) => {

    const { title, text } = props
      
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title>{title}</Title>
        </Card.Content>
       <Card.Content>
        <Paragraph>{text}</Paragraph>
        </Card.Content>
      </Card>
         
    )
}
export default Carta
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37
    }
})

