import React  from "react";
import { Text , StyleSheet } from 'react-native';
import {Card, Title ,Paragraph } from 'react-native-paper';
  
const Carta = (props) => {

    const { title, text } = props
      
    return(
         
      <Card>
      <Card.Content style={Styles.container}>
        <Title style={Styles.title}>{title}</Title>
        <Paragraph style={Styles.paragraph}>{text} </Paragraph>
      </Card.Content>
    </Card>
         
    )
}



export default Carta
  
const Styles = StyleSheet.create({
    container :{
      
      opacity: 1.4,
      cornerRadius:5,
      elevation: 4,
      padding: 10,
       margin: 10

    },
  paragraph: {
    fontSize: 14,
  
    textAlign: 'center',
    padding: 10,
       margin: 10

    
  },
  title:{
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
       margin: 10
        
  }
});
