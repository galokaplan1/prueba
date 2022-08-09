import React  from "react";
import { Text , StyleSheet } from 'react-native';
import {Card, Title ,Paragraph } from 'react-native-paper';
  
const Card = () => {
      
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title>{text}</Title>
        </Card.Content>
       <Card.Content>
        <Paragraph>{Text}</Paragraph>
        </Card.Content>
      </Card>
         
    )
}
export default Card;
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37
    }
})

