import React  from "react";
import { Text , StyleSheet } from 'react-native';
import {Card, Title ,Paragraph } from 'react-native-paper';
  
const Carta = (props) => {

    const { title, text } = props
      
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title style={Styles.title}>{title}</Title>
        </Card.Content>
       <Card.Content>
        <Paragraph style={Styles.paragraph}>{text}</Paragraph>
        </Card.Content>
      </Card>
         
    )
}
export default Carta
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37,
        flex: 1,
        justifyContent: 'center',
        padding: 20,

  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    marginTop:75

    
  },
  title:{
    backgroundColor: `#008b8b`,
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 15,
        width: '50%',
        left: '25%',
        justifyContent:'center',
        marginTop:5,
        textAlign: 'center',
        position: 'absolute'
        
  }
});


